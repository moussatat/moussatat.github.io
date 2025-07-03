---
tags:
  - python
  - seconde
hide :
  - feedback
---
# Boucles conditionnées ```#!python while```



Une alternative à l'instruction ```#!python for``` couramment utilisée en informatique est la boucle ```#!python while```. Avec ce type de boucle, une série d'instructions est exécutée tant qu'une condition est vraie. 


!!! coeur "syntaxe d'une boucle conditionnée" 
	 
	L'instruction ```#!python while ... : ...``` permet d'exécuter un bloc indenté tant qu'une condition est vraie :
	
	!!! warning inline end "Important"

		Cliquez sur les + et prenez le temps de lire les commentaires !
	
	```python title="syntaxe d'une boucle finie" linenums='1'
	while <test> : 				#  (1)!
		action1()		# (2)!
		action2()
		
	"""poursuite du programme""" 
	action3() 			# (3)!
	
	``` 
	
	1. :warning: Les ```:``` sont **obligatoires** après ```#!python if```, ```#!python elif```, ```#!python else```, ```#!python for``` et ```#!python while``` 
	2. :warning: bloc indenté exécuté tant que la condition ```#!python <test>==True```
	3. :warning: exécutée lorsque ```#!python <test>==False```
	


!!! example "Example 1"
	
	1. Exécuter le script ci-dessous.
	1. Modifier la ligne 2 pour que la boucle s'arrète lorsque $n=2$.
	
    {{ IDE('example01', ID='example01', MAX_SIZE=11, TERM_H=6) }} 
	 
	??? success "Solution"

    	Pour une sortie de boucle lorsque $n\geqslant2$ il faut poursuivre tant que $n>2$.
	
!!! example "Example 2"
	
	La **racine carrée entière** d'un entier naturel $n$ est le plus grand entier inférieur à $\sqrt{n}$.
	
	- ```isqrt(10)=3```, car $3^2\leqslant 10 < 4^2$.
	- ```isqrt(25)=5```, car $5^2\leqslant 25 < 6^2$.
	
	La fonction ```isqrt()``` prend pour paramètre ```n``` et renvoie sa racine carrée entière.
	
	Corriger les 2 erreurs de ce script et valider votre réponse.
	
    {{ IDE('example02', ID='example02', MAX_SIZE=11, TERM_H=6) }} 
	
!!! example "Example 3"

	Analyser le script ci-dessus et déterminer ce qui est affiché.
	
	```python linenums='1'
	n=1
	while 1.15**n < 2 :
		n = n+1
	print(n)
	``` 
	??? success "Solution"
		
		| ```n``` |  1  |  2  |  3  |  4  |  5  |  6  |   
		|:-------:|:--:|:--:|:--:|:--:|:--:|:--:|
		| ```1.15**n``` | ```{{ 1.15**1 }}``` |```{{ 1.15**2 }}``` | ```{{ 1.15**3 }}``` | ```{{ 1.15**4 }}```  | ```{{ 1.15**5 }}``` | ```{{ 1.15**6 }}```    | 
		
		Lorsque $n=5$, la condition de la boucle est fausse, et elle s'arrète.
		
		Le script affiche la valeur $5$, c'est le plus petit entier tel que $1.15^n\geqslant 2$.
		

## QCM
		
{{ multi_qcm(
    [
    """ 
	Analyser le script ci-dessus et déterminer ce qui est affiché :
	```python linenums='1'
	n=1
	while 1.11**n < 2 :
		n = n+1
	print(n)
	``` 
    """,
        [
            """Tous les entiers tels que $1.11^{n}<2$""",
            """Le plus grand entier $n$ tel que $1.11^{n}\\geqslant 2$""",
            """Le plus petit entier $n$ tel que $1.11^{n}\\geqslant 2$""",
            """Rien car il ne s'arrête pas""",
        ],
        [3],
    ], 
	[
    """ 
	Analyser le script ci-dessus et déterminer ce qui est affiché :
	```python linenums='1'
	n=1
	while 1.17**n<2:
		n = n+1
	print(n)
	``` 
    """,
        [
            """Rien car il ne s'arrête pas""",
            """Le plus grand entier $n$ tel que $1.17^{n}\\geqslant 2$""",
            """2.192448""",
            """5""",
        ],
        [4],
    ], 
	[
    """ 
	Analyser le script ci-dessus et déterminer ce qui est affiché :
	```python linenums='1'
	n=1
	while 0.88**n>0.5:
		n = n+1
	print(n)
	``` 
    """,
        [
            """Rien car il ne s'arrête pas""",
            """Le plus grand entier $n$ tel que $0.88^{n}> 0.5$""",
            """6""",
            """5""",
        ],
        [3],
    ], 
	[
    """ 
	Analyser le script ci-dessus et déterminer ce qui est affiché :
	```python linenums='1'
	n=1
	while 0.85**n>0.5:
		n = n+1
	print(n)
	``` 
    """,
        [
            """0.44370531""",
            """4""",
            """Le plus petit entier $n$ tel que $0.85^n \\leqslant 0.5$""",
            """Le plus grand entier $n$ tel que $0.85^n > 0.5$""",
        ],
        [3],
    ], 
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}

