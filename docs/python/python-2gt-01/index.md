---
tags:
  - python
  - seconde
hide :
  - feedback
---
# IDE, console et affichage

Un *environnement de développement* (en anglais _Integrated Development Environment_) est un ensemble d'outils qui permet d'augmenter la productivité des programmeurs.  Sur ce site il peut prendre différentes formes.

## La console

Les instructions en langage Python sont exécutées par un **interpréteur** Python dans une **console** (en anglais _shell_).

Le _prompt_ ```#!python >>>``` indique que l'interpréteur est dans l'attente de nouvelles instructions. 

!!! example "Saisir l'instruction ```#!python 3+2.5``` dans le terminal ci-dessous et exécuter la en appuyant sur ++enter++"
	{{ terminal(TERM_H=4) }}
  
Par la suite, la présence de ```#!python >>>``` indique qu'il s'agit d'instructions rentrées directement dans la console. Vous n'avez pas à le rentrer. 


## Un éditeur et une console 

Un éditeur de texte sert à  sauvegarder  un programme ou _script_ (succession de définitions, d'expressions et de commandes). Pour la plupart des exercices il y a un IDE intégrant éditeur et console, muni de 5 boutons.  

!!! example "Exécuter le script de gauche à l'aide du bouton {{ py_btn('',WRAPPER='span',SIZE=24 ) }} ou de ++ctrl+s++"  

    {{ IDEv('exampleIDE01', MIN_SIZE=10, ID=1) }} 

!!! example "La demande d'affichage doit être explicite dans le script"
    1. Exécuter le script ci-dessous.
	
    {{ IDEv('exampleIDE02', MIN_SIZE=10, ID=2) }} 
    
    Il ne s'affiche rien, c'est normal, l'interpréteur a juste exécuté l'instruction.  
    2. Pour afficher le résultat du calcul, modifier la ligne 2 pour ```#!python print(2+3.5)``` et exécuter le script.
	
	
## Affichage

L'instruction ```#!python print()``` permet d'afficher du texte (entre guillemets), des nombres ou d'autres objets.

!!! example "Afficher nombres et textes"  
	Exécuter le script ci-dessous.
    {{ IDE('exampleIDE03', MAX_SIZE=8, ID=3) }}
	
	- Les lignes 1 et 2 affiches les objets séparés par un espace.
	- La ligne 1 simplifie le **nombre** ```0```, la ligne 2 garde le **texte** ```"000"``` en entier  car il est entre guillemets. 