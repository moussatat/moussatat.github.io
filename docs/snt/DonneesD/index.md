---
tags:
  - snt/données structurées
hide :
  - feedback
---
# Projet - Arbres du Grand Lyon
 
!!! info "Consignes"   
	Pour ce projet[^1], utilisez l'interface basthon en mode [notebook](https://notebook.basthon.fr/){ .md-button .md-button--primary  } 
	
	- pour exécuter une instruction dans notebook, il faut taper simultanément sur les touches Shift+Enter
	- pour effacer une entrée dans notebook, taper simultanément sur Esc+D, et répéter une seconde fois.
	
	Pour rendre le travail (ou le sauvegarder)
	
	- dans le notebook, à l'aide du bouton :fontawesome-solid-share-nodes:, générer un lien permanent vers le contenuy actuel
	- copier le dans le presse-papier
	- coller le dans votre document [doctools](https://link.dgpad.net/FBvq){ .md-button .md-button--primary  }, codes wims.
	- rédiger les réponses aux questions 

 
## Arbres d'alignement du Grand Lyon
L'arbre d'alignement est un objet ponctuel représentant un arbre situé sur le domaine public et géré par le Grand Lyon (Direction de la Voirie - Service Arbres et Paysage).  
Généralement localisé le long des voies de circulation ou sur les espaces publics, il est caractérisé par des informations de gestion (genre, espèce, variété, essence botanique, hauteur, diamètre couronne, localisation, date et année de plantation, ...)  
Ces informations sont regroupées dans un fichier disponible librement sur [geo.data.gouv.fr](https://www.data.gouv.fr/fr/datasets/arbres-dalignement-de-la-metropole-de-lyon/).

À l'aide des instructions vues dans le TP précédent répondre aux questions suivantes :

1. Télécharger le fichier ```arbres.csv``` [ :fontawesome-solid-file-csv:](https://drive.google.com/file/d/1b6gSVT3M3r-IguvZlIBJ2EwL7uMxmMuu/view?usp=sharing){ .md-button .md-button--primary  }   (le fichier original contient des données indésirables).
1. En ouvrant le fichier à l'aide de blocnotes vérifiez le séparateur utilisé.
1. Se rendre sur l'interface basthon  en mode  [Notebook](https://notebook.basthon.fr/){ .md-button .md-button--primary  }
1. Téléversez le fichiers  ```arbres.csv``` dans votre interface Python à l'aide du bouton <i class="far fa-folder-open"></i> 
1. Compléter les pointillées à la ligne 2 afin d'enregistrer le contenu du fichier ```arbres.csv``` dans le tableau ```data0```. 
```py linenums="1" hl_lines="2"
import pandas as pa 
data0 = pa.read_csv("...", sep='...' ,decimal="...")
```
1. À l'aide d'une instruction python, déterminer le nombre d'objets et de descripteurs de ce tableau.
1. À l'aide d'une instruction python, donner quelques exemples de descripteurs mentionnés.
1. La longitude et latitude d'un arbre figurent-elles parmi les descripteurs mentionnés ? En quelles colonnes ?
1. À l'aide d'une instruction python, déterminer l'année de plantation de l'arbre correspondant à l'objet de rang 12345.
1. À l'aide d'une instruction python, déterminer le nom français (```essencefrancais```) de l'arbre correspondant à l'objet de rang 6991.
1. À l'aide d'instructions python, déterminer la latitude et la longitude de l'arbre correspondant à l'objet de rang 2777.
1. À l'aide de [GoogleMaps](https://www.google.com/maps){ .md-button .md-button--primary  }, rentrer la latitude et longitude (séparés par une vigule) et déterminer la rue ou est planté l'arbre 2777 !
1. À l'aide d'une instruction python, extraire la colonne des communes.
1. À l'aide d'une instruction python, retrouver l'effectif d'arbres d'alignement dans la commune de ```"VILLEURBANNE"```.
1. À l'aide d'une instruction python, extraire la colonne des hauteurs totales.
1. À l'aide d'une instruction python, donner la hauteur médiane des arbres d'alignement du Grand Lyon.
1. À l'aide d'une instruction python, retrouver le nombre d'arbre dont la hauteur totale est inférieure ou égale à 3 mètres.
 
 
 
## Application de filtres à l'aide de Python

1. Exécuter l'instruction suivante pour garder dans le tableau ```data1``` uniquement la colonne des hauteurs des arbres.
	```py   
	data1 = data0.loc[ : , ['hauteurtotale_m'] ]	
	```
1. À l'aide d'une instruction python, vérifier que ```data1``` ne contient plus qu'une seule colonne.
1. Exécuter l'instruction suivante pour garder dans le tableau ```data2``` uniquement les arbres de la commune de VILLEURBANNE.
	```py   
	data2 = data0.loc[ data0['commune']=="VILLEURBANNE" , : ]	
	```
1. Qu'affiche les instructions : 
	```py
	data0["essencefrancais"].value_counts()
	data2["essencefrancais"].value_counts()
	```
1. Quel est le nombre de ```Platane à feuilles d'érable``` dans la commune de Villeurbanne ?
1. Exécuter l'instruction suivante pour garder dans le tableau ```data3``` uniquement les hauteurs des arbres situés dans la commune de ```"VILLEURBANNE"```
	```py 
	data3 = data0.loc[ data0['commune']=="VILLEURBANNE" , ['hauteurtotale_m'] ]	
	```
1. Qu'affiche l'instruction ```data3.info()``` ?
1. Quelle est la hauteur médiane des arbres d'alignement dans la commune de Villeurbanne.


 
## Localisation des arbres sur une carte

La latitude et la longitude sont deux coordonnées qui permettent de repérer un objet sur la sphère terrestre.
Cette [animation géogébra](https://www.geogebra.org/m/gq4ewapb#material/kbwhwe8j) vous raffraichira la mémoire. Pour information, le centre de la ville de Lyon est situé à la latitude 45.751233 Nord et 4.953711 Est.
 

Nous allons utiliser les descripteurs ```'latitude'``` et  ```'longitude'``` dans ```data0``` pour pacer sur une carte tous les arbres d'alignement du Grand Lyon !

```py linenums="1" hl_lines="7"
import pandas as pa
import folium
from folium import plugins

data0 = pa.read_csv("arbres.csv", sep=';',decimal=".")

positions = data0.loc[ : , ['latitude', 'longitude']]

macarte = folium.Map(location=[45.751863,4.868966],  zoom_start=12)
plugins.HeatMap(positions, radius=3,blur=1).add_to(macarte)
macarte.display() # marche dans notebook basthon 
```

Vous devez voir cette carte dynamique :

<iframe src="macarte.html"
   width="100%"  height="450" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes" allowfullscreen="true">
</iframe> 

## Mise en situation

Le ```"Noisetier de Byzance"``` est un  arbre dont le pollen a un fort potentiel allergisant.
1. Modifier la ligne 7 du script pour faire apparaitre sur la carte uniquement les positions des "Noisetier de Byzance".
1. Quels quartiers de Lyon sont à éviter au printemps si l'on est allergique au pollen du Noisetier ?
 
!!! tip Bilan

	Si pour des quantités de données relativement petites, le tableur reste une solution acceptable. La démarche guidée dans ce projet est bien plus adaptée au traitement rapide de banques de données massives. Il existe d'autres langages de programation comme R,  utilisés dans l'analyse et l'exploration de données.

## Sources 
 
[^1]: Adaptation libre à partir d'un sujet original présenté par Frédéric Bro dans le cadre de la [semaine des mathématiques à l’académie de Créteil (2018)](https://youtu.be/Wk6j5mkV2j8?si=2zq3rV31dPspQ8oA).

