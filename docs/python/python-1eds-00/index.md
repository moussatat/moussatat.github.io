---
tags:
  - python
  - première
hide :
  - feedback
---
# Les listes
 
## Définition de listes par extension 

!!! coeur "Définition de liste par extension"
	Une liste est une structure de données qui contient une **collection ordonnée** d'objets Python. 
	  
	Une liste est définie  en **extension** en donnant la liste de ses éléments entre ```[ ]``` séparés par des virgules .
	
	C'est un nouveau type d'objet (qui se rajoute aux entiers ```#!ptyhon int```, aux ```#!ptyhon float``` et chaines de caractères ```#!ptyhon str```).
 
	
	
!!! example "Exemples"
	
	Exécuter le script ci-dessous et noter que :
	
	- ```animaux``` est une liste de chaines de caractères.
	- ```tailles``` est une liste de floats.
	- Python autorise des listes contenant des valeurs de type différents comme ```mixte```
	- L'instruction ```#!python type()``` renvoie le type de l'objet.
	- L'instruction ```#!python len()``` renvoie la longueur de la liste (c.à.d. le nombre d'éléments).
	
	
    {{ IDE('exampleliste01', MAX_SIZE=10,  TERM_H=7) }}

!!! example "Exemple : liste vide"
	
	L'instruction ```maliste=[]``` créee une liste vide, sans éléments. Sa longueur est $0$.
	
	{{ terminal(FILL="""maliste=[]
len(maliste)""", TERM_H=5) }} 

## Les indices 
	
!!! coeur "Liste : Indexation"
	On accède à un élément de la liste par son indice positif ou négatif (ou ```index```). 
	
	Une listede de $n$ éléments :
	
	- commence par l'élément d'indice $0$, et se termine par l'élément d'indice $n-1$
	- commence par l'élément d'indice $-n$, et se termine par l'élément d'indice $-1$
 
	
!!! example "Exemple d'indexation"
	
	La liste ```animaux``` a 4 éléments avec des indice positifs et négatifs :
	
	```py title="indexation"
	liste          : ["girafe", "tigre", "singe", "souris"]
	indice positif :        0        1        2         3
	indice négatif :       -4       -3       -2        -1
	```
	
	Il n'y a pas d'éléments d'indice 4 : l'instruction ```animaux[4]``` renvoie une erreur.
	
    {{ IDE('exampleliste02', MAX_SIZE=10,  TERM_H=8) }}



{{ multi_qcm(
    [
    """ 
	Pour la liste ```#!python cheveux = ['noir','chatain','blond','rouge']```, l'instruction ```cheveux[0]``` renvoie :
    """,
        [
            """```noir```""",
            """```chatain```""",
            """```blond```""",
            """```rouge```""",
        ],
        [1],
    ], 
    [
    """ 
	Pour la liste ```#!python cheveux = ['noir','chatain','blond','rouge']```, l'instruction ```cheveux[2]``` renvoie :
    """,
        [
            """```noir```""",
            """```chatain```""",
            """```blond```""",
            """```rouge```""",
        ],
        [3],
    ],  
    [
    """ 
	Pour la liste ```#!python yeux = ['noir', 'chatain', 'bleu', 'vert']```, l'instruction ```yeux[3]``` renvoie :
    """,
        [
            """```noir```""",
            """```chatain```""",
            """```bleu```""",
            """```vert```""",
        ],
        [4],
    ],   
    [
    """ 
	Pour la liste ```#!python yeux = ['noir', 'chatain', 'bleu', 'vert']```, l'instruction ```yeux[-1]``` renvoie :
    """,
        [
            """```noir```""",
            """```chatain```""",
            """```bleu```""",
            """```vert```""",
        ],
        [4],
    ],  
    [
    """ 
	Étant donné les listes :
	```python
	taille = [1, 2, 3, 4] 
	nombres = [5, 4, 3, 2, 1]
	```
	l'instruction ```taille[1]*nombre[3]``` renvoie :
    """,
        [
            """```4```""",
            """```6```""",
            """```9```""",
            """```12```""",
        ],
        [1],
    ],  
    [
    """ 
	Étant donné les listes :
	```python
	taille = [1, 2, 3, 4] 
	nombres = [5, 4, 3, 2, 1]
	```
	
	l'instruction ```nombre[1]*taille[3]``` renvoie :
    """,
        [ 
            """```3```""",
            """```15```""",
            """```16```""",
            """```20```""",
        ],
        [3],
    ],  
    [
    """ 
	Pour la liste 
	```python 
	maliste = [9, 4, 8, -2, 6, -9, 7] 
	```
	
	```-9``` est la valeur d'indice :
    """,
        [
            """```0```""",
            """```4```""",
            """```5```""",
            """```6```""",
        ],
        [3],
    ],  
    [
    """ 
	Pour la liste 
	```python 
	maliste = [-10, -1, 5, 4, 8, 0, 6]
	```
	```5``` est la valeur d'indice :
    """,
        [
            """```0```""",
            """```1```""",
            """```2```""",
            """```3```""",
        ],
        [3],
    ],  
    [
    """ 
	Soit le script :
	```py 
	maliste = [0, -10, -4, -9, -2, 3, 6]
	i = 5
	```
	l'instruction ```maliste[i+1]``` renvoie :
    """,
        [
            """```-2```""",
            """```3```""",
            """```6```""",
            """```7```""",
        ],
        [3],
    ],   
    [
    """ 
	Soit le script :
	```py
	maliste = [-8, -3, -4, -2, -1, -7, 10]
	i = 4
	```
	
	l'instruction ```maliste[i]+1``` renvoie :
    """,
        [
            """```-7```""",
            """```-2```""",
            """```-1```""",
            """``` 0```""",
        ],
        [4],
    ], 
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}

	
	
## Parcourir une liste

### Méthode 1 selon les indices

!!! coeur "pour la liste ```nom_de_liste``` de $n$ éléments"
	
	```py 
	for i in range(n):
		print("L'élément d'indice", i, "est", nom_de_liste[i])
	```
!!! example "parcourir par les indices"
	
	1. Parcourir dans le sens d'indices croissants de $0$ à $3$ pour une liste de 4 éléments :
	
        {{ IDE('exampleliste03a', MAX_SIZE=10,  TERM_H=9) }}
	
	1. Parcourir dans le sens d'indices décroissants de $-1$ (dernier) à $-3$ (le premier) pour une liste de 3 éléments :
	
        {{ IDE('exampleliste03b', MAX_SIZE=6,  TERM_H=8) }}
	
	
### Méthode 2 selon les valeurs 

!!! coeur "Pour la liste ```nom_de_liste```" 
	
	```py 
	for element in nom_de_liste :
		print(element, "est un élément de nom_de_liste")
	```
!!! example "parcourir par les valeurs"

	1. Dans la boucle ```#!python for```, la variable ```animal``` prend pour valeur les différentes éléments de la liste ```animaux```.
		
        {{ IDE('exampleliste04a', MAX_SIZE=10,  TERM_H=9) }}	
	
	1. Dans la boucle ```#!python for```, la variable ```lettre``` prend pour valeur les différents éléments de la liste ```lettres``` dans l'ordre :
	
        {{ IDE('exampleliste04b', MAX_SIZE=10,  TERM_H=9) }}	
	
!!! example "Cas des chaines de caractères"
	
	Les variables de type  ```#!python str``` sont des collections ordonnées de caractères et sont similaires aux listes :"
 
	Ainsi pour la variable  ```chaine = "mathematiques"``` de type  ```#!python str```
	
	- l'instruction ```len(chaine)``` renvoie le nombre de caractères (ici $13$)
	- l'instruction ```chaine[0]``` renvoie le premier caractère : ```m```.
	- l'instruction ```chaine[5]``` renvoie le caractère d'indice $5$ : ```m```.
	- l'instruction ```chaine[-1]``` et ```chaine[12] renvoient le dernier caractère : ```m```.
	- on peut parcourir les caractères de la valeur de ```chaine``` à l'aide d'une boucle ```#!python for```:
	
    {{ IDEv('exampleliste05', MAX_SIZE=12,  TERM_H=12) }}	
	
## Instructions courantes   


!!! coeur "ajout d'éléments en fin de liste"
	
	L'instruction ```nom_de_liste.append(element)``` permet d'ajouter ```element``` **en fin de la liste** ```nom_de_liste```.
	
!!! example "Ajout par ```.append()```"
	 
    {{ IDEv('exampleliste06a', MAX_SIZE=7,  TERM_H=7) }}	

	On peut utiliser une boucle ```#!python for``` pour peupler une liste élément par élément :
	
    {{ IDE('exampleliste06b', MAX_SIZE=7,  TERM_H=6) }}


??? coeur "Autres instructions"
	
	Les instructions ci-dessous apparaissent peu dans le cours de mathématiques de l'enseignement de spécialité de mathématiques et peuvent être ignorés dans une première lecture.
	
	Pour une liste ```L``` :
	
	| Instruction | Explications |
	|:---:|:---:|
	|```#!python del(L[i])``` | supprime l'élément d'indice ```i``` de ```L``` (et décale les suivants vers la gauche) |
	|```#!python L.insert(i,e)``` | insère l'élément ```e``` en ```L[i]``` (et décale les suivants vers la droite) | 
	|```#!python L.count(e)``` | renvoie le nombre d'occurence de la valeur ```e``` dans la liste ```L```| 
	|```#!python L.index(e)``` | renvoie l'indice de la première occurence de la valeur ```e``` dans la liste ```L```| 


## Définition de listes par compréhension 


!!! coeur "définition par compréhension"
	Une liste est définie par **compréhension** en donnant une propriété caractéristiques de ses éléments.
	La syntaxe type est :
	
	- ```#!python	L = [ expression for variable in ensemble]```
	- ```#!python	L = [ expression for variable in ensemble if condition] ```
	
	
!!! example "définitions par compréhension"
 
	À partir d'une liste ```liste_0``` définie par extension.
	
	On définit par compréhension les listes :
	
	- nouvelle liste ```liste_double``` en doublant chacun des éléments de ```liste_0```
	- nouvelle liste ```liste_carres``` en élevant au carré chacun des éléments de ```liste_0```
	- nouvelle liste ```liste_partielle``` en gardant que les termes strictement supérieurs à $2$ parmi ```liste_0```
	
	
    {{ IDE('exampleliste07', MAX_SIZE=8,  TERM_H=8) }}

!!! example "compréhension avec ```range()```"
		
	- ```#!python	range(501)``` progression avec les entiers de ```[0, 1, 2,..., 500]```
	- ```#!python A = [ 2*i for i in range(501) ]``` est une liste avec les entiers ```[0, 2, 4,..., 1000]```
	- ```#!python B = [ i+1 for i in A ]``` est une liste avec les entiers  ```[1, 3, 5,..., 501]```
	- ```#!python C = [ i+1 for i in A if i<100 ]``` est une liste avec les entiers  ```[1, 3, 5,..., 99]```



{{ multi_qcm(
    [
    """ 
	 L'instruction ```[3*i for i in range(7)]``` renvoie la liste : 
    """ 
	 ,
        [
            """```#!python [0 , 1, 2, 3, 4, 5, 6, 7] ```""",
            """```#!python [3, 6, 9, 12, 15, 18] ```""", 
            """```#!python [0 , 3, 6, 9, 12, 15, 18] ```""", 
            """```#!python [3, 6, 9, 12, 15, 18, 21] ```""",
            """```#!python [0 , 3, 6, 9, 12, 15, 18, 21] ```""", 
        ],
        [3],
    ], 
    [
    """ 
	 La liste ```[0 , 1 , 4, 9, 16]``` s'obtient par compréhension à l'aide de l'instruction : 
    """ 
	 ,
        [
            """```#!python [ i*2 for i in range(4) ] ```""", 
            """```#!python [ i*2 for i in range(5) ```""", 
            """```#!python [ i**2 for i in range(4) ```""",
            """```#!python [ i**2 for i in range(5) ```""",
        ],
        [4],
    ], 
    [
    """ 
	 La liste ```[2 , 4, 6, 8]``` s'obtient par compréhension à l'aide de l'instruction : 
    """ 
	 ,
        [
            """```#!python [ i*2 for i in range(4) ] ```""", 
            """```#!python [ i*2 for i in range(5) ```""",
            """```#!python [ i*2 for i in range(1,5) ```""",
            """```#!python [ i**2 for i in range(4) ] ```""", 
            """```#!python [ i**2 for i in range(5) ```""",
            """```#!python [ i**2 for i in range(1,5) ```""",
        ],
        [3],
    ], 
    [
    """ 
	 La liste ```[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]``` s'obtient par compréhension à l'aide de l'instruction : 
    """ 
	 ,
        [  
            """```#!python [ 2*i+1 for i in range(14) ```""", 
            """```#!python [ 2*i+1 for i in range(1, 14) ```""", 
            """```#!python [ 2*i+1 for i in range(15) ```""", 
            """```#!python [ 2*i+1 for i in range(1, 15) ```""", 
        ],
        [3],
    ], 
    [
    """ 
	 La liste ```[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]``` s'obtient par compréhension à l'aide de l'instruction : 
    """ 
	 ,
        [  
            """```#!python [ i**2 for i in range(10) ```""", 
            """```#!python [ i**2 for i in range(11) ```""", 
            """```#!python [ i**2 for i in range(1, 10) ```""", 
            """```#!python [ i**2 for i in range(1, 11) ```""", 
        ],
        [2],
    ], 
    multi = False,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}



## Quelques utilisations 


!!! example "Tracer la représentation graphique d'une fonction"
	
	Pour représenter la fonction cube sur l'intervalle $[-2;2]$ :
	
	- Créer une liste ```xs``` avec 41 éléments pour les abscisses
	- Déterminer pour chaque élément de ```xs``` son image par $f$, et les mettre dans une liste ```ys```.
	
	L'instruction ```#!python plot(xs,ys, "r-)``` va alors :
	
	- pour chaque indice ```i``` placer le point de coordonnées ```(xs[i];ys[i])```
	- relier les 41 points formés par une ligne rouge.
	
    {{ IDE('example_matplolib01', MAX_SIZE=12,  TERM_H=2)}}

	??? tip "La représentation graphique de la fonction $f\colon x\mapsto x^3$"
		<div id="example_matplolib01" class="center" style="display: flex;justify-content: center;align-content:center;flex-direction: column;margin:auto;min-height:5em;text-align:center">
		Votre tracé sera ici
		</div>


!!! example "Enregistrer les termes d'une suite"

	Soit la suite définie par récurrence par : 
	
	- son premier terme $u_0$ 
	- $\forall n\in\mathbb{N}$ on a  \(u_{n+1}= \begin{cases} 3u_n+1 & \text{si $u_n$ est impair} \\  \frac{u_n}{2} & \text{si $u_n$ est pair}  \end{cases}\)
	
	Dans le scripts ci-dessous :
	
	- la fonction ```terme_suivant()``` calcule le terme suivant de la suite.
	- La fonction ```orbite()``` prend pour paramètre ```u0``` et retourne les termes de la suite jusqu'au plus petit terme de la suite tel que $u_n=1$.
	 
    {{ IDE('example_collatz', MAX_SIZE=24,  TERM_H=2)}}
 
	??? tip "La représentation graphique d'une orbite"
		<div id="example_orbite" class="center" style="display: flex;justify-content: center;align-content:center;flex-direction: column;margin:auto;min-height:5em;text-align:center">
		Votre tracé sera ici
		</div> 
 
	La conjecture de Collatz affirme que pour tout terme initial, la suite précédente doit atteindre $1$.
 
 
  