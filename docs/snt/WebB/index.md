---
tags:
  - snt/le web
hide :
  - feedback
---
# Les langages du Web 

!!! warning 
	fichier à refaire pour la création du site web de l'exercice final
	
	
## HTML contenus, structure, liens

!!! coeur "HTML"
	Le langage **H**yper **T**ext **M**arkup **L**anguage (```HTML```)  a été concu par le W3C pour standardiser le format des pages envoyées par un serveur à un navigateur web. 
	
	!!! info "[Le HTML](https://vimeo.com/138623721) par [L'Université de Lille](https://vimeo.com/universitelille)[^1]"
		<iframe src="https://player.vimeo.com/video/138623721?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

		??? notes "cours (à dérouler)"   
   
			 Allons maintenant voir plus en détail le fonctionnement ; le langage ```html``` a plusieurs caractéristiques très intéressantes. Nous avons vu qu'il permettait d'introduire des hyperliens dans un document, mais il possède d'autres atouts.

			C'est un langage de description de document , c'est à dire qu'il permet d'expliquer comment le document est construit et donc comment un logiciel comme un navigateur peut l'afficher. Concrètement, ```html``` permet d'ajouter au contenu texte des éléments de structure du type : ce paragraphe est un titre, celui-là est un sous-titre, c'est une légende, ce mot doit être mis en exergue... Cette distinction contenu/structure est essentielle, elle est présente dans de nombreux domaine et nous y reviendrons souvent. La structure permet d'ajouter du sens aux parties de textes et à l'aide de règles de présentation de rendre une page ```html``` affichable sur de nombreux types d'écrans. Le navigateur calcule alors la présentation adaptée, par exemple pour une tablette, un smartphone ou un grand écran d'ordinateur.

			En français la traduction de ```html``` est : langage de balisage pour documents hypertexte. Les balises vont indiquer la structure du document en titres, paragraphes etc ainsi que des liens vers d'autres ressources du Web. Les documents sont donc des textes décrivant des documents hypertexte. Mais que fait ensuite le client, le navigateur avec ce document hypertexte qu'il vient de recevoir ?

			Grâce à la description faite du document et en fonction de ses capacités le navigateur va pouvoir recomposer le document et vous l'afficher. Les pages web que votre navigateur affiche sont des textes avec le plus souvent des images, formant un document complet. En fait ce document est réalisé par l'assemblage de nombreuses ressources. En effet, le langage ```html``` permet également de spécifier l'insertion d'images (ou d'autres ressources) à différents endroits d'un document. Les images ne sont pas à proprement parler insérées dans le document principal, mais un balisage indique qu'à cet endroit il faudra insérer une image. 


???+ question "Exercice guidé : page blanche en HTML"

	1. Ouvrir un éditeur (vscode, Blocnote) et rentrer les codes :
		```html linenums='1'
		<!DOCTYPE html>						<!-- indique le type de document -->
		<html lang="fr>						<!-- balise pour le document -->
			<head>							<!-- balise pour l'entête du document -->
			
			</head>
			<body> 							<!-- balise pour le corps du document -->
				
			</body>
		</html> 
		```

		Dans l'entête du document rajouter :   

		```html  
				
			<meta charsets="utf-8"></meta> 				  <!-- mettre les caractères sont en utf8 -->  
			<meta name="title" content="Ma page vide !">  <!-- balise pour aider ... -->  
			<meta name="author" content="Mon nom">		  <!-- ... dans le référencement -->  
			<title>Ma page web</title>					  <!-- titre à afficher dans l'onglet -->   
		```` 
		
	1. Sauvegarder le fichier sous le nom ```mapage.html```
	1. Se rendre sur le [validateur du W3C](https://validator.w3.org/), charger votre fichier et vérifier sa validité. Sinon vous pouvez rajouter 
		```html
		<a href="http://www.w3.org/html/logo/">
		<img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" width="63" height="64" alt="HTML5 Powered" title="HTML5 Powered">
		</a>
		```
	1. Analyser l'[exemple d'une page html simple](https://www.w3schools.com/code/tryit.asp?filename=GLTXRXMTPRS9)
	
!!! tip "Les balises HTML"
	Le balisage du contenu (le texte) est réalisé par des balises ouvrantes qui marquent le début d'une partie et fermantes qui marquent la fin d'une partie. 
	
	Une balise ouvrante s'écrit sous la forme ```<nomDeBalise>``` et une balise fermante ```</nomDeBalise>```. 
	
	Chaque ```nomDeBalise``` a un sens particulier. Par exemple ```<section>``` signifie début d'une nouvelle partie et ```</section>``` signifie fin d'une partie. De même on trouvera : ```<h1>``` qui signifie début de titre de premier niveau et ```</h1>``` qui signifie fin de titre de premier niveau. 

	La liste complète des balises et des attributs de chaque est  disponible sur la page [**w3schools**](https://www.w3schools.com/tags/). 
  
	| Balises                      |                                              |
	|------------------------------|----------------------------------------------|
	| ```<h1>```, ... ```<h6>``` | niveaux de titres et sous-titres |
	| ```<p>```| paragraphe  |
	| ```<strong>```  | texte important |
	| ```<b>``` | texte en gras   |
	|   ```<i>``` | texte en italique  |
	|   ```<q>``` | texte entre guillemets  |
	|  ```<a href="dest">``` | lien hypertexte vers la page d'adresse URL ```dest``` |
	| ```<img src="photo>``` |image stockée à l'adresse URL ```photo```  | 
	| ```<ul>``` | liste à puces |
	| ```<ul>``` | liste numérotée |
	| ```<li>``` | éléments d'une liste |

## Les hyperliens et images avec HTML
  
!!! coeur "Hyperliens" 
	
	!!! info "[Rassembler les ressources](https://vimeo.com/138623756) par [L'Université de Lille](https://vimeo.com/universitelille)[^1]"
	 
		<iframe src="https://player.vimeo.com/video/138623756?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

		??? notes "cours (à dérouler)" 
			Rappelons qu'une page affichée dans votre navigateur est en fait un assemblage de nombreuses ressources. Il faut donc dans un premier temps les rassembler.

			Une image est une ressource au même titre que les autres documents. Elle est donc désignée par une URL. Notez bien que ce mécanisme d'URLs permet de désigner des images dans les pages web comme autant de ressources indépendantes. En conséquence, les images ne se trouvent pas forcément sur le même serveur que le document principal.

			Examinons alors plus en détail ce qui se passe lorsque je clique sur un lien qui pointe vers une ressource de type texte mais qui cette fois contient des liens vers des images, ce que nous faisons tous les jours et qui constitue l'essentiel des pages que nous consultons. Le début du processus est rigoureusement identique à l'exemple précédent, mais au moment du calcul du résultat, (i.e. de l'affichage de la page Web par le navigateur), le client rencontre dans la description de sa page, un lien vers une ressource image . Il ne peut pas afficher cette image directement puisque le fichier n'est pas inclus, seul le lien vers cette ressource est spécifié.

			Alors, sans rien nous demander, il effectue une autre requête (identique à la précédente mais avec l'url de l'image) pour obtenir cette ressource. La réponse à cette requête est une copie du fichier image demandé. Le client peut alors l'intégrer à l'affichage de la page.

			Ce processus se répète autant de fois qu'il y a d'images dans le document et ce, quelles que soient leurs tailles.

			Cette remarque prendra tout son sens lorsque nous nous intéresserons aux traces que nous laissons et à la préservation de notre vie privée.
  

!!! tip "Hyperliens en langage HTML"
	La  **balise** ```<a>``` avec l '**attribut** ```href``` permet d'insérer un lien hypertexte vers des ressources de la même page, dans une autre page du site, ou sur un autre site :
	```html
	<a href="https://www.w3schools.com/html/">mot à afficher</a>
	```
	La  balise ```<img>``` avec l '**attribut** ```src``` pour insérer une image 
	```html
	<img src="https://i.imgur.com/UZy6Qie.png"></img>
	```  
 
!!! info "Consignes"  
	- Vous pouvez faire ce travail par groupe de 2, sauf exceptions pour manque de poste d'ordinateurs. 
	- Sauvegarder vos documents dans votre espace personnel.
	- Vous pouvez utiliserez [**w3schools.com**](https://www.w3schools.com/css/tryit.asp?filename=trycss_default) pour voir en temps réel les modifications que vous allez apporter à votre texte, en intégrant des balises ```html```.
	- soumettre le travail via le formulaire google
 
???+ question "Exercice votre fiche de présentation en HTML"

	Vous reprendrez le document ```mapage.html``` complété de l'exercice 1.
	Vous allez compléter la partie ```<body>  </body>``` afin de créer une fiche de
	présentation en HTML.
	1. Ajouter votre nom à l'aide de la balise ```<h1>``` :
		```html
		<h1> Prénom Nom </h1>
		```
	1. Dans l'entête corriger le contenu de la balise ```<titre>```
	1. Créer 4 rubriques : scolarité, renseignements administratifs, projets et Renseignement personnels avec la balise ```<h2>```
		```html
		<h2>Scolarité</h2>
		
		<h2>Reseignements administratifs</h2>
		```
	1. Dans la rubrique **Scolarité** vous allez créer des catégories de niveau ```<h3>```, et compléter chacun par un paragraphe ```<p>```. Par exemple : 
		```html
		<h2>Scolarité</h2>
		<h3>Classe</h3>
		<p>Seconde machin</p>
		```
		Les catégories sont Scolarité, Établissement passé, Classe de l'établissement de l'année précédente, Votre Statut (interne/externe).
	1. Faire vérifier votre travail.
	1. Compléter la catégorie **Reseignements administratifs** par une liste à puces comptenant : Adresse postale, Adresse courriel, Moyen de transport et enfin le Temps de transport.
		```html
		<ul>
			<li> Adresse postale : Lycée ... </li>
			<li>   </li>
		</ul> 
		```
	1. Remplir la rubrique **Projets** avec des sous-titres de niveau ```<h3>``` et des paragraphes ```<p>``` :
	
		- avez-vous une idée d'orientation après la seconde ?
		- avez-vous une idée d'orientation après le lycée ?
		- comment vous voyez vous dans 15 ans ?
	1. Remplir la rublique des **Renseignements personnels** :
	
		- Hobby et activités extrascolaires
		- particularités, options, clubs...
		- ajouter un lien vers une page de votre choix. 
		- ajouter une photo, illustration de votre choix. 
	1. Rendre le travail :
		- sauvegardez ou copiez votre code dans le document ```mapage.html```
		
		- faire une capture d'écran du résultat final.
		- renommer les deux fichiers indiqueront la **date** et noms des membres de votre groupe 
		- téléverser dans le dossier [nextcloud](https://cloud-grenoble.beta.education.fr/s/TH6YcZDEbJqmyxH)  	


## La mise en forme et le CSS

!!! tip "CSS"
	Une feuille de style Cascading Style Sheets (CSS) sert à contrôler l’apparence des éléments d’une page HTML (couleur du fond de la page, type et taille de polices de caractères, couleurs,
	etc.).
 
	!!! info "[Mise en forme](https://vimeo.com/138623826) par [L'Université de Lille](https://vimeo.com/universitelille)[^1]"
	 
		<iframe src="https://player.vimeo.com/video/138623826?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

		??? notes "cours (à dérouler)"
			  
			Revenons maintenant à l'affichage de la page dans mon navigateur.

			Le document que le client/navigateur reçoit contient du texte et des images (en lien) et il est structuré . Mais a priori aucune indication n'est donnée pour définir comment les éléments doivent être affichés. Un titre doit-il être en rouge, en noir, en gras, de quelle taille, aligné à gauche ou centré ? Or, tous les fichiers étant décrit dans une norme commune , le langage HTML , tous les navigateurs proposent une mise en forme par défaut de chacun des éléments possibles d'un document. Cette mise en forme est généralement basique et pas très esthétique mais elle permet de proposer sur n'importe quelle machine un affichage du contenu. Lorsque nous surfons tous les jours, nous voyons bien qu'au contraire, les sites proposent des affichages très graphiques beaucoup plus sophistiqués que l'affichage par défaut. C'est l'utilisation de feuilles de styles qui sont associées au document qui permet cela. Une feuille de styles définit les règles de présentation d'un document. Ces feuilles de styles, qui constituent à nouveau une ressource avec leur propre url redéfinissent l'affichage des différents éléments de contenu en utilisant par exemple une charte graphique aux couleurs de l'organisation responsable du site. Concrètement, dans le fichier du document principal, un lien particulier vers une ressource/feuille de style, déclenche pour le navigateur une requête pour obtenir cette feuille de style qui sera utilisée à la place des styles par défaut.

			Le triptyque structure/contenu/présentation est fondamental pour la compréhension de ce qu'est un document numérique. Il est réalisé par le couple HTML/feuilles de style sur le Web. Mais une bonne utilisation du traitement de texte passe également par la maîtrise de cette décomposition en 3 parties. 

		=== "CSS directement dans l'entête"
		
			Pour rester simple, on placera les CSS directement dans la partie ```<head>``` à l'aide de la balise ```<style>```. La structure générale d'une page est alors de la forme :
			```html 
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<title>Style et liens</title>
					<style>
						/* On met les syles ici */
					</style>
				</head>
				<body>
					/* le contenu de la page */
				</body>
			</html>
			```
		
		=== "CSS dans une feuille séparée"
 
			On peut intégrer une feuille de style séparée à l'aide d'un instruction de la forme :
			```html 
			<link rel="stylesheet" href="css/mes_styles.css">
			```

???+ example "Exemple"
	Analyser le code source [la page suivante](https://zenxbear.w3spaces.com/ExempleHTML_CSS.html)
 
!!! tip à savoir 
	Chaque règle d’une feuille de style contient 
	- un **sélecteur** qui détermine quels éléments sont concernés par la règle 
	- des **propriétés** entre ```{}``` qui contrôlent l’apparence de ces éléments
 
 
	```css
	strong {
	  color : red;
	}
	.important {
	  border : 2px solid red ;	
	}
	li b{ 
		background-color : cyan ;	
	}
	#meme {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width : 40%;
	  }
	```
 
	| Sélecteur                      |        Éléments concernés                                      |
	|------------------------------|----------------------------------------------|
	| ```b``` | tous les éléments de la balise ```<b>``` | 
	| ```.important``` | tous les éléments qui ont un attribut ```class="important"``` | 
	| ```#meme``` | l'élément qui a un attribut ```id="meme"``` | 
	| ```li b``` | les éléments ```<b>``` à l'intérieur des éléments ```<li>```|
	| ```li.important``` | les éléments ```<li>``` qui ont un attribut ```class="important"```|
 
???+ question "Exercice : Faire une seconde page Web"

	Vous pouvez faire ce travail[^2]  par groupe de 2, sauf exceptions pour manque de poste d'ordinateurs. 
	
	Vous utiliserez [ce site](https://www.w3schools.com/css/tryit.asp?filename=trycss_default) pour voir
	en temps réel les modifications que vous allez apporter à votre texte, en intégrant des balises
	 ```html``` et ```css```.
	 
	1. Ouvrir le dossier [googledrive](https://drive.google.com/drive/folders/1IfqxoUnL9OyCAHMqrPtEtqyvHo7qQeYv). Choisir un fichier quelconque et recopier le texte inclus (titre compris) entre les balises ```<body>``` et ```</body>```.
	1. En vous aidant de nos exemples  modifier le code de la page en respectant le cahier des charges suivant :
	
		- **Un titre important**, à l’image d’un titre d’article dans la presse, ou de celui d’un chapitre
		dans un livre. Vous avez le droit de faire preuve d’originalité. ```/3pts```
		- **DEUX paragraphes**, avec dans chacun d’eux un **retour à la ligne**. ```/1pts```
		- **Un titre de niveau 2** ; il s’agit de quelques mots qui séparent les deux paragraphes, qui aèrent la
		lecture, qui relance le lecteur vers la deuxième partie de l’article. C’est à vous de l’inventer ! ```/2pts```
		- **Des caractères** à mettre en gras, d’autres en italique. A vous de déterminer quels mots, ou
		phrases, doivent être mis em évidence. ```/1pts```
		- **deux liens** de votre choix et **une image**, évidemment en rapport avec la biographie que vous avez
		importée. Ces liens illustrent le texte, l’enrichissent d’informations nouvelles, etc. ```/3pts```
		- Modifier la mise en forme ```css``` du document.

 
 
 
## Références
 
[^1]: extrait du module de [**culture numérique**](https://culturenumerique.univ-lille.fr/index.html)  de l'Université de Lille.
[^2]: idée de [Gilles Boudin](http://gillesblb.fr/)