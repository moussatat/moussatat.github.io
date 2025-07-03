---
tags:
  - snt/le web
hide :
  - feedback
---
# Les protocoles du Web

 
!!! info "Consignes"  
	- À partir de la page [```Doctools```](https://link.dgpad.net/Rfa6), se connecter à l'aide des codes perso distribués.
	- Utiliser le code ```Rfa6``` pour accéder au document à compléter en ligne. 
	- Vous pouvez travailler par groupes de 2, renseigner votre binôme dans l'espace réservé. 
	- Les groupes de 3 ou plus sont **interdits**.
	- Le travail est sauvegardé au fur et à mesure. Vous pouvez poursuivre en cas de coupure.
	- Vous pouvez travailler sur un document hors-ligne, et renseigner les réponses une fois terminé.  
	
## Rappels

!!! info  "[Les protocoles](https://vimeo.com/138623678) par [L'Université de Lille](https://vimeo.com/universitelille)[^1]"

	<iframe src="https://player.vimeo.com/video/138623678?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

	??? notes "cours (à dérouler)"   
  
		Commençons par un exemple très simple pour comprendre le mécanisme de base. Si à l'aide d'un client web tel que Firefox, je saisis l'adresse : <a href="http://culturenumerique.univ-lille.fr/PageExemple">http://culturenumerique.univ-lille.fr/PageExemple</a>.
		Que se passe -t-il ?

		Mon client interprète ma saisie comme l'interrogation par le protocole http du serveur situé sur la machine culturenumerique.univ-lille.fr pour lui demander la ressource ```/PageExemple```

		Comme nous l'avons vu précédemment, l'adresse IP de ma machine sera nécessaire pour communiquer avec le serveur. Mais mon navigateur va également réunir un certain nombre d'autres informations disponibles sur ma machine (informations que nous verrons plus loin) et les joindre à la requête envoyée au serveur qui héberge la ressource. Le serveur reçoit cette requête, la comprend car elle est formulée selon les règles définies dans ce fameux protocole http , norme utilisée pour que les clients web et les serveurs web puissent communiquer.

		Une part du succès du web repose sur le fait que http est utilisé par TOUS les serveurs web et TOUS les clients WEB, quels qu'ils soient et leur permet donc de dialoguer et de s 'échanger des informations.

		Le serveur fait alors une copie de la ressource demandée et la renvoie au client, celui-ci n'a plus qu'à afficher le contenu de la ressource dans la fenêtre du navigateur.

		Notons qu'une adresse du type : <a href="http://culturenumerique.univ-lille.fr/PageExemple">http://culturenumerique.univ-lille.fr/PageExemple</a>
		s'appelle une URL pour Uniform Resource Locator, c'est-à-dire en français l'adresse d'une ressource. Le mot uniform suggère une convention d'écriture de ces adresses et une uniformisation de l'écriture de ces adresses. Il est important de noter que cette ```URL```  contient à la fois le nom du serveur (la machine ```culturenumerique.univ-lille.fr``` dans notre exemple) qui héberge la ressource ET le nom de la ressource sur ce serveur (ici ```/PageExemple```  ).
 
 
???+ question "Exercice 1 repères historiques"

	En vous aidant par exemple de cette [page](https://www.tiki-toki.com/timeline/entry/137139/Chronologie-du-rseau-internet/#vars!date=1976-02-10_07:58:40!), compléter les repères historiques.
 
 
!!! coeur "Les URL"
	Adresse uniforme de localisation d’une ressource (en anglais Uniform Ressource Locator). Technologie de base du Web qui permet d’identifier une ressource Web sur le réseau Internet.

	Les URL sont un sous-ensemble de la norme Uniform Resource Identifier mise en place par l’IETF d’après des propo-
	sitions de Tim Berners-Lee. 
	
 
???+ question "Exercice 2 : Structure des URL"

	À partir de cette page [:fontawesome-brands-wikipedia-w:ikipedia](https://fr.wikipedia.org/wiki/Uniform_Resource_Locator) rechercher le rôle joué par chaque partie des adresses web suivantes :  
	- ```https://www.youtube.com/watch?v=hpjV962DLWs```  
	- ```https://fr.wikipedia.org/wiki/2021#Janvier```  
	- cette page web  
	
???+ question "Exercice 3 : Images, serveurs et exif"

	Pour l'image ci-dessous, faîtes un clic-droit sur la photo et choisissez afficher l'image, puis répondez ensuite aux questions suivantes :
	1. Quelle est l'url de l'image ?  
	1. Sur quel serveur est-elle stockée ?  
	1. À l'aide de la page [:fontawesome-brands-wikipedia-w:ikipedia](https://fr.wikipedia.org/wiki/M%C3%A9tadonn%C3%A9e), donner la définition d'une métadonnée et citer un exemple. 
	1. Saurez-vous retrouver l'endroit ou a été prise la photo ci-dessous ?

	![Image perso pont](sequenceWeb-photo.jpg)
 
 
 
???+ question "Exercice 4 : Le **Phishing**"

	À l'aide de la  [:fontawesome-brands-wikipedia-w:ikipedia](https://fr.wikipedia.org/wiki/Hame%C3%A7onnage) mais aussi [Internet-signalement](https://www.internet-signalement.gouv.fr/PortailWeb/planets/ConseilsInternet.action), répondre aux questions suivantes :   
	
	1. Quels mots français sont utilisés pour désigner le **Phishing** ?  
	1. Quel est le fonctionnement du phishing ? À l'aide de la page [impots.gouv.fr](https://www.impots.gouv.fr/portail/securite-informatique-soyez-vigilants) décrire 2 exemples récents de fraudes par hameçonnage.  
	1. Citer 3 précautions à adopter afin d'identifier des tentatives de fraudes.  
	1. Expliquer en quoi avoir un navigateur web à jour permet aide à détecter certaines tentatives d'hameçonnage ?  
	1. À quel service de la police nationale signaler des sites frauduleux ?
	1. Faire le [phishing quiz](https://phishingquiz.withgoogle.com/). Donner une adresse mail fictive.
	
 
## Les protocoles HTTP et HTTPS

!!! tip  
	Protocoles de transfert d’hypertexte. Ils définissent les règles que doit suivre un navigateur pour obtenir une page d’un serveur.

	Dans le protocole HTTPS (s pour secure), les communications sont chiffrées. Seul le possesseur de la clé de déchif-
	frement est en mesure de lire les données transmises. 
 
 
???+ question "Exercice 5 : Exemple de requête client vers serveur"

	Dans votre navigateur, appuyer sur la touche ```F12``` pour ouvrir les outils de développements.
	L'onglet ```Réseau``` (ou ```Network```) affiche les requêtes faites par le navigateur et les réponses du serveur lors de votre navigation.

	1. Actualiser la page. Dans l'onglet ```Network```, repérer la requête associée à la ressource web (de type document). 
	1. Compléter l'entête de la requête du client : 
		```
		Request URL :
		Request Method :
		Status Code :
		Remote Address :
		User-Agent:
		Accept :
		```
	1. Une requête HTTP utilise une méthode : c'est une commande qui demande au serveur d'effectuer une certaine action. À l'aide de la page [Wikipédia](https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol#M%C3%A9thodes) préciser ce que font les méthodes suivantes : 
		- ```GET```
		- ```POST```
		- ```PUT```
		- ```DELETE```
	1. Une requête transmet des méta-données. Expliquer le rôle de chaque :  
		- ```Host```
		- ```Referer```
		- ```User Agent```
	1. Compléter l'entête de la réponse :
		```
		HTTP/1.1 
		Content-Type:  
		Server: 
		```
	1. Le Code d'état d'une requête détermine le résultat ou indique une erreur au client. À l'aide de la page [Wikipédia](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP) préciser le sens des codes suivants :
		- 200 
		- 300 
		- 404  
 
???+ question "Exercice : Simuler une requête HTTP  [^1]"
 
	L'application Filius n'est pas installée sur nos machines.
	- Télécharger le fichier [:fontawesome-regular-file:.zip](https://www.lernsoftware-filius.de/downloads/Setup/filius-2.5.1.zip){ .md-button .md-button--primary  }
	- Double-click sur le fichier
	- Dézipper dans le dossier par défaut
	- Lancer l'executable. 
	- Sélectionner la langue adaptée pour éviter de travailler en allemand. 

	!!! tips "indications"
		Afin d'étudier les échanges de données entre un client et un serveur, nous utilisons l'outil ```data exchange```, cet outil fourni énormément d'informations, dans la vidéo ci-dessous nous nous intéressons uniquement aux requêtes ```HTTP``` mais ```data exchange``` propose aussi d'étudier les protocoles IP et TCP.
		
		Regarder la vidéo ci-dessous :
		
		<iframe  width="100%" height="416px" src="https://www.youtube.com/embed/EZp_TLGVyv0?rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		
	À l'aide dusimulateur de réseau Filius : 

	1. Mettez en place un serveur web dans le réseau proposé dans le fichier [snt_sim_http.fls](https://drive.google.com/file/d/1UDFbcn68N6XeIZUBbbDfvsxCkUK65Pih/view) 
	1. Testez ce serveur web en utilisant un navigateur web sur le client de votre choix (M1, M2,...). 
	 
	
## Références
 
[^1]: simulation proposée par [David Roche](https://pixees.fr/informatiquelycee/n_site/snt_web_sim.html)




 