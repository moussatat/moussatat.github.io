---
tags:
  - python
  - seconde
hide :
  - feedback
---
# Types de valeurs et opérations

Utiliser les terminaux pour compléter votre  [fiche Memento Python pour la seconde```.pdf```](../memento-2gt.pdf)[^1].
Àprès avoir lu le paragraphe "à reternir", répondez aux questions à choix multiple pour vérifier votre compréhension.


 
## Types natifs de valeurs

!!! question 

	1. Taper l'instruction ci-dessous dans le terminal est vérifier que `#!python 4` est de type ```#!python int```
		```python  title="console python"
		>>> type(4)
		```
	1. À l'aide de l'instruction ```#!python type()``` déterminer le type des valeurs ```#!python 4.0``` et ```#!python 3E5```.
	2. Déterminer le type des valeurs ```#!python "Bonjour"```, ```#!python '4'``` et ```#!python """entre guillemets triples"""```
	3. Même question pour les valeurs ```#!python True``` et ```#!python False```.

    {{ terminal() }}

!!! success "À retenir"  

	- les entiers sont de type ```#!python int``` (pour _integers_)
	- les nombres flottants sont de type ```#!python float``` (pour _floating point numbers_)  
	- les séquences de texte (mots, phrases...) sont de type ```#!python str``` (pour _string_)
	- les booléens représentant un des deux états, ```#!python True``` ou ```#!python False``` sont de type ```#!python bool```
 
{{ multi_qcm(
    [
    """
    La valeur ```#!python 3.1``` est de type : 
    """,
        [
            "integer",
            "float",
            "boolean",
            "string",
        ],
        [2],
    ],
    [
	"""
    La valeur ```#!python 'pi'``` est de type : 
    """,
        [
            "integer",
            "float",
            "boolean",
            "string",
        ],
        [4],
    ],
    [
	"""
    La valeur ```#!python 3``` est de type : 
    """,
        [
            "integer",
            "float",
            "boolean",
            "string",
        ],
        [1],
    ],
    [
	"""
    La valeur ```#!python 3.0``` est de type : 
    """,
        [
            "integer",
            "float",
            "boolean",
            "string",
        ],
        [2],
    ],
    [
	"""
    La valeur ```#!python '21'``` est de type : 
    """,
        [
            "integer",
            "float",
            "boolean",
            "string",
        ],
        [4],
    ],
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = True
) }}


## Les opérations 

### Les opérations sur les nombres

| Opération | Résultat | Exemple |
|:---------:|:--------:|:-------:|
| ```x+y``` | somme de ```x``` et ```y``` |  ```3#!python 2+10```  renvoie ```42``` |
| ```x-y``` | différence de ```x``` et ```y``` |  ```#!python 80-38```  renvoie ```42``` |
| ```x*y``` | produit de ```x``` et ```y``` |  ```#!python 6*38```  renvoie ```42``` |
| ```x/y``` | quotient de ```x``` et ```y``` |  ```#!python 355/113```  renvoie {{ 355/113 }} |
| ```x**y``` |   ```x``` à la puissance ```y``` |  `#!python 2**6`  renvoie {{ 2**6 }} </br>   `#!python 6**2`  renvoie {{ 6**2 }}  |
| ```x//y``` |   quotient entier de ```x``` par ```y``` |  ```#!python 42//11```  renvoie {{ 42//11 }} </br> ```#!python 42//6```  renvoie {{ 42//6 }} |
| ```x%y``` |   reste de la division entière de ```x``` par ```y``` |  ```#!python 42%11```  renvoie {{ 42%11 }} </br> ```#!python 42%6```  renvoie {{ 42%6 }} |

!!! tip "La division entière" 
    La division entière de ```42``` par ```11``` s'écrit $42=3\times 11+9$. 
        
	- ```#!python 42//11``` se lit «  division entière de 42 par 11 » et renvoie `3`  
	- ```#!python 42%11``` se lit « 42 modulo 11 » et renvoie `9`
    
	La division entière d'entier renvoie un entier !

!!! question "types des valeurs renvoyées par une opération"

    1. Comparer le type des valeurs renvoyées par ```#!python 18/3``` et ```#!python 18//3```
	2. Comparer le type des valeurs renvoyées par ```#!python 2**3``` et ```#!python 2.0**3```
    {{ terminal(TERM_H=4,) }}


### Les opérations sur les séquences de texte
 
| Opération | Exemple |
|:---------:|:-------:|
| Concaténation | ```#!python "pa"+"pi"``` renvoie  ```#!python "papi"``` |
| Répétition |  ```#!python 3*"pom"``` renvoie ```#!python "pompompom"``` |

 
{{ multi_qcm(
    [
    """
    L'expression ```#!python 5**2``` s'évalue à : 
    """,
        [
            """```#!python 25 ```""",
            """```#!python 25.0 ```""",
            """```#!python 10```""",
            """`#!python 10.0`""",
        ],
        [1],
    ], 
	[
     """
    L'expression ```#!python 5/2``` s'évalue à : 
    """,
        [
            """`#!python 2.5`""",
            """`#!python 2`""",
            """`#!python 0.4`""",
            """`#!python 52`""",
        ],
        [1],
    ],
	[
	 """
    L'expression ```#!python 5//2``` s'évalue à : 
    """,
        [
            """```#!python 2.5```""",
            """```#!python 2```""",
            """```#!python 0.4```""",
            """```#!python 52```""",
        ],
        [2],
    ],
	[
	 """
    L'expression ```#!python 5/0``` s'évalue à : 
    """,
        [
            """`#!python 5`""",
            """`#!python 0`""",
            """message d'erreur""",
            """on ne peut pas savoir""",
        ],
        [3],
    ],
	[
	 """
    L'expression ```#!python 0//5``` s'évalue à : 
    """,
        [
            """`#!python 0`""",
            """`#!python 0.0`""",
            """message d'erreur""",
            """`#!python 5.0`""",
        ],
        [1],
    ],
	[
	 """
    L'expression ```#!python 2**4``` s'évalue à : 
    """,
        [
            """`#!python 8`""",
            """`#!python 8.0`""",
            """`#!python 16`""",
            """`#!python 32`""",
        ],
        [3],
    ],
	[
	 """
    L'expression ```#!python 10%2``` s'évalue à : 
    """,
        [
            """`#!python 5`""",
            """`#!python 5.0`""",
            """`#!python 0`""",
            """`#!python 10.2%`""",
        ],
        [3],
    ],
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = True
) }}


 

 
## Sources
 
[^1]:  léger remix d'un travail de [Vincent Robert](https://nsi.xyz/start-p3)
