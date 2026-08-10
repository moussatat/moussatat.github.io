/* ============================================================
   Minuteur pour les rituels d'entrée ("Do Now")
   À placer dans docs/javascripts/rituels.js
   et déclarer dans mkdocs.yml :

   extra_javascript:
     - javascripts/rituels.js
   ============================================================ */

let ritualTimer;

function startTimer(minutes) {
    clearInterval(ritualTimer);
    let time = minutes * 60;
    const display = document.getElementById('time');
    const render = () => {
        const m = String(Math.floor(time / 60)).padStart(2, "0");
        const s = String(time % 60).padStart(2, "0");
        display.textContent = m + ":" + s;
    };
    render();
    ritualTimer = setInterval(function () {
        time--;
        if (time < 0) {
            clearInterval(ritualTimer);
            display.textContent = "Temps écoulé !";
            return;
        }
        render();
    }, 1000);
}

function resetTimer() {
    clearInterval(ritualTimer);
    const display = document.getElementById('time');
    if (display) display.textContent = "05:00";
}

/* ------------------------------------------------------------
   Menu déroulant "choisir un rituel"
   On détecte chaque section par son id `#rituel-XX`, PAS par le
   texte affiché du titre : chaque "## ..." doit porter un id
   explicite via attr_list, ex. `## Rituel 03 {: #rituel-03 }`.
   Ainsi le texte du titre reste 100% personnalisable (emoji,
   période, numéro...) sans jamais casser la détection — contrairement
   à un id auto-généré par mkdocs à partir du texte, qui changerait
   si le titre change.

   Pour le TOUT DERNIER rituel, il n'y a pas de "h2 suivant" pour
   arrêter la collecte : sans garde-fou, elle continuerait dans les
   éléments injectés par le thème après le contenu markdown (ex.
   le bloc "Cette page vous a-t-elle été utile ?", .md-feedback),
   qui se retrouveraient alors masqués/affichés en même temps que
   ce dernier rituel au lieu de rester toujours visibles. On arrête
   donc aussi la collecte sur ce genre d'élément. */

let ritualsCache = [];

function isThemeInjectedElement(el) {
    return el.classList.contains('md-feedback')
        || el.hasAttribute('data-md-component');
}

function collectRituals() {
    const headings = Array.from(document.querySelectorAll('h2[id^="rituel"]'));
    return headings.map((h) => {
        const nodes = [];
        let el = h.nextElementSibling;
        while (el && el.tagName !== 'H2' && !isThemeInjectedElement(el)) {
            nodes.push(el);
            el = el.nextElementSibling;
        }
        return { id: h.id, heading: h, label: h.textContent.trim(), nodes };
    });
}

/* ------------------------------------------------------------
   Le minuteur (#ritual-timer-box) n'existe qu'une seule fois
   dans la page. On le déplace physiquement (pas de clone, donc
   les boutons onclick restent fonctionnels) dans le .timer-slot
   du rituel actuellement affiché, pour qu'il reste "au milieu
   des 4 questions" quel que soit le rituel sélectionné.
   ------------------------------------------------------------ */
function relocateTimer(nodes) {
    const timerEl = document.getElementById('ritual-timer-box');
    if (!timerEl || !nodes) return;

    let slot = null;
    for (const n of nodes) {
        if (n.classList && n.classList.contains('timer-slot')) {
            slot = n;
        } else if (n.querySelector) {
            slot = n.querySelector('.timer-slot');
        }
        if (slot) break;
    }
    if (slot) slot.appendChild(timerEl);
}

/* ------------------------------------------------------------
   Idem pour l'admonition "Si tu as terminé avant la fin du
   chrono" (#ritual-tip-box) : un seul bloc dans le HTML, déplacé
   sous le rituel affiché. Pas besoin de la recopier dans chaque
   "## Rituel NN" — elle apparaît automatiquement en dessous de
   chaque grille, juste avant le séparateur "---" suivant (ou en
   fin de section s'il n'y en a pas).
   ------------------------------------------------------------ */
function relocateTip(nodes) {
    const tipEl = document.getElementById('ritual-tip-box');
    if (!tipEl || !nodes || nodes.length === 0) return;

    const parent = nodes[0].parentNode;
    if (!parent) return;

    const hr = nodes.find((n) => n.tagName === 'HR');
    if (hr) {
        parent.insertBefore(tipEl, hr);
    } else {
        const last = nodes[nodes.length - 1];
        parent.insertBefore(tipEl, last.nextSibling);
    }
}

function showRitual(id) {
    if (ritualsCache.length === 0) return;

    if (id === 'aleatoire') {
        id = ritualsCache[Math.floor(Math.random() * ritualsCache.length)].id;
    }

    let activeNodes = null;
    ritualsCache.forEach((r) => {
        const show = r.id === id;
        r.heading.style.display = show ? '' : 'none';
        r.nodes.forEach((n) => { n.style.display = show ? '' : 'none'; });
        if (show) activeNodes = r.nodes;
    });

    relocateTimer(activeNodes);
    relocateTip(activeNodes);

    const picker = document.getElementById('ritual-picker');
    if (picker) picker.value = id;

    localStorage.setItem('lastRitual', id);
    resetTimer();
}

/* ------------------------------------------------------------
   Widget "Avez-vous trouvé le contenu de la page utile ?"
   Sur cette page, il peut se retrouver mal placé (en haut à
   droite, à côté des boutons "Modifier"/"Voir la source") au
   lieu du bas de la page comme partout ailleurs sur le site.
   On le replace simplement en tout dernier enfant du contenu :
   quelle que soit la cause du décalage, ça le remet en bas,
   dans le flux normal. Scopé à cette page uniquement (appelé
   seulement si #ritual-picker existe, voir initRitualPicker).
   ------------------------------------------------------------ */
function relocateFeedback() {
    const article = document.querySelector('.md-content__inner');
    const feedback = document.querySelector('.md-feedback');
    if (article && feedback) {
        article.appendChild(feedback);
    }
}

function initRitualPicker() {
    ritualsCache = collectRituals();
    const picker = document.getElementById('ritual-picker');
    if (!picker || ritualsCache.length === 0) return;

    relocateFeedback();

    picker.innerHTML =
        '<option value="aleatoire">🎲 Rituel aléatoire</option>' +
        ritualsCache.map((r) => `<option value="${r.id}">${r.label}</option>`).join('');

    const saved = localStorage.getItem('lastRitual');
    const initial = ritualsCache.some((r) => r.id === saved) ? saved : ritualsCache[0].id;
    showRitual(initial);

    picker.addEventListener('change', () => showRitual(picker.value));
}

/* mkdocs-material recharge le contenu en AJAX (navigation instantanée) :
   document$ se déclenche à chaque changement de page, y compris le
   premier chargement — c'est le point d'entrée fiable pour ce thème. */
if (typeof document$ !== 'undefined') {
    document$.subscribe(initRitualPicker);
} else {
    document.addEventListener('DOMContentLoaded', initRitualPicker);
}

/* ------------------------------------------------------------
   Mode projection (écran 4:3)
   Bascule la classe CSS + le plein écran natif du navigateur.
   ------------------------------------------------------------ */

function toggleProjectionMode() {
    const active = document.body.classList.toggle('projection-mode');

    if (active) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {
                /* plein écran refusé/non supporté : on garde quand même
                   le cadre 4:3, juste sans plein écran natif */
            });
        }
    } else if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen();
    }
}

/* si l'utilisateur quitte le plein écran avec Échap, on retire
   aussi la classe pour rester synchronisé */
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('projection-mode');
    }
});
