--- 
hide:
    - navigation
    - toc 
---
# Demo de capacités

_Version actuelle de PMT : {{ config.plugins.pyodide_macros.version }}_

<br> 
 

## Aperçu `IDE`

Une installation complète permet d'obtenir ce résultat, en ajoutant cette commande dans un fichier markdown :

```markdown
{% raw %}{{ IDE('exo') }}{% endraw %}
```

<br>

{{ IDE('exo') }}



## Aperçu `section`


```markdown
{% raw %}{{ section('exo', 'secrets') }}{% endraw %}
```

<br>

{{ section('exo', 'secrets') }}


## Aperçu `terminal`


```markdown
{% raw %}{{ terminal(FILL="3+9") }}{% endraw %}
```

<br>

{{ terminal(FILL="3+9") }}



## Aperçu `multi_qcm`

??? help "Appel complet de la macro"

    ```markdown
    {% raw %}
    {{ multi_qcm(
        [
            """
            On a saisi le code suivant :
            ```python title=''
            n = 8
            while n > 1:
                n = n // 2
            ```
    
            Que vaut `n` après l'exécution du code ?
            """,
            [
                "0",
                "1",
                "2",
                "4",
            ],
            [2]
        ],
        [
            "Quelle est la machine qui va exécuter un programme JavaScript inclus dans une page HTML ?",
            [
                "La machine de l’utilisateur sur laquelle s’exécute le navigateur web.",
                "La machine de l’utilisateur ou du serveur, selon celle qui est la plus disponible.",
                "La machine de l’utilisateur ou du serveur, suivant la conﬁdentialité des données manipulées.",
                "Le serveur web sur lequel est stockée la page HTML."
            ],
            [1],
            {'multi':True}
        ],
        [
            """
            Cocher toutes les bonnes réponses, avec :
            ```python title=''
            meubles = ['Table', 'Commode', 'Armoire', 'Placard', 'Buffet']
            ```
            """,
            [
                "`#!py meubles[1]` vaut `#!py Table`",
                "`#!py meubles[1]` vaut `#!py Commode`",
                "`#!py meubles[4]` vaut `#!py Buffet`",
                "`#!py meubles[5]` vaut `#!py Buffet`",
            ],
            [2, 3]
        ],
        multi = False,
        qcm_title = "Un QCM avec mélange automatique des questions (bouton en bas pour recommencer)",
        DEBUG = False,
        shuffle = True,
        description = "_(Une description additionnelle peut être ajoutée au début de l'admonition...)_\n{style=\"color:orange\"}"
    ) }}
    
    {% endraw %}
    ```

<br>

{{ multi_qcm(
    [
        """
        On a saisi le code suivant :
        ```python title=''
        n = 8
        while n > 1:
            n = n // 2
        ```

        Que vaut `n` après l'exécution du code ?
        """,
        [
            "0",
            "1",
            "2",
            "4",
        ],
        [2]
    ],
    [
        "Quelle est la machine qui va exécuter un programme JavaScript inclus dans une page HTML ?",
        [
            "La machine de l’utilisateur sur laquelle s’exécute le navigateur web.",
            "La machine de l’utilisateur ou du serveur, selon celle qui est la plus disponible.",
            "La machine de l’utilisateur ou du serveur, suivant la conﬁdentialité des données manipulées.",
            "Le serveur web sur lequel est stockée la page HTML."
        ],
        [1],
        {'multi':True}
    ],
    [
        """
        Cocher toutes les bonnes réponses, avec :
        ```python title=''
        meubles = ['Table', 'Commode', 'Armoire', 'Placard', 'Buffet']
        ```
        """,
        [
            "`#!py meubles[1]` vaut `#!py Table`",
            "`#!py meubles[1]` vaut `#!py Commode`",
            "`#!py meubles[4]` vaut `#!py Buffet`",
            "`#!py meubles[5]` vaut `#!py Buffet`",
        ],
        [2, 3]
    ],
    multi = False,
    qcm_title = "Un QCM avec mélange automatique des questions (bouton en bas pour recommencer)",
    DEBUG = False,
    shuffle = True,
    description = "_(Une description additionnelle peut être ajoutée au début de l'admonition...)_\n{style=\"color:orange\"}"
) }}

