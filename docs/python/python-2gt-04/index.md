---
tags:
  - python
  - seconde
hide :
  - feedback
---
# Instructions complémentaires et librairies

## Les commentaires en python 

Les commentaires sont des parties du code que l'interpréteur doit ignorer. Ils servent à annoter certaines parties du code.

!!! example "exécuter le code suivant, et vérifier qu'aucune erreur ne se produit"
    {{ IDE('commentaires', MAX_SIZE=12, TERM_H=4) }}
  
## Quelques instructions natives

!!! example "retourne une valeur approchée d'une valeur"
    {{ terminal(FILL="round(355/113 , 4)", TERM_H=4) }} 
	 
!!! example "retourne la longueur d'une séquence de texte"
    {{ terminal(FILL="len('Bonjour')", TERM_H=4) }} 

!!! example "retourne le max ou le min de deux valeurs "
    {{ terminal(FILL="max(4**3, 3**4) , min(4**3, 3**4)", TERM_H=4) }} 

!!! example "convertir une valeur en un entier"
    {{ terminal(FILL="int('125')", TERM_H=4) }} 

!!! example "convertir une valeur entière en une séquence de texte"
    {{ terminal(FILL="str(125)", TERM_H=4) }} 

!!! example "la valeur absolue" 

	L'instruction ```#!python abs()``` renvoie la valeur absolue d'une valeur ```a``` définie par   
	
	$$
	|a| = \begin{cases} a & \text{si } a\geqslant 0 \\ -a & \text{si } a <0 \end{cases}
	$$ 
	
	{{ terminal(FILL="abs(3.5)", TERM_H=2) }} 
	
	{{ terminal(FILL="abs(-2.25)", TERM_H=2) }} 
	
	On retiendra que pour tout $a\in\mathbb{R}$, $|a|\geqslant 0$.
	
## Importer des modules en Python


Certaines instructions ne sont pas natives, vous devez les importer directement depuis des librairies python.


!!! example "importer une instruction contenue dans la librairie maths"
	1. Exécuter le script ci-dessous et vérifier qu'il retourne une erreur de type ```#!python NameError```
	1. Décommenter (enlever le signe # du commenaire), et exécuter le script de nouveaux.
    {{ IDE('import01', MAX_SIZE=6, TERM_H=4) }}

!!! example "importer la totalité d'une librairie python"
	Noter l'utilisation d'un prefixe ```#!python math``` ou ```#!python random``` :
    {{ IDE('import02', MAX_SIZE=15, TERM_H=5) }}
	Pour se défaire de l'obligation de rajouter le prefixe de la librairie, il est fréquent dans les manuels de mathématiques (mais **déconseillé**) d'importer une librairie de la manière suivante :
    {{ IDE('import03', MAX_SIZE=5, TERM_H=3) }}
	
