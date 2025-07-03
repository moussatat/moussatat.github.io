---
tags:
  - snt/données structurées
hide :
  - feedback
---
# Traiter des données

!!! Abstract "Objectifs"
	- observer les différences de traitements possibles avec programme Python
	- Explorer les données d’un fichier CSV à l’aide d’opérations de tri et de filtre, effectuer des
	calculs sur ces données, réaliser une visualisation graphique des données. 

Avec la collecte de plus en plus massive de données, les tableurs traditionnels ne permettent pas aisément un traitement automatisé des données (valeurs clefs, représentations, recherche d'incohérences ou de manipulations).
Nous allons au travers d'un exemple simple, apprendre à lire et traiter des données au format csv à l'aide de Python et du module ```pandas```.
 
 
!!! info "Consignes" 
	Utilisez l'interface [basthon](https://basthon.fr/){ .md-button .md-button--primary  } en mode [notebook](https://notebook.basthon.fr/){ .md-button .md-button--primary  }   
	
	- pour exécuter une instruction dans notebook, il faut taper simultanément sur les touches Shift+Enter 
	- pour effacer une entrée dans notebook, taper simultanément sur Esc+D, et répéter une seconde fois.  
	
	Pour rendre le travail (ou le sauvegarder)
	
	- dans le notebook, à l'aide du bouton <i class="fas fa-share-alt-square"></i>, générer un lien permanent vers le contenuy actuel
	- copier le dans le presse-papier
	- coller le dans votre document [doctools](https://link.dgpad.net/6mgz){ .md-button .md-button--primary  }, codes wims.
	- rédiger les réponses aux questions 6 à 8, et 11 à 19.  
 
 

### Exercice 
 
1. Télécharger le fichier [```notes.csv```](/snt/DonneesC/notes.csv){ .md-button .md-button--primary  }
1. En ouvrant le fichier à l'aide de blocnotes vérifiez le séparateur utilisé.
1. Se rendre sur l'interface [Notebook de basthon.fr](https://notebook.basthon.fr/){ .md-button .md-button--primary  }
1. Téléversez le fichiers  [```notes.csv```](/snt/DonneesC/notes.csv){ .md-button .md-button--primary  }  dans votre interface Python à l'aide du bouton :fontawesome-regular-folder-open: 
1. Compléter les pointillées à la ligne 3 afin d'enregistrer le contenu du fichier ```notes.csv``` dans le tableau ```donnees```.  
	```py linenums="1" hl_lines="3"
	import pandas as pa
	import matplotlib.pyplot as plt   
	donnees = pa.read_csv( ...  ,sep=';',decimal=",")
	```
1. Quel est le rôle des paramètres  ```sep=';'``` et ```decimal=","``` dans la ligne 3 précédente ?
1. Exécuter l'instruction ci-dessous, et compléter la phrase :
	```py
	donnees.shape
	```
	Le tableau contient ```...``` objets. Chaque objet est représenté par une ```(ligne/colonne)```. Il y a ```....``` descripteurs répartis sur ```...```  ```(lignes/colonnes)```.
1. À l'aide de la l'instruction ci-dessous, préciser la liste des descripteurs et le type de données enregistrés (colonne Datatype)
	```py
	donnees.info()
	```
1. Compléter les pointillés afin d'afficher les 5 premières ligne du tableau à l'aide de l'instruction 
	```py
	donnees.head(...)
	```
1. Executer l'instructions :
	```py
	print(donnees.loc[12,'DS02'])	# afficher la valeur du descripteur de l'objet de rang 12 au DS2
	```
1. Utiliser une instruction python pour retrouver :
	- la note à l'évaluation 6 de l'objet de rang 36 
	- le nom d'élève de l'objet de rang 45
1. Executer les instructions (séparément, afin de voir ce  qui est retourné)
	```py
	notesDS01 = donnees['DS01']					# extraire la colonne des notes du DS01
	notesDS01 							# retourne une partie des notes du DS01
	notesDS01.value_counts()					# retourne les effectifs des différentes notes sur 20 au DS1
	``` 
	- Combien d'élèves ont eu 13/20 au DS01 ?
	- Comment sont affichées les valeurs retournées avec la dernière instruction ?
1.  Que retourne l'instruction suivante ?
	```py
	notesDS01.value_counts().sort_index()		
	```
1. Analyser la sortie de l'instruction suivante :

	```py
	notesDS01.value_counts().sort_index().cumsum() 	# retourne les effectifs cumulés	
	```	
	
	- Quel est le nombre d'élèves ayant eu au dessous de 10/20 au DS01 ?
	- Quel est le nombre d'élèves ayant 16/20 ou plus au DS01 ? 
1. Utiliser une instruction python pour retrouver le nombre d'élèves ayant 10/20 ou moins à l'évaluation 8.
1. À l'aide de la page [:fontawesome-brands-wikipedia-w:ikipedia](https://fr.wikipedia.org/wiki/Quartile){ .md-button .md-button--primary  }, donner la définition de 1er quartile, médiane et 3e quartile.
1. Compléter le tableau ci-dessous à l'aide de l'instruction Python suivante. 
	```py
	donnees.describe()
	```
	
	||_terme anglais_|```DS1```|```DS2```|```Eval06```|```Eval07```| ```Eval08```|
	|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
	| effectif total | *count* | | | | |
	| moyenne $\bar{x}$ | *mean* | | | | |
	| écart type $\sigma_{x}$ | *standard déviation* | | | | |
	|$x_{\text{min}}$|  | | | | |
	|   $Q_1$  | | | | | |
	| médiane| _median_| | | | |
	|  $Q_3$ | | | | | |
	|$x_{\text{max}}$| | | | | |

1. On représente les données précédentes dans des diagrammes appelés **Boîtes à moustaches**. Visionner la vidéo d'Yvan Monka [:fontawesome-brands-youtube: ](https://youtu.be/la7c0Yf8VyM){ .youtube }. Jusqu'où s'étendent les moustaches du diagramme ? Représenter la boite à moustaches qui résume les valeurs du DS02.
1. Exécuter le script python ci-dessous.
	```py 
	fig, axes = plt.subplots(figsize=(8, 12)) 				# initialise une figure  
	axes = donnees.boxplot(vert=True,  whis=[10,90], color='r')		#
	axes.set_ylim(0, 20.5)
	axes.set_yticks(range(21)) 
	plt.tight_layout()
	plt.show() 														# marche dans basthon.fr 
	``` 
	- Quelle différence relevez-vous avec les boites à moustaches représentées dans la question précédente et celles de la vidéo ?
	- Quelle était l'évaluation la plus réussie dans l'ensemble ?   

