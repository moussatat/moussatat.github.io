/* ============================================================
   Configuration TikZJax (rod2ik/tikzjax)
   https://github.com/rod2ik/tikzjax
   https://rod2ik.github.io/tikzjax/

   Ce fichier DOIT être chargé AVANT tikzjax.min.js (voir le bloc
   Jinja {% block libs %} dans overrides/main.html). Il ne fait que
   définir des options : il ne rend rien tout seul.
   ============================================================ */
window.TikzJaxOptions = {
    renderTimeout: 30000,
    maxRetries: 1,
    restartWorkerOnFail: true,

    workerPool: {
        enabled: true,
        maxWorkers: 3,
        reserveCpuCores: 1,
        useDeviceMemory: true,
        initializationRetries: 1
    },

    tex: {
        /* Paquets LaTeX chargés globalement (nécessaire pour les blocs
           ```tikzjax fermés à trois côtes, qui ne peuvent pas déclarer
           data-tex-packages localement — et pratique aussi pour éviter
           tout souci de parsing de l'attribut data-tex-packages sur les
           balises <script>).
           - tkz-tab (tableaux de signes/variations) : usage très
             fréquent en maths lycée.
           - amsmath : nécessaire dès qu'un tableau utilise des
             commandes comme \dfrac, \infty stylé, etc. à l'intérieur
             du tikzpicture (⚠️ ce n'est PAS le même moteur que le
             MathJax/KaTeX du reste du site : un \dfrac dans un
             $...$ normal de la page n'a rien à voir avec un \dfrac
             utilisé DANS un \tkzTabInit, qui doit être chargé ici).

           ⚠️ \mathscr NE MARCHE PAS dans un tikzpicture, même avec
           "mathrsfs" chargé ici : le .sty se charge sans erreur (visible
           dans les logs), mais la police rsfs (glyphes du \mathscr)
           n'est apparemment pas incluse dans le bundle de polices de
           TikZJax, donc \mathscr reste "Undefined control sequence" à
           l'utilisation. Utiliser \mathcal{...} à la place à l'intérieur
           des tikzpictures (police calligraphique standard, toujours
           disponible, sans paquet) — \mathscr reste OK partout ailleurs
           sur la page (texte normal, rendu par MathJax). */
        texPackages: {
            "tkz-tab": "",
            "amsmath": ""
        },
        tikzLibraries: []
    }

    /* Note : en thème sombre, TikZJax assombrit automatiquement les
       remplissages très clairs (ex. colorC=blue!15) pour qu'ils restent
       visibles sur fond sombre — comportement par défaut du thème,
       volontairement conservé tel quel ici (pas de surcharge
       `theme.adaptiveColors`/`theme.adaptiveFills`). */
};
