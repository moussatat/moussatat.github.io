---
tags:
  - python
  - seconde
hide :
  - feedback
---
# Les instructions conditionnelles
 

## Les opérateurs de comparaisons

| Opération | Comparaison | Exemple |
|:---------:|:--------:|:-------:|
| ```#!python x==y``` | teste si ```x``` est égal à  ```y``` |  ```#!python 6==3**2```  renvoie ```#!python {{ 6==3**2 }}```   </br> ```#!python 8==2**3```  renvoie ```#!python {{ 8==2**3 }}```  | 
| ```#!python x!=y``` | teste si ```x``` n'est pas égal à  ```y``` |  ```#!python 9!=9```  renvoie ```#!python {{ 9!=9 }}```   </br> ```#!python 9!=8```  renvoie ```#!python {{ 9!=8 }}```  | 
| ```x<y``` | teste si ```x``` est strictement inférieur à ```y``` |  ```#!python 5<5```  renvoie ```#!python {{ 5<5 }}```   </br> ```#!python 3>-5```  renvoie ```#!python {{ 3>-5 }}```  | 
| ```x<=y``` | teste si ```x``` est inférieur ou égal à ```y``` |  ```#!python 2>=0```  renvoie ```#!python {{ 2>=0 }}```   </br> ```#!python 1>=1```  renvoie ```#!python {{ 1>=1 }}```  | 

!!! example 
	1. Tester les comparaisons suivantes dans la console.
		- ```153 > 98```
		- ```(6 - 6) <= 0```
		- ```5 != 10 + 5```
	1. Tester un encadrement :
		```python title="console"
		>>> x = 35 * 47
		>>> 1000<= x <= 2000
		```
	
    {{ terminal() }}

!!! example "Ne pas mélanger ```==``` avec l'opérateur d'affectation ```=```"
	
	<div class="grid" markdown>
	
	```python title="script A" linenums="1"
	a = 5
	a = 15
	print(a+2)
	```  
	
	La ligne 2 modifie la valeur de ```a```.  
	La ligne 3 affiche ```17```.
	
	
	```python title="script B" linenums="1"
	a = 5
	a == 15
	print(a+2)
	```  
	
	La ligne 2 renvoie ```#!python False```.  
	La ligne 3 affiche ```7```.
	</div>	

{{ multi_qcm(
    [
    """
    L'expression ```#!python 3==5-2``` s'évalue à : 
    """,
        [
            """```#!python True ```""",
            """```#!python False ```""",
            """on ne peut pas savoir""",
            """message d'erreur""",
        ],
        [1],
    ], 
	[
     """
    L'expression ```#!python -5<=5-10``` s'évalue à : 
    """,
        [
            """```#!python True ```""",
            """```#!python False ```""",
            """Oui""",
            """message d'erreur""",
        ],
        [1],
    ], 
	[
	 """
    L'expression ```#!python 3 != 5``` s'évalue à : 
    """,
        [
            """```#!python True ```""",
            """```#!python False ```""",
            """Non""",
            """message d'erreur""",
        ],
        [1],
    ], 
	[
	 """
    L'expression ```#!python 20== '20'``` s'évalue à : 
    """,
        [
            """```#!python True ```""",
            """```#!python False ```""", 
            """message d'erreur""",
        ],
        [2],
    ], 
	[
	 """
    Soit le code suivant :
	```python linenums='1'
	a = 5
	a == 14
	b = a + 1
	```  
	En fin de script ```b``` prend la valeur :
    """,
        [
            """```#!python 6```""",
            """```#!python 15```""",
            """```#!python '51'```""",
            """```#!python '141'```""", 
        ],
        [2],
    ],  
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}


	
## Tests de valeurs sur ```float```

!!! warning "Tests de valeurs sur des ```#!python float```"
	
	
	Lorsque l'on souhaite tester la valeur d'une variable de type float, le premier réflexe serait d'utiliser l'opérateur d'égalité comme : (exécuter le script)
	
	{{ terminal(FILL="1/10 == 0.1", TERM_H=3) }} 
	
	Cette approche est déconseillée. Les valeurs de type  ```#!python float``` amènent certaines limitations. 
	
	{{ terminal(FILL="(0.1+0.2) == 0.3", TERM_H=3) }} 
	
	Nous voyons que le résultat de l'opération ```0.1+0.2``` n'est pas exactement ```0.3``` d'où le ```#!python False``` ! Ce problème vient de la manière dont un ordinateur traite les nombres flottants (comme rapport de nombres en binaires). Certaines valeurs de type  ```#!python float``` ne peuvent être qu'approchées : 
	 
	{{ terminal(FILL=" f'{0.3:.30f}' ", TERM_H=3) }} 
	
	La valeur ```0.3``` est en réalité arrondie à $10^{-17}$ près ! De même, la valeur renvoyée par ```0.1+0.2```  est :
	
	{{ terminal(FILL=" f'{0.1+0.2:.30f}' ", TERM_H=3) }} 
	
	La valeur 
	**TLDR** [^1] : Ne surtout pas tester si des valeurs de type ```#!python float``` sont égales.


[^1]:  _too long; didn’t read_ pour trop long; pas lu. 


!!! tip "Conseil"
	Pour les valeurs de type ```#!python float``` on utilisera soit des encadrements :
	
	
	{{ terminal(FILL="""erreur = 0.00001 # approximatin tolérée
var = 3.0 - 2.7
0.3 - erreur < var < 0.3 + erreur """, TERM_H=5) }} 
	
	soit l'instruction valeur absolue ```#!python abs()``` :
	
	{{ terminal(FILL="""erreur = 0.00001 # approximatin tolérée
var = 3.0 - 2.7
abs(var - 0.3) < erreur""", TERM_H=5) }} 
	
## Instructions conditionnelles simples


!!! coeur "syntaxe d'un test simple"
	Une structure conditionnelle simple comporte :
		- la clef de début ```#!python if``` suivie d'un ```<test>``` qui prend les valeurs ```#!python True``` ou ```#!python Valse```
		- le corps du test contient les actions à exécuter si la valeur de ```<test>``` est ```#!python True```.  
			Les instructions sont indentés (comme pour les fonctions) à l'aide de la touche ++Tab++
		- la sortie de le la structure est signalée par l'absence d'_indentation_.
		
	```python title="script python"
	if  <test> :  	# (1)!
		action1() 
		action2()  	# (2)!
	action3() 		# (3)! 
	```

	1. :warning: Les deux points sont obligatoires

	2. :warning: ```action1()``` et ```action2()``` sont exécutées si la condition ```<test>==True```

	3. :warning: ```action3()``` sera faite ensuite dans tous les cas.

!!! example  "un premier exemple"

	1. Exécuter le script ci-dessous et vérifier que la ligne 3 n'est pas exécutée.
	1. Modifier la ligne 1 afin d'affecter la valeur ```20```. Vérifier que les lignes 3 et 4 sont exécutées.
	
    {{ IDE('example01', ID='example01',  MAX_SIZE=10, TERM_H=6) }}


 
!!! example  "importance de l'indentation"
	
	Comparer les scripts A et B ci-dessous. Quel script exécutera la ligne 4 ?
	
    === "Script A"
	
		```python linenums='1'
		chaine = "bateau"
		if len(chaine) < 6 :
			print("trop court") 
		print("suite")
		```
	
    === "Script B" 
	
		```python linenums='1'
		chaine = "bateau"
		if len(chaine) < 6 :
			print("trop court") 
			print("suite")
		```
		
	??? Tip "Solution"
		Comme ```chaine=="bateau"```,  ```len(chaine)==6```.  
		Le test  ```len(chaine) < 6``` a pour valeur ```False```.  
		Le script A exécute toujours la ligne 4 car elle ne fait pas partie de l'instruction conditionelle.  
		Le script B n'exécute pas la ligne 4 car elle fait partie du bloc de l'instruction conditionelle.  
	
!!! example  "controler le déroulement (1)"
	
	```python linenums='1' 
	a = 10
	b = 13
	if a > 5:
		b = b - 4
	if b >= 11:
		b = b + 10
	```
 

	Quelle est la valeur de ```b``` en fin de script ?
	
	=== "Cocher la ou les affirmations correctes"

		- [ ] 13
		- [ ] 9
		- [ ] 19
		- [ ] 23

	=== "Solution"

		- :x: ~~13~~ Faux car 10 > 5. La ligne 4 et donc exécutée.
		- :white_check_mark: 9 
		- :x: ~~19~~ 
		- :x: ~~23~~ Faux car à la ligne 4 on a une nouvelle affectation de ```b``` qui ne respecte plus la condition du if de la ligne 5.

!!! example  "controler le déroulement (2)"
	
	```python linenums='1' title="script python"
	a = 5
	b = 14
	if a > 9:
		b = b - 1
		if b >= 10:
			b = b + 8
	```
 

	Quelle est la valeur de ```b``` en fin de script ?

	=== "Cocher la ou les affirmations correctes"

		- [ ] 13
		- [ ] 14
		- [ ] 21
		- [ ] 22

	=== "Solution"
		
		Le test de la ligne 5
		- :x: ~~13~~ Faux car 10 > 5. La ligne 4 et donc exécutée.
		- :white_check_mark: 9 
		- :x: ~~19~~ 
		- :x: ~~23~~ Faux car à la ligne 4 on a une nouvelle affectation de ```b``` qui ne respecte plus la condition du if de la ligne 5.



{{ multi_qcm(
[
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = 3
	if 1 < 2:
		a = 1
	b= a + 3 
	```
	
	En fin de script, la variable ```b``` prend la valeur :
    """,
        [
            """```#!python 1```""",
            """```#!python 4```""",
            """```#!python 6 ```""",
            """```#!python 7```""",
        ],
        [2],
    ],
    [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a , b = 5 , 9
	if a>6:
		b=b-5
	if b>=13:
		b=b+9
	```
	
	En fin de script, la variable ```b``` prend la valeur :
    """,
        [
            """```#!python 4```""",
            """```#!python 9```""",
            """```#!python 13 ```""",
            """```#!python 18```""",
        ],
        [2],
    ], [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = 10 
	b = 19 
	if a>6:
		b=b-4
	if b>=14:
		b=b+7
	```
	
	En fin de script, la variable ```b``` prend la valeur :
    """,
        [
            """```#!python 15```""",
            """```#!python 19```""",
            """```#!python 22 ```""",
            """```#!python 26```""",
        ],
        [3],
    ],  [
    """ 
	Soit le script suivant :
	```python linenums='1' 
	a = 4 
	b = 15 
	if a > 9 :
		b = b-4
	if b >= 12:
		b = b+5
	```
	
	En fin de script, la variable ```b``` prend la valeur :
    """,
        [
            """```#!python 11```""",
            """```#!python 15```""",
            """```#!python 16 ```""",
            """```#!python 20```""",
        ],
        [4],
    ],  [
    """ 
	Soit le script suivant :
	```python linenums='1' 
	a = 9 
	b = 20  
	if a > 7 :
		b = b-10
	if b >= 12:
		b = b+4
	```
	
	En fin de script, la variable ```b``` prend la valeur :
    """,
        [
            """```#!python 10```""",
            """```#!python 14```""",
            """```#!python 20 ```""",
            """```#!python 24```""",
        ],
        [1],
    ], [
    """ 
	Soit le script suivant :
	```python linenums='1' 
	a = 5 
	b = 18  
	if a > 7 :
		b = b-10
	if b >= 12:
		b = b+4
	```
	
	En fin de script, la variable ```b``` prend la valeur :
    """,
        [
            """```#!python 8```""",
            """```#!python 12```""",
            """```#!python 18 ```""",
            """```#!python 22```""",
        ],
        [4],
    ], 
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}


## Instructions conditionnelles classiques


!!! coeur "syntaxe d'une structure conditionnelle classique"
	
	- la clef de début ```#!python if``` suivi d'un ```<test>``` qui prend les valeurs ```#!python True``` ou ```#!python Valse```
	- la clef  ```#!python else``` suivi d'un ```:```  
	- la sortie de le la structure est signalée par l'absence d'_indentation_.
			
	```python linenums='1' title="script python"
	if  <test> :  # (1)!
		""" bloc indenté exécuté uniquement lorsque <test>==True """
		action_1()
		action_2() 
	else :  # (2)!
		""" bloc indenté exécuté uniquement lorsque <test>==False """
		action_3() 
		action_4() 
	action_5() # non indenté et après l'instruction conditionnelle, sera exécuté dans tous les cas.
	```
		
	1. :warning: deux points obligatoires
	2. :warning: deux points obligatoires	
		
		
!!! example 
	1. Exécuter le script ci-dessous et vérifier qu'il affiche ```"Vous pouvez voter"``` et ```Vous observerez le résultat```
	1. Modifier la valeur de ```age``` pour la valeur $15$. Qu'affiche le script ?
	 
    {{ IDE('example02', ID='example02', MAX_SIZE=10, TERM_H=6) }}
	


{{ multi_qcm(
    [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a=-1
	if a<=5:
		a=a+11
	else:
		a=a-11
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python -12```""",
            """```#!python -1```""",
            """```#!python 10 ```""",
            """```#!python 12```""",
        ],
        [3],
    ], [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a=5
	if a<=2:
		a=a+5
	else:
		a=a-3
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python 2```""",
            """```#!python 5```""",
            """```#!python 7 ```""",
            """```#!python 10```""",
        ],
        [1],
    ], [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a=21
	if a>=20:
	  a=a-18
	  if a<=4:
		a=a+4
	  else:
		a=a-4
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python -1```""",
            """```#!python 7```""",
            """```#!python 21 ```""",
            """```#!python 35```""",
        ],
        [2],
    ],[
    """ 
	Soit le script suivant :
	```python linenums='1'
	a=25
	if a>=12:
	  a=a-11
	  if a<=6:
		a=a+3
	  else:
		a=a-3
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python 11```""",
            """```#!python 17```""",
            """```#!python 25 ```""",
            """```#!python 33```""",
        ],
        [1],
    ],[
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = 5
	b = 9
	if a>=0 :
		b=b-7
	else :
		b=b+7
	if b>0 :
		a=a+3
	else :
		a=a-3
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python 2```""",
            """```#!python 5```""",
            """```#!python 8 ```""",
            """```#!python 9```""",
        ],
        [3],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = -10
	b = -15 
	if a >= 0 :
		b = b - 2
	else:
		b = b + 2
	if b > 0 :
		a = a + 6
	else:
		a = a - 6
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python -17```""",
            """```#!python -16```""",
            """```#!python -13 ```""", 
        ],
        [2],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = 7
	b = 0 
	if a >= 0 :
		b = b - 7
	else:
		b = b + 7
	if b > 0 :
		a = a + 9
	else:
		a = a - 9
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python -7```""",
            """```#!python -2```""",
            """```#!python 7 ```""", 
            """```#!python 16 ```""", 
        ],
        [2],
    ],
	[
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = 10
	b = 6 
	if a % 2 == 1 :
		b = b - 7
	else:
		b = b + 7
	if b % 3 == 2 :
		a = a + 9
	else :
		a = a - 9
	```
	On rappelle que ```x%n``` (lire $x$ modulo $n$) est le reste de la division de ```x``` par ```n```.
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python 1```""",
            """```#!python 6```""",
            """```#!python 10 ```""", 
            """```#!python 19 ```""", 
        ],
        [1],
    ],
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = False,
    shuffle = False
) }}


## Instructions conditionnelles avec plusieurs cas 
	
!!! coeur "syntaxe d'une structure conditionnelle avec plusieurs cas"
	
	- la clef de début ```#!python if``` suivi d'un ```<test>``` qui prend les valeurs ```#!python True``` ou ```#!python Valse```
	- le(s) clef(s)  ```#!python elif``` (pour ```sinon si```) suivies d'un ```:```  
	- la clef  ```#!python else``` suivie d'un ```:```  
	- la sortie de le la structure est signalée par l'absence d'_indentation_.
			
	```python linenums='1' title="script python"
	if  <test1> :  # (1)!
		""" bloc indenté exécuté uniquement 
		lorsque <test1>==True """
		action_1()
	elif <test2> :  # (2)!
		""" bloc indenté exécuté uniquement 
		lorsque <test1>==False et <test2>==True"""
		action_2() 
	elif <test3> :  # (3)!
		""" bloc indenté exécuté uniquement 
		lorsque <test1>==False et <test2>==False et <test3>==True""""
		action_3() 
	elif <test4> :  # (4)!
		""" bloc indenté exécuté uniquement 
		lorsque <test1>==False et <test2>==False et <test3>==False et <test4>==True""""
		action_4() 
	else : # (5)!
		""" bloc indenté exécuté uniquement 
		lorsque <test1>==False et <test2>==False et <test3>==False et <test4>==False""""
		action_5() 
	action_6() 	# non indenté et après l'instruction conditionnelle, 
				# sera exécuté dans tous les cas.
	```
	
	1. :warning: deux points obligatoires
	2. :warning: deux points obligatoires
	3. :warning: deux points obligatoires
	4. :warning: deux points obligatoires
	5. :warning: deux points obligatoires
	
	- Le nombre de parties ```#!python elif``` est quelconque. 
	- La partie ```#!python else``` n'est pas obligatoire.  
		:warning: Si la clef ```else :``` n'est pas utilisée, et si la valeur de tous les tests est ```False```, alors l'instruction conditionnelle n'exécute aucun des blocs.
		
	  
!!! example "triangles rectangles"
	1. Exécuter le script et vérifier qu'il affiche que le triangle est rectangle en $C$.
	1. On considère le nouveau triangle $ABC$ tel que $AC=13$, $AB=5$ et $BC=12$. 
		Modifier le scirpt afin de faire afficher la nature du nouveau triangle.
	 
    {{ IDE('example03', ID='example03', MAX_SIZE=12, TERM_H=6) }} 

	  
:warning: Si ```<test1>==True``` et ```<test3>==True```, l'instruction exécute ```action_1()``` et ignore le reste des tests pour exécuter ```action_6()```		
		
		
{{ multi_qcm(
    [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = 10
	b = -11
	if a >= 0:
		a = b - 3
	elif b < 0:
		a = a + 3
	else:
		a = a - 3
	```
	
	En fin de script, la variable ```a``` prend la valeur :
    """,
        [
            """```#!python -11```""",
            """```#!python -14```""",
            """```#!python 7 ```""", 
        ],
        [2],
    ], 
    [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = -20
    b = -7
    c = -2
    if a > b:
        d = a
    elif b > c:
        d = b
    else:
        d = c
	```
	
	En fin de script, la variable ```d``` prend la valeur :
    """,
        [
            """```#!python -20```""",
            """```#!python -7```""",
            """```#!python -2 ```""", 
        ],
        [3],
    ],  [
    """ 
	Soit le script suivant :
	```python linenums='1'
	a = 10
    b = 19
    c = -15
    if a > b:
        d = a
    elif b > c:
        d = b
    else:
        d = c
	```
	
	En fin de script, la variable ```d``` prend la valeur :
    """,
        [
            """```#!python 10```""",
            """```#!python 19```""",
            """```#!python -15 ```""", 
        ],
        [2],
    ], 
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = False,
    shuffle = False
) }}


