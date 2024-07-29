---
tags:
  - python
  - seconde
hide :
  - feedback
---
# Les fonctions

## Définitions et premiers exemples 
 
!!! coeur "fonction"
	Une **fonction** est un sous-programme qui rajoute une fonctionnalité à python. 
	Elle comporte :   
	
	- le nom d'_appel_ de la fonction : qui ordonne à l'interpréteur d'exécuter la fonction   
	- des _paramètres d'entrée_ (des noms de variables) à prendre en compte ou à modifier   
	- le _corps de la fonction_ est l'ensemble des instructions du sous-programme  
	- un _renvoi_ de valeurs en sortie.  
	!!! warning inline end "Important"

		Cliquez sur les + et prenez le temps de lire les commentaires !
		
	```python title="syntaxe d'une fonction dans python "
	def nom_de_fontion(paramètres séparés par une vigule) :  # (1)!
		""" 
		les instructions à exécuter
		le cors de la fonction est indenté 
		à l'aide de la touche  ++tab++
		""" # (2)!
		return resultat(s) # (3)!
	```
	
	1. :warning:  les deux points obligatoires.
	
	2. :warning:  même indentation pour toutes les lignes.
	
	3. :warning:  facultative mais recommandée.
	
	L'instruction ```#!python nom_de_fontion()``` avec les valeurs des paramètres d'entrée est un **appel de fonction**.

!!! example "Un premier exemple"
	Exécuter le script ci-dessous. Rien ne se passe, c'est normal.  
	L'interpréteur a juste pris en compte la définition de la fonction ```#!python fois_sept()``` de paramètre ```#!python n```.  
	
	Pour faire appel à la fonction on peut : 
		
	1. **Dans la console** : saisir et valider l'**appel de la fonction** avec l'argument $2$ :
		```python title="script console"
		>>> fois_sept(5)
		```  
	1. **Dans le script** : créer une variable nommée `nbr` à laquelle vous affecterez la valeur renvoyée par la fonction ```#!python fois_sept()``` avec l'argument $5$.
		Exécuter et valider votre script.
		
    {{ IDE('example01', MAX_SIZE=12, TERM_H=4) }}
	
!!! coeur "paramètre et argument"

	Dans l'exemple précédent, la fonction ```#!python fois_sept()``` a pour **paramètre** la variable ```n```.  
	
	Dans l'appel ```#!python fois_sept(5)```, $5$ est l'**argument** de la fonction.  Il **renvoie** la valeur $35$.
	
!!! example "fonction sans résultat renvoyé" 
	La fonction ```#!python carre()``` ci-dessous :  
	
	- prend pour paramètre ```n```,   
	- **affiche** le carré de ```n```  
	- ne **renvoie** rien.  
	
	1. Exécuter le script suivant.
	1. Vérifier à l'aide d'une instruction ```print()``` que la variable ```a``` contient ```None``` (rien).
	
    {{ IDE('example02', MAX_SIZE=12, TERM_H=4) }}

 
!!! warning  
	Une fonction qui renvoie rien en sortie s'appelle une **procédure**.  
	Le langage Python ne fait pas de différence dans la syntaxe entre fonction et procédure.  
	Il vaut par la suite rajouter une instruction ```return``` pour bien visualiser la fin de la fonction.
	Les résultats créés par la fonction et non renvoyé par une commande ```return``` sont effacés de la mémoire.
  
 
!!! example "gérer l'indentation" 
	La fonction ```#!python somme()``` doit :  
	
	- prendre pour paramètres ```x``` et ```y```,    
	- **renvoyer** le résultat de ```2x-3y```.  
	
	1. Exécuter le script. Une erreur ```#!python IndentationError``` est signalée.  
	1. Selectionner les lignes 2 et 3, puis appuyer sur la touche ++tab++ pour corriger l'indentation, et relancer le script.
	1. Saisir dans la console ```#!python >>>somme(3,4)```. Une erreur ```#!python TypeError``` est signalée.
	1. Rajouter l'argument ```y``` dans la fonction ```somme()```. Relancer et valider le script.
	1. Créer une variable ```a``` et lui affecter la valeur renvoyée par ```#!python somme(0,2)```
	1. Créer une variable ```b``` et lui affecter la valeur renvoyée par ```#!python somme(2,0)```
	1. Que renvoie la comparaison ```a != b``` ?
	
    {{ IDE('example03', MAX_SIZE=12, TERM_H=4) }}

!!! coeur 
	Pour une fonction avec plusieurs _paramètres_, l'ordre dans lequel les _arguments_ sont donnés est important.

## QCM 

{{ multi_qcm(
    [
    """ 
	Soit la fonction suivante :
	```python linenums='1'
	def mafonction(  a ) :
		b = a**2 + 3 * a + 2
		return b 
	```
	
	 L'appel ```#!python mafonction(1)``` renvoie :
    """,
        [
            """```#!python 6 ```""",
            """```#!python 7 ```""",
            """```#!python None```""",
            """`#!python rien`""",
        ],
        [1],
    ], [
    """ 
	Soit la fonction suivante :
	```python linenums='1'
	def mafonction ( a ) :
		b = a**2 - 3 * a + 2
		print( b ) 	  
	```
	
	L'appel ```#!python mafonction(2)``` renvoie :
    """,
        [
            """```#!python 0 ```""",
            """```#!python 0.0 ```""",
            """```#!python None```""",
            """`#!python rien`""",
        ],
        [3],
    ],  
	 [
    """ 
	Soit la fonction suivante :
	```python linenums='1'
	def mafonction(b , a) :
		return 2 * a + b   
	c = mafonctionC(2**3 ,2+3 )	  
	```
	
	La variable ```c``` a pour valeur :
    """,
        [
            """```#!python 16 ```""",
            """```#!python 17 ```""",
            """```#!python 18```""",
            """`#!python 21`""",
        ],
        [3],
    ], 
	 [
    """ 
	Soit la fonction suivante :
	```python linenums='1'
	def f(a , b ,x) :
		return a*x+b  
	```
	
	L'appel  ```f(2,3,4)``` renvoie :
    """,
        [
            """```#!python 10 ```""",
            """```#!python 11 ```""",
            """```#!python 14```""",
            """`#!python 0`""",
        ],
        [2],
    ],
	 [
    """ 
	Soit la fonction suivante :
	```python linenums='1'
	def f(a , b ,x) :
		return a*x+b  
	```
	
	La comparaison  ```f(2,1,3)==7``` renvoie :
    """,
        [
            """```#!python True ```""",
            """```#!python False`""",
        ],
        [1],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def hi (a, b):
		return a * b

	def hello (a, b):
		return a + b
	```
	
	L'appel ```#!python hi(2, 2) + hello(3, 3)``` renvoie la valeur :
    """,
        [
            """```#!python 8```""",
            """```#!python 8```""", 
            """```#!python 10```""", 
            """```#!python 11```""", 
        ],
        [3],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def hi (a, b):
		return a * b

	def hello (a, b):
		return a + b
		
	a = hi( 1, 2)
	```
	
	L'appel ```#!python hello(a, 1)``` renvoie la valeur :
    """,
        [
            """```#!python 1```""",
            """```#!python 2```""", 
            """```#!python 3```""", 
            """```#!python 4```""", 
        ],
        [3],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def hi (a, b):
		return a * b

	def hello (a, b):
		return a + b
	```
	
	L'appel ```#!python hello(hi(3, 2), 4)``` renvoie la valeur :
    """,
        [
            """```#!python 10```""",
            """```#!python 11```""", 
            """```#!python 20```""", 
            """```#!python 24```""", 
        ],
        [1],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def hi (a, b):
		return a * b

	def hello (a, b):
		return hi(a, b + 1)
	```
	
	L'appel ```#!python hello(2, 2)``` renvoie la valeur :
    """,
        [
            """```#!python 4```""",
            """```#!python 5```""", 
            """```#!python 6```""", 
            """```#!python 8```""", 
        ],
        [3],
    ],
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}


## Exercices 

???+ question "Exercice 1" 
	Compléter le script ci-dessous de la fonction d'appel ```#!python affine()``` :   
	
	- de paramètre ```x```   
	- qui renvoie ```3*x-1```  
	
	Valider votre réponse (++ctrl+enter++) et lire la solution.
	
    {{ IDE('exercice01', ID='ex01', MAX_SIZE=6, TERM_H=3) }}



???+ question "Exercice 2" 
	Compléter le script ci-dessous de la fonction d'appel ```#!python mystere()``` :  
	
	- de paramètres ```x``` et ```y```   
	- calcule ```u = x + y```    
	- calcule ```v = 3*x```  
	- renvoie ```u-v```  
	
	Valider votre réponse (++ctrl+enter++) et lire la solution.
	
    {{ IDE('exercice02', ID='ex02', MAX_SIZE=6, TERM_H=3) }}



???+ question "Exercice 3" 	
	
	Écrire le script d'une fonction d'appel ```mafonction()```: 
	
	- prend pour paramètre ```x```
	- renvoie la somme de son carré et de $5$ 
	
    {{ IDE('exercice03', ID='ex03', MAX_SIZE=6, TERM_H=3) }}