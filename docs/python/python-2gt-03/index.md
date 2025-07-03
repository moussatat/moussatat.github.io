---
tags:
  - python
  - seconde
hide :
  - feedback
---
# Variables et affectation 


!!! coeur "Une Variable est le nom que l’on donne à une valeur"

 
!!! example 

	1. Exécuter l'instruction ```#!python a=1``` dans le terminal ci-dessous 
    {{ terminal(FILL='a=1', TERM_H=4) }} 
    Vous venez de :  
		1. créer une variable nommée ```#!python a```  
		1. affecter la valeur $1$ à ```#!python a```
	1. Utiliser l'instruction ```#!python type(a)``` pour vérifier le type de la variable ```#!python a```
	1. Utiliser l'instruction suivante dans le terminal :
		```python  title="console python"
		>>> print(a+1)
		```
	1. Rentrer l'instruction ```#!python a``` dans le terminal pour vérifier que la variable ```#!python a``` reste inchangée.
	1. Utiliser l'instruction suivante dans le terminal :
		```python  title="console python"
		>>> a = a + 1
		```
		Faire afficher la nouvelle valeur de ```#!python a``` dans le terminal.
		
!!! example "Double affectation"
	Exécuter le script ci-dessous. La première ligne crée  les variables   ```#!python a```  et ```#!python b``` et précise leur valeurs.
    {{ IDE('affectation01', MAX_SIZE=4, TERM_H=3) }}
    
!!! warning "Sans les guillemets, l'interprète considère que ```#!python Bob``` est le nom d'une variable !"   

    1. Exécuter le script ci-dessous.  
		Explications :
	    1. La variable ```#!python expediteur``` est de type ```#!python str``` et a pour valeur ```#!python "Alice"```  
	    1. À la ligne 2, l'intepréteur ne reconnait pas de **variable** de nom ```#!python Bob```
    2. Corriger la ligne 2 en rajoutant les guillemets nécessaires et relancer le script.
    {{ IDE('affectation02', MAX_SIZE=4, TERM_H=3) }}


???+ question "Exercice 1" 
	Écrire un script python qui :   
	
	- crée une variable nommée `mot` à laquelle vous affecterez la valeur "Bon"  
	- fait afficher la valeur de la variable à l'aide d'une instruction  ```#!python print()```  
	- crée une variable nommée `s` à laquelle vous affecterez la valeur ```#!python 2*mot```  
	
	Valider votre réponse (++ctrl+enter++).
	
    {{ IDE('exercice01', ID='ex01', MAX_SIZE=6, TERM_H=4) }}

???+ question "Exercice 2" 
	Écrire un script python qui :   
	
	- crée une variable nommée `a` à laquelle vous affecterez la valeur "pa"  
	- crée une variable nommée `b` à laquelle vous affecterez la valeur "radis"   
	- crée une variable nommée `s` égale à la concaténation de `a` suivi de `b`  
	
	Valider votre réponse (++ctrl+enter++)
	
    {{ IDE('exercice02', ID='ex02', MAX_SIZE=6, TERM_H=3) }}
	
	
???+ question "Exercice 3"

	Créer une variable nommée `nombre` à laquelle vous affecterez la valeur `42.0` et faites afficher, dans la console, le type de cette variable.

	{{ terminal() }}

    ??? success "Solution"

    	```pycon
		>>> nombre = 5.5
		>>> type(nombre)
		``` 

!!! warning "noms de variables"
	Dans Python  un nom de variable peut commencer par une lettre, par un underscore `_` mais pas par un chiffre.   
	On choisira un nom qui clarifie la valeur enregistrée. Si la valeur $15$ correspond à l'age de Nina on peut utiliser :  
	- ```#!python age_de_nina = 15``` (tout en minuscules, mots séparés par un  underscore `_`)  
	- ```#!python AgeDeNina = 15``` (quelques majuscules pour identifier les mots)
		
## Controler le déroulement d'un code

Le déroulement d'un code est l'ordre dans lequel les lignes du code sont exécutées. 

En l'absence de boucles ou d'instructions conditionnelles, l'intepréteur exécute les instructions dans l'ordre d'écriture.

Il faut apprendre à controler le déroulement d'un code (_dérouler le code_) en se substituant à l'intepréteur.

!!! example  "déroulement d'un code"
	<table>
	<tr>
		<td>
		Le code
		</td>
		<td>
		Le déroulement 
		</td>
	</tr>
	<tr>
		<td>
	```python linenums="1"
	a = 101
	b=4
	e=a*b 
	b=b+1
	d=e+2**b
	a=d+1
	```
		</td>
	<td> 
	```python linenums="1"
	a = 101
	b = 4
	e = 404 
	b = 4+1 = 5 	# nouvelle valeur de b
	d = 404 + 2**5 = 436  
	a = 436+1= 437	# nouvelle valeur de a
	```
	</td> 
	</tr>
	</table> 
	En fin de script, la variable ```#!python a``` a pour valeur ```#!python 437```
	
	
???+ question "Exercice 4 - déroulement à faire sur papier"

	```python linenums='1'
	naomi = 4
	kira = 6
	ana = naomi * kira 
	kira = ana - naomi
	naomi = naomi + kira + ana
	ana = naomi * kira   
	```
	Contrôler le déroulement et déterminer les valeurs des variables à la fin du programme


    ??? success "Solution"

 		```python linenums='3' 
		ana = 4 * 6 = 24 
		kira = 24 - 4 = 20 # nouvelle valeur
		naomi = 4 + 20 + 24 = 48 # nouvelle valeur 
		ana = 20 * 48 =   960	# nouvelle valeur
		```
		En fin de script, ```!python naomi``` a pour valeur 48, ```!python kira``` vaut 20, et ```!python ana``` vaut 960.

???+ question "Exercice 5 - déroulement à faire sur papier"

	```python linenums='1'
	x = 5
	x = x**2
	x = x-1
	x = x%2
	```
	Contrôler le déroulement et déterminer la valeur de ```x``` à la fin du programme


    ??? success "Solution"

 		```python linenums='2' 
		x = 5**2 = 25	# 5 puissance 2
		x = 25 - 1 = 24
		x = 24 % 2 = 0 # reste de la division par 2 
		```
		En fin de script, ```!python x``` a pour valeur 0.

## Écriture formatée de variables

!!! coeur "Les ```f-string```"
	Un _formatted string litterals_ est une chaîne de caractère précédée par ```f``` **sans espace** qui indique à python d'afficher des variables avec un certain format à l'intérieur d'une phrase. 
	
!!! example 
	Le script ci-dessous montre comment afficher un texte avec plusieurs variables, en utilisant et sans utiliser un ```f-string```.

	Les ```f-string``` peuvent préciser le format d'affichage (nombre de chiffres significatifs, écriture scientifique) 
    {{ IDE('fstring01', ID='example', MAX_SIZE=15, TERM_H=5) }}
	
	
???+ question "Exercice 6" 
	Écrire un script python qui :   
	
	- crée une variable nommée `a` à laquelle vous affecterez la valeur de $3.1415926535897$. 
	- Utiliser une commande python pour afficher une valeur approchée de ```a``` au centième.
	
	Valider votre réponse (++ctrl+enter++)
	
    {{ IDE('exercice03', ID='ex03', MAX_SIZE=6, TERM_H=3) }}
 
## QCM


{{ multi_qcm(
    [
    """ 
	Soit le code suivant :
	```python linenums='1'
	x = 3
	y = x + 16
	y = y*x
	y = y +84
	```
	
	En fin de script ```y``` prend la valeur :
    """,
        [
            """```#!python 64 ```""",
            """```#!python 141 ```""",
            """```#!python 67```""",
            """`#!python 73`""",
        ],
        [2],
    ], [
    """ 
	Soit le code suivant :
	```python linenums='1'
	x = 5.0
	y = x**2
	y = x + 3 
	```
	
	En fin de script ```y``` prend la valeur :
    """,
        [
            """```#!python 28.0 ```""",
            """```#!python 28 ```""",
            """```#!python 8.0```""",
            """`#!python 13.0`""",
        ],
        [3],
    ], [
    """ 
	Soit le code suivant :
	```python linenums='1'
	x , y = 2 , 3
	x = y - x
	y = x + y 
	```
	
	En fin de script ```x``` et ```y``` prennent les valeurs  :
    """,
        [
            """```#!python 1.0 , 4.0 ```""",
            """```#!python 1 , 4 ```""",
            """```#!python 4 , 1 ```""",
            """`#!python 4.0 , 1.0`""",
        ],
        [2],
    ],   [
    """ 
	Soit le code suivant :
	```python linenums='1'
	x , y = 2 , 3
	z = x+y+x*y
	y = z/2 
	```
	
	En fin de script ```y``` prend la valeur  :
    """,
        [
            """```#!python 11 ```""",
            """```#!python 5.5 ```""",
            """```#!python 3 ```""", 
        ],
        [2],
    ],  [
    """ 
	Soit le code suivant :
	```python linenums='1'
	x , y = 12 , 7
	u = x + y
	v = x**2-y**2
	w = v%u 
	```
	
	En fin de script ```w``` prend la valeur  :
    """,
        [
            """```#!python 95/19 ```""",
            """```#!python  95```""",
            """```#!python 5 ```""", 
            """```#!python 0 ```""", 
        ],
        [4],
    ], [
    """ 
	Soit le code suivant :
	```python linenums='1'
	x = 5 
	y = x + 14
	y = y*x 
	y = y + 49
	```
	
	En fin de script ```y``` prend la valeur  :
    """,
        [
            """```#!python 144 ```""",
            """```#!python  49```""",
            """```#!python 54 ```""", 
            """```#!python 74 ```""", 
        ],
        [1],
    ], [
    """ 
	Soit le code suivant :
	```python linenums='1'
	x = 7 
	y = 2*x-1
	x = x+3*y
	```
	
	En fin de script ```x``` prend la valeur  :
    """,
        [
            """```#!python 130 ```""",
            """```#!python  12```""",
            """```#!python 46 ```""", 
            """```#!python 13 ```""", 
        ],
        [3],
    ], [
    """ 
	Soit le code suivant :
	```python linenums='1'
	a , b = 2 , 3 
	a = a ** b
	a = a - b
	b = a - b
	```
	
	En fin de script ```a ``` et ```b``` prennent les  valeurs  :
    """,
        [
            """```#!python 5 , 5 ```""",
            """```#!python  3 , 3 ```""",
            """```#!python 5 , 2 ```""",  
            """```#!python 3 , 2 ```""",  
        ],
        [3],
    ], 
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = True
) }}


