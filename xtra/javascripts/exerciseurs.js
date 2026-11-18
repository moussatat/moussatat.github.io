/* Exerciseurs : injecte le bouton "Mode projection" à droite du titre h2
   de chaque conteneur #exo-* (sauf s'il en a déjà un). */
function exoToggleProjection() {
    const on = document.body.classList.toggle('exo-proj');
    if (on) {
        if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function exoInit() {
    document.body.classList.remove('exo-proj');
    document.querySelectorAll('[id^="exo-"]').forEach((root) => {
        if (root.querySelector('.btn-proj')) return;
        const h2 = root.querySelector(':scope > h2');
        if (!h2) return;
        const head = document.createElement('div');
        head.className = 'exo-head';
        h2.parentNode.insertBefore(head, h2);
        head.appendChild(h2);
        const b = document.createElement('button');
        b.className = 'btn-proj';
        b.textContent = '🖥️ Mode projection';
        b.onclick = exoToggleProjection;
        head.appendChild(b);
    });
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) document.body.classList.remove('exo-proj');
});

if (typeof document$ !== 'undefined') document$.subscribe(exoInit);
else document.addEventListener('DOMContentLoaded', exoInit);
