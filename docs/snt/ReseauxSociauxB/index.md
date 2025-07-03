---
tags:
  - snt/reseaux sociaux
hide :
  - feedback
---
# Modéliser les réseaux sociaux 

!!! info "Consignes" 

	- À partir de la page [```Doctools```](https://link.dgpad.net/9ZCz){ .md-button--primary  }, se connecter à l'aide des codes perso distribués.
	- Utiliser le code ```9ZCz``` pour accéder au document à compléter en ligne. 
	- Vous pouvez travailler en bînome, renseigner votre partenaire dans l'espace réservé. 
	- Les groupes de 3 ou plus sont **interdits**.
	- Le travail est sauvegardé au fur et à mesure. Vous pouvez poursuivre en cas de coupure.
	- Vous pouvez travailler sur un document hors-ligne, et renseigner les réponses une fois terminé. 
 


!!! coeur "Un graphe"

	Pour représenter un réseau social on utilise un graphe défini par :
	
	- **sommets** : modélisent les entités sociales (utilisateurs)
	- **arêtes** : modélisent les relations non orientées entre les entités
	- **arcs** : modélisent une relation **orientée** d'une personne ou entité vers une autre.
 
!!! example "Exemple de graphe non orienté"

	Sur le réseau Facebook, pour être en relation, deux personnes inscrites doivent sʼaccepter mutuellement comme amis. Une arête entre 2 sommets représente la relation &laquo; sont amis &raquo;.


	```mermaid
	graph LR;
		Jade --- Julien;
		Tony --- Julien;
		Tony --- Nina;
		Nina --- Julien;
		Fred --- Tony;
		Fred --- Jade;
	```


!!! example "Exemple de graphe orienté"

	Sur Twitter, il est possible de suivre une personne inscrite sans que cela soit réciproque. Un arc entre 2 sommets représente la relation &laquo; est un abonnés de &raquo;. 

	 ```mermaid  
	graph LR; 
		Jade --> Julien;
		Julien --> Jade;
		Julien --> Tony;
		Nina --> Tony;
		Nina --> Julien;
		Julien --> Nina;
		Fred --> Tony;
		Jade --> Fred; 
	```


???+ question "Exercice 1"  

	On considère le réseau social suivant :
		- Cléo est amie avec Mathias, Stella, Carla et Léopold
		- Mathias est ami avec Cléo, Maxime, Carla, Léopold et Léane
		- Léane est amie avec Mathias, Charles et Léopold
		- Léopold est ami avec Maxime, Cléo, Mathias et Léane
		- Carla est amie avec Cléo et Mathias
		- Stella est amie avec Cléo
		- Maxime est ami avec Léopold et Mathias
		- Charles est ami avec Léane

	Le page [graphonline](http://graphonline.ru/fr/home?graph=UywELoOScVdFJpblZZcst) contient la liste des noeuds de se graphe social.

	1. Utilisez l'onglet **Lier les sommets** pour complétez le graphe  avec des arrêtes non orientées pour représenter les liens d'amitiés. 
	1. Arrangez les sommets du graphe afin qu'aucune arrête n'en coupe une autre (on dit que le graphe est **planaire**, ce n'est pas le cas de tous les graphes).
	1. Utilisez l'onglet **:material-cog: Algorithmes**, calculez le degré des sommets. Que représente ce nombre ?
	1. Quel est le plus court chemin qui relie ```Stella``` à ```Léane``` ? Préciser sa longueur.
	1. En partant du sommet ```Mathias``` trouvez les plus cours chemin pour rejoindre les autres sommets. 
	1. Donner deux sommets du graphe qui sont le plus éloignés l'un de l'autre. C'est le **diamètre du graphe**.  
 
 
!!! coeur "Vocabulaire dans un graphe non orienté" 

	- **chaîne** : suite de sommets reliés par des arêtes**
	- **distance entre deux sommet**  est égale à la longueur de la plus petite chaîne qui les relie.
	- **écartement/éxcentricité d'un sommet** est la distance maximale entre ce sommet  et les autres nœuds du graphe
	- **diamètre du graphe** est la distance maximale entre deux sommet de ce graphe.
	- **le centre** est **l'ensemble** des sommets d'écartement minimal.
	- **tableau d'adjacence** est un tableau à double entrée ou chaque case contient 1 si les sommets sont liés par une arête, 0 sinon.  

 

!!! example "Exemple"

	Soit le graphe et son tableau d'adjacence et celui des distances entre sommets :
 
	<div class="grid" markdown>
	
	```mermaid
	graph LR;
		A---C;
		A---D;
		C---E;
		C---D;
		B---D; 
		C---B; 
		E---D;
		A---E;
	``` 
	
	- le sommet A est adjacent à C, D et E.
	- la distance du sommet A au sommet B est de 2
	- la distance du sommet C au sommet B est de 1. B et C sont adjacents.
	- la distance du sommet C aux sommets A, B, D et E est de 1 (voir le tableau de distance). Le sommet a un écartement de 1.
	- l'écartement du sommet D est de 1 (voir le tableau de distance).
	- l'ensemble  $\{ C; D\}$ est le centre du graphe.
	
	</div>
	
	=== "Tableau d'adjacence"
  
		| Adjacence | A | B | C | D | E |
		| :---: | :---: | :---: | :---: | :---: | :---: |
		| A | 0 | 0 | 1 | 1 | 1 |
		| B | 0 | 0 | 1 | 1 | 0 |
		| C | 1 | 1 | 0 | 1 | 1 |
		| D | 1 | 1 | 1 | 0 | 1 |
		| E | 1 | 0 | 1 | 1 | 0 |

	=== "Tableau de distance"
	
		| Distance | A | B | C | D | E |  
		| :---: | :---: | :---: | :---: | :---: | :---: |  
		| A | 0 | 2 | 1 | 1 | 1 |  
		| B | 2 | 0 | 1 | 1 | 2 |  
		| C | 1 | 1 | 0 | 1 | 1 |  
		| D | 1 | 1 | 1 | 0 | 1 |  
		| E | 1 | 2 | 1 | 1 | 0 | 
 
	
 
???+ question "Exercice 2"  
	
	<div class="grid" markdown>
	
	1. Compléter les tableaux d'adjacence et de distance du graphe ci-contre.
	1. Déterminer l'écartement de chaque sommet.
	1. Déterminer le  **diamètre** et le(s) **centre(s) des graphes**.
 
	```mermaid
	graph TD;
		Marc---Tatiana;
		Marc---Elliot;
		Louise---Elliot;
		Tatiana---Mathilde; 
		Elliot---Mathilde; 
		Tatiana---Elliot; 
		Anna---Charles;
		Mathilde---Charles;
	```   
	
	</div>
	
	=== "Tableau d'adjacence"
	
		| Adjacence | A | C | E | L | M | Mc| T |
		| :---: | :---: | :---: | :---: | :---: | :---: |:---: | :---: |   
		| Anna |   |   |   |   |   |    |  | 
		| Charles |   |   |   |   |   |    |  | 
		| Elliot |  |   |   |   |   |    |  | 
		| Louise |   |   |   |   |   |    |  | 
		| Mathilde |  |   |   |   |   |    |  | 
		| Marc |  |   |   |   |   |    | | 
		| Tatiana |  |   |   |   |   |    |  | 
	 
	
	=== "Tableau de distance"
	
		| Distance | A | C | E | L | M | Mc| T |
		| :---: | :---: | :---: | :---: | :---: | :---: |:---: | :---: |   
		| Anna |   |   |   |   |   |    |  | 
		| Charles |   |   |   |   |   |    |  | 
		| Elliot |  |   |   |   |   |    |  | 
		| Louise |   |   |   |   |   |    |  | 
		| Mathilde |  |   |   |   |   |    |  | 
		| Marc |  |   |   |   |   |    | | 
		| Tatiana |  |   |   |   |   |    |  |  
	 
???+ question "Exercice 2 bis"  
	
	<div class="grid" markdown>
	
	1. Compléter les tableaux d'adjacence et de distance du graphe ci-contre.
	1. Déterminer l'écartement de chaque sommet.
	1. Déterminer le  **diamètre** et le(s) **centre(s) des graphes**.
 
	```mermaid
	graph TD;
		Quark---Jadzia;
		Quark---Tasha;
		Jadzia---Curzon;
		Jadzia---Ezra; 
		Tasha---Ezra; 
		Tasha---Naomi; 
		Naomi---Garak;
		Curzon---Garak;
	```  
	
	</div>
	
	=== "Tableau d'adjacence"
	
		| Adjacence | C | E | G | J | N| Q | T |
		| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |      
		| Curzon |   |   |   |   |   |    |     |  
		| Ezra |  |   |   |   |   |    |     |  
		| Garak |   |   |   |   |   |    |     |  
		| Jadzia |  |   |   |   |   |    |     |  
		| Naomi |  |   |   |   |   |    |      |  
		| Quark |  |   |   |   |   |    |    |  
		| Tasha |   |   |   |   |   |    |      |  
	 
	
	=== "Tableau de distance"
	
		| Distance | C | E | G | J | N| Q | T |
		| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |      
		| Curzon |   |   |   |   |   |    |     |  
		| Ezra |  |   |   |   |   |    |     |  
		| Garak |   |   |   |   |   |    |     |  
		| Jadzia |  |   |   |   |   |    |     |  
		| Naomi |  |   |   |   |   |    |      |  
		| Quark |  |   |   |   |   |    |    |  
		| Tasha |   |   |   |   |   |    |      |   
	 

 
 
## Les propriétés principales observées des réseaux sociaux

!!! info  "Enquête vidéo de  [Mehdi Moussaïd](https://twitter.com/Mehdi_Moussaid) sur la structure des graphes sociaux"

	Visionnez les 12 premières minutes de la vidéo ci-dessous

	<iframe  width="100%" height="416px" src="https://www.youtube.com/embed/UX7YQ6m2r_o?rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

???+ question "Exercice 3 : compréhension"  
 
	1. Décrire le premier modèle _théorique_ introduit par **Paul Erdös** pour simuler un réseau social. Quelle est la première propriété mise en évidence par ce modèle ? 
	1. En vous aidant de la page [:fontawesome-brands-wikipedia-w:ikipedia](https://fr.wikipedia.org/wiki/%C3%89tude_du_petit_monde){ .md-button--primary  }, décrire l'expérience de **Stanley Milgram** du &laquo;  petit monde &raquo; (pas celle sur l'autorité !). 
	1. Quelle(s) critique(s)[^1] majeure(s) peux-on émettre sur l'étude menée ?
	1. Quel est le réseau social étudié par **Duncan Watts** ? Quelle est la longueur moyenne du chemin entre deux acteurs ?
	1. Quel effet a l’utilisation des plateformes de réseaux sociaux sur les degrés de séparation ? 
	1. Quelle seconde propriété des réseaux sociaux a été identifiée par Duncan Watts ?
	1. **Albert Lazlo Barabasi** constate que les réseaux sociaux font aussi apparaitre des **Hubs** faisant le lien entre différentes sous-communautés. 
		- Donner d'autres de réseaux qui exhibent cette propriété. 
		- Quelle est la justification proposée par Barabasi d'une telle organisation ?
	1. Donner les caractéristiques identifiés par l'auteur pour le réseaux social sur twitter formé des amateurs de sciences sur twitter (la valeur du degré de séparation, quelques sous-communautés et des hubs).

## Références

[^1]: La vidéo de [Véritasium (en anglais)](https://www.youtube.com/watch?v=TcxZSmzPw8k) présente une discussion plus approfondie sur le phénomène du petit monde et sur l'importance des rencontres aléatoires, et aborde les critiques de l'expérience de Milgram.