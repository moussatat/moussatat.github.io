---
tags:
  - python
  - seconde
hide :
  - feedback
---
# Boucles finies ```#!python for```

## L'instruction ```range()```

!!! coeur "progression d'entiers"

	L'instruction ```#!python range()``` renvoie une progression d'entiers :
	
	- ```#!python range(fin)``` renvoie **la progression croissante de ```fin``` entiers consécutifs** partant de ```0``` jusqu'à ```fin-1```.
	- ```#!python range(debut, fin)``` renvoie **la progression croissante de ```fin-debut``` entiers consécutifs** partant de ```debut``` jusqu'à ```fin-1```.
	- ```#!python range(debut, fin, pas)``` renvoie la progression d'entiers : ```debut```, ```debut+pas```, ```debut+2*pas``` , ```debut+3*pas``` etc. **strictement inférieurs à** ```fin```.

!!! example "```#!python range()```"
	Les plus courantes :
	
	- ```#!python range(5)``` renvoie **la progression de ```5``` entiers consécutifs** :  ```0```, ```1```, ```2```, ```3```, ```4```, (et pas  ```5``` )
	- ```#!python range(3,8)``` renvoie **la progression de ```8-3=5``` entiers consécutifs** :  ```3```, ```4```, ```5```, ```6```, ```7```, ( et pas  ```8``` )
	
	Plus rares :
	
	- ```#!python range(10,5,-1)``` renvoie la progression décroissante des entiers : ```10```, ```9```, ```8```, ```7```, ```6``` ( et pas  ```5``` )
	- ```#!python range(-3,6,2)``` renvoie la progression croissante des entiers : ```-3```, ```-1```, ```1```, ```3```, ```5``` ( et pas  ```7``` )



{{ multi_qcm(
    [
    """ 
	 En langage Python lors de instruction ```#!python for k in range(2,7)``` la variable ```k``` prend les valeurs : 
    """ 
	 ,
        [
            """```#!python 2 et 7```""",
            """```#!python 2; 3; 4; 5 et 6```""",
            """```#!python 2; 3; 4; 5; 6 et 7```""",
            """```#!python  2; 3; 4; 5; 6; 7 et 8 ```""",
        ],
        [2],
    ],
	[
    """ 
	 En langage Python lors de instruction ```#!python for k in range(5)``` la variable ```k``` prend les valeurs : 
    """ 
	 ,
        [
            """```#!python 0; 1; 2; 3 et 4```""",
            """```#!python 0; 1; 2; 3; 4 et 5```""",
            """```#!python 1; 2; 3 et 4```""",
            """```#!python 1; 2; 3; 4 et 5```""",
        ],
        [2],
    ], 
	[
    """ 
	 La variable ```k``` prend  toutes les valeurs entières de $0$ à $33$ si on utilise : 
    """ 
	 ,
        [
            """```#!python for k in range(0,33)```""",
            """```#!python for k in range(0,34)```""",
            """```#!python for k in range(33)```""",
            """```#!python for k in range(34)```""",
        ],
        [2,4],
    ], 
	[
    """ 
	 En langage Python, lors de l'instruction ```#!python for k in range(2,29)```, la variable ```k``` prend 
    """ 
	 ,
        [
            """29 valeurs""",
            """28 valeurs""",
            """27 valeurs""",
            """26 valeurs""",
        ],
        [2],
    ], 
    multi = True,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}

## Les répétitions à l'aide de ```for``` 

!!! coeur "parcourir une progression d'entiers" 

	L'instruction ```#!python for ... in ...``` parcourt la progression et permet d'exécuter de manière répétée un bloc indenté :
	 
	```python title="syntaxe d'une boucle finie" linenums='1'
	for entier in  range(<paramètres de la progression>) :  	# (1)!
		action1() 
		action2(entier)  	# (2)!
	action3() 		# (3)! 
	```

	1. :warning: Le ```#!python in``` et les deux points sont obligatoires

	2. :warning: ```action1()``` et ```action2()``` sont exécutées pour chaque nouvelle valeur de ```entier```

	3. :warning: ```action3()``` sera faite après la fin des répétitions.
	
	
!!! example "Premiers exemples"
	
	Les lignes indentés suivants l'instruction ```#!python for``` sont les lignes de la boucles.
	
	La variable signalée après l'instruction ```for``` est un **indice**, on utilise parfois la lettre ```i```.
	
	
	Essayer chacun des exemples
	
	=== "```#!python range(fin)```"
		
		La boucle de la ligne 1 réalise 3 boucles, et celle de la ligne 7 en fait 5.
		
		On utilise ```end=""``` pour supprimer le retour de ligne par défaut de l'instruction ```#!python print()```.
		
        {{ IDEv('example01a', ID='example01a', MAX_SIZE=18, TERM_H=12) }} 
	
	=== "```#!python range(debut,fin)```"
		
		L'indice ```i``` de la boucle de la ligne 1 prend les valeurs $1$, $2$, $3$ et enfin $4$.
		
		L'indice ```j``` de la boucle de la ligne 6 prend les valeurs $3$, $4$, $5$ et enfin $6$. 
		
        {{ IDEv('example01b', ID='example01b', MAX_SIZE=18, TERM_H=12) }} 
	
	=== "```#!python range(debut,fin,pas)```"
		
		En précisant le paramètre ```pas```, on peut produire des progressions d'entiers non consécutifs croissants ou décroissants !
		
        {{ IDEv('example01c', ID='example01c', MAX_SIZE=18, TERM_H=12) }} 
		
!!! example "Importance de l'indentation"

	Dans chacun des exemples ci-dessous, l'indice ```i``` de la boucle de la ligne 1 prend les valeurs entières $0$, à $5$.
	
	=== "boucles successives"
		  
		- La boucle de la ligne 3 est exécutée à la suite de la boucle de la ligne 1.
		
		- La ligne 4 est exécutée 5 fois. La ligne 5 est exécutée 1 fois.
		
        {{ IDEv('example02a', ID='example02a', MAX_SIZE=15, TERM_H=12) }} 
	
	=== "boucles imbriquées"
		  
		- Les lignes 2 à 5 font partie de la boucle de la ligne 1 et seront exécutées à chaque passage de la première boucle.
		- La ligne 4 est exécutée un total de 30 fois. La ligne 5 est exécutée 6 fois.
		 
        {{ IDEv('example02b', ID='example02b', MAX_SIZE=15, TERM_H=12) }} 



???+ question "Exercice 1" 

	1. Analyser le script-ci dessous. Vous pouvez lire le script décrit en langage naturel  
	
		=== "script python"
		
			```python linenums='1' 
			for i in range(1,36) :
				if 35 % i == 0 :
					print(i)
			```
		
		=== "langage naturel"
		
			```pseudo-code linenums='1' 
			pour i allant de 1 à 35
				si le reste de la division de 35 par i est nul, alors imprimer i
				 
			```
	1. Corriger les erreurs dans le script ci-dessous et exécuter le.
	1. Modifier le script pour afficher les diviseurs de $37$.
		Que peut-on dire du nombre $37$ ?
	1. Modifier le script pour déterminer si le nombre $4891$ est premier.
		
		
       {{ IDE('exercice01', ID='exercice01', MAX_SIZE=15, TERM_H=12) }} 
	
    ??? success "Solution"

		1. Le script affiche les diviseurs de 36
		1. Attention aux indentations, aux ```:``` ainsi qu'aux paramètres de l'instruction ```#!python range()```. 
		1. Il faut changer la ligne 1 et la ligne 2
			```python linenums='1' 
			for i in range(1,38) :
				if 37 % i == 0 :
					print(i)
			```
			$37$ est un nombre premier, ses seuls diviseurs sont $1$ et $37$.
		1. Il faut utiliser le script :
			```python linenums='1' 
			for i in range(1,4892) :
				if 4891 % i == 0 :
					print(i)
			```
			$4892$ n'est pas premier.


## Principe accumulateur 
		
!!! coeur "compteurs et accumulateurs dans Python"
	Un **compteur** est une variable à laquelle on ajoute 1 à chaque répétition d'une boucle.   
	Le compteur est **incrémenté** à chaque répétition d'une boucle.
	
	Un **accumulateur** est une variable à laquelle on doit ajouter une valeur (ou multiplier par une valeur, ou une combinaison des deux opérations) à chaque répétition d'une boucle. 
	
!!! example "un compteur simple"
	
	Le script ci-dessous défini une fonction ```nbrdediviseur()``` de paramètre ```nbr``` et qui renvoie la valeur finale de la variable ```compteur```.

	1. Exécuter le script.
	1. Vérifier que l'instruction ```nbrdediviseur(37)``` renvoie $2$.
	1. Que renvoie l'instruction ```nbrdediviseur(738821)``` ? Que peut-on en déduire ?
	
	
    {{ IDE('example03', ID='example03', MAX_SIZE=15, TERM_H=12) }} 

!!! example "un accumulateur pour calculer une somme"
	
	L'appel ```somme()``` utilise une boucle pour renvoyer l'image la somme $0+1+2+3+4+\ldots+98+99$. 
	
	1. Exécuter le script ainsi que l'appel ```somme()```
	1. Modifier le script pour que l'appel ```somme()``` renvoie la somme des carrés : $1+2^2+3^2+4^2+\ldots+99^2$.
	1. Modifier à nouveau le script pour que l'appel ```somme()``` renvoie la somme des carrés : $1^2+2^2+3^2+4^2+\ldots+99^2+100^2$.
	1. Valider le script.
	
    {{ IDE('example04', ID='example04', MAX_SIZE=15, TERM_H=10) }} 


	
???+ question "Exercice 2" 
	
	Compléter le script de la fonction d'appel ```produit()``` qui renvoie le produit $1\times 2\times 3\times 4\times \ldots \times 50$.
	
	
    {{ IDE('exercice02', ID='exercice02', MAX_SIZE=15, TERM_H=10) }} 
	
 
???+ question "Exercice 3" 
	
	Compléter le script de la fonction d'appel ```sominv()``` qui renvoie la somme $1+\dfrac{1}{2}+\dfrac{1}{3}+\dfrac{1}{4}+\ldots+\dfrac{1}{20}$
	
    {{ IDE('exercice03', ID='exercice03', MAX_SIZE=15, TERM_H=10) }} 
	
 
???+ question "Exercice 4" 
	
	Compléter le script de la fonction d'appel ```s()``` de paramètre ```n```  qui renvoie la somme $1+\dfrac{1}{2}+\dfrac{1}{2^2}+\dfrac{1}{2^3}+\ldots+\dfrac{1}{2^n}$
	
    {{ IDE('exercice04', ID='exercice04', MAX_SIZE=16, TERM_H=10) }} 
	
	
???+ question "Exercice 5 : Ascii Art" 
	
	1. Analyser les scripts des fonctions ```carre()```, ```triangle()``` et ```diagonale()```.
	1. Exécuter le script ci-dessous. 
	1. Qu'affiche les appels ```carre(5)```, ```triangle(5)``` et ```diagonale(5)``` ?  
        {{ IDEv('exercice05a', ID='exercice05a', MIN_SIZE=15, TERM_H=12) }}  
	1. Proposer un script d'une fonction d'appel ```triangle1()``` et de paramètre ```n``` tel que l'appel ```triangle1(5)```  affiche :
		```python   
		>>> triangle1(5)
		@@@@@
		 @@@@
		  @@@
		   @@
		    @
		```
	1. Proposer un script d'une fonction d'appel ```diagonale2()``` et de paramètre ```n``` tel que l'appel ```diagonale1(5)``` affiche :
		```python   
		>>> diagonale1(5)
			  /
			 /
			/
		   /
		  /
		```  
        {{ IDEv('exercice05b', ID='exercice05b', MIN_SIZE=15, TERM_H=12) }}  
	
	1. Défi : propoer le script d'une fonction d'appel ```pyramide()``` et de paramètre ```n``` tel que l'appel ```pyramide(10)``` affiche  les 10 lignes suivantes :
		```python   
		>>> pyramide(10)
				 *
				***
			   *****
			  *******
			 *********
			***********
		   *************
		  ***************
		 *****************
		*******************
		```  
        {{ IDEv('exercice05c', ID='exercice05c', MIN_SIZE=15, TERM_H=12) }}  