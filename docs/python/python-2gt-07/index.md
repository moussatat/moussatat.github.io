---
tags:
  - python/TD
  - seconde 
hide :
  - feedback
--- 
# Fonctions et instructions conditionnelles

## QCM pour débuter 

{{ multi_qcm(
    [
    """ 
	Soit le script suivant :
	```python linenums='1'
	def fonction(x) :
		if x <= 0 :
			return 0
		else :
			return 1 
	```
	
	L'appel ```#!python fonction(3)``` renvoie la valeur :
    """,
        [
            """```#!python 0```""",
            """```#!python 1```""", 
        ],
        [2],
    ], 
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def fonction(x) :
		if x <= 2 :
			return 3*x-1
		else :
			return x+3 
	```
	
	L'appel ```#!python fonction(10)-fonction(0)``` renvoie la valeur :
    """,
        [
            """```#!python 30```""",
            """```#!python 26```""",
            """```#!python 14```""", 
            """```#!python 10```""", 
        ],
        [3],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def fonction(p) :
		if p%2 == 0 :
			return p//2
		else :
			return 3*p+1
	```
	
	L'appel ```#!python fonction(12)``` renvoie la valeur :
    """,
        [
            """```#!python 6```""",
            """```#!python 0```""", 
            """```#!python 37```""", 
        ],
        [2],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def hi (a, b):
		if (a < b)
			return a + b
		else
			return a * b
	```
	
	L'appel ```#!python hi(2, 3)``` renvoie la valeur :
    """,
        [
            """```#!python 5```""",
            """```#!python 6```""", 
            """```#!python 8```""", 
            """```#!python 23```""", 
        ],
        [1],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	def hi (a, b):
		if (a < b)
			return a + b
		else
			return a * b
	```
	
	L'appel ```#!python hi(3, 2)``` renvoie la valeur :
    """,
        [
            """```#!python 5```""",
            """```#!python 6```""", 
            """```#!python 9```""", 
            """```#!python 32```""", 
        ],
        [2],
    ],
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}

 

## Exercices 


???+ question "Exercice 1" 
	  
	Le tarif de base de la location d'une voiture est de 75€ pour tout trajet inférieur à 250 km.  
	Pour un trajet supérieur à 250 km, on rajoute 0.28€ par km **supplémentaire** parcouru.
	
	1. Vérifier que si le trajet est de 350 km, le tarif est de 103€.
	1. Compléter le script si-dessous de la fonction d'appel ```#!python location()``` :
		- qui prend pour paramètre ```x```
		- renvoie le tarif ```tarif```
		- pour ```x``` inférieur à $250$, elle renvoie ```75```
		- pour ```x``` supérieur à $250$, elle renvoie ```75+0.28*(x-250)```
		
	Valider votre script pour vérifier votre réponse.
	
    {{ IDE('exercice01', ID='exercice01', MAX_SIZE=10, TERM_H=6) }}
 	
???+ question "Exercice 2" 
	  
	Compléter le script de la fonction d'appel ```mafonction()``` d'argument ```x``` et qui : 
	 
	- renvoie le double de ```x``` si ```x``` est positif ou nul.
	- renvoie ```x-1``` sinon.
		
	Valider votre script pour vérifier votre réponse.
	
    {{ IDE('exercice02', ID='exercice02', MAX_SIZE=10, TERM_H=6) }}

???+ question "Exercice 3" 
	
	Le script ci-dessous sont :
	
	1. la fonction d'appel ```rectangle()```  qui prend pour paramètres ```longueur``` et ```largeur``` et renvoie l'aire du rectangle correspondant.   
	1. la fonction d'appel ```disque()```  qui prend pour paramètres ```rayon``` et renvoie l'aire du disque correspondant.  
	
	Corriger les erreurs, compléter les scripts et valider votre réponse.
	
	_Indication : ```pi``` est une instruction de la librairie ```math```_
	
    {{ IDE('exercice03a', ID='exercice03a', MAX_SIZE=4, TERM_H=6) }} 
    {{ IDE('exercice03b', ID='exercice03b', MAX_SIZE=4, TERM_H=6) }}


???+ question "Exercice 4" 	
	
	Écrire le script d'une fonction d'appel ```mafonction()```:
	
	- prend pour paramètre ```x```
	- renvoie sa racine carrée s'il est strictement positif.
	- renvoie $1$ sinon. 
	
	_Indication : l'instruction ```sqrt()``` de la librairie ```math``` permet de calculer la racine carrée_
	
    {{ IDE('exercice04', ID='exercice04', MAX_SIZE=10, TERM_H=6) }} 
	

???+ question "Exercice 5" 	

	Écrit le script d'une fonction d'appel ```mafonction()``` qui : 
	
	- prend pour agument ```longueur``` et ```largeur```
	- renvoie une ```False``` si la valeur d'un des paramètre est négative.
	- renvoie le périmètre du rectangle sinon.
	
    {{ IDE('exercice05', ID='exercice04', MAX_SIZE=10, TERM_H=6) }} 
	