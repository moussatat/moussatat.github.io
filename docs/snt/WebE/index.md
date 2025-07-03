---
tags:
  - snt/le web
hide :
  - feedback
---
# Les cookies et données personnelles
 

!!! info "Consignes"  
	- À partir de la page [```Doctools```](https://link.dgpad.net/mhto), se connecter à l'aide des codes perso distribués.
	- Utiliser le code ```mhto``` pour accéder au document à compléter en ligne. 
	- Vous pouvez travailler en bînome ou trînomes, renseigner votre partenaire dans l'espace réservé.   
 
!!! info  "[Les cookies](https://vimeo.com/138623890) par [L'Université de Lille](https://vimeo.com/universitelille)[^1]"
	<iframe src="https://player.vimeo.com/video/138623890?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

	??? notes "cours (à dérouler)"  
		#### Les cookies, une technique très utile... 
		Rappelons la conclusion importante du chapitre précédent.

		Une page web telle que nous la voyons dans notre navigateur, notre client, est en fait la composition de plusieurs ressources. Chacune d'elles fait l'objet d'une requête de la part de notre client vers un serveur. Plusieurs serveurs peuvent être sollicités pour obtenir l'ensemble des ressources présentes dans une page web unique. Mais le web est finalement un peu plus que la consultation de quelques ressources et pages web.

		Aujourd'hui c'est un moyen pour réaliser de nombreuses démarches administratives, ou pour faire des achats, ou pour échanger sur des réseaux sociaux. Ce sont des services aux usagers du web qui nécessitent pour les mettre en place, un grand nombre d'échanges de pages web, dans un ordre bien précis, avec des contenusspécifiques à chaque fois.

		Prenons l'exemple de l'inscription à l'université. Dans un schéma très simplifié, vous devez tour à tour recevoir :
		- étape 1 : la page qui permet de lire la marche à suivre
		- étape 2 : la page qui permet d'indiquer à quelle formation vous vous inscrivez
		- étape 3 : la page qui permet de payer votre inscription
		- étape 4 : la page qui comprend un accusé de réception du paiement.
		Ces étapes peuvent être abandonnées, recommencées... et le serveur de l'université qui prend en charge les inscriptions répond en même temps à toutes les demandes, quelles que soient les étapes et les étudiants. Il est donc nécessaire pour chacun des clients utilisés par les (futurs) étudiants, de communiquer à quelle étape ils sont arrivés.

		Les cookies sont exactement conçus pour cela. Un cookie contient une donnée qui sera enregistrée par le client sur la machine du client à la demande du serveur. Dans notre exemple, le cookie pourrait contenir un nombre entre 1 et 4 pour signifier la dernière étape effectuée. Le cookie sera renvoyé aux prochaines requêtes du client vers ce même serveur.

		Une autre image est celle d'une carte de fidélité de magasin, que nous avons dans notre poche et que nous montrons à notre commerçant lors de nos visites.Le cookie est la carte de fidélité et la donnée associée au cookie est notre numéro de client.

		#### Les cookies tiers
		Parfois certains services proposés par un site sont délocalisés. C'est-à-dire qu'une partie des ressources d'une page sont en fait hébergées sur un autre serveur, un serveur tiers.

		Ce peut être le cas par exemple, d'un serveur qui "compte" les points d'un joueur et se souvient entre 2 parties de son score. Ce type de service peut être utilisé par de nombreux sites de jeux, qui utilisent tous le même serveur partenaire. Ce qui leur évite de développer eux-mêmes le service.Celui-ci peut aussi utiliser des cookies.

		Ce qui signifie qu'un serveur tiers, qui n'est pas celui qui héberge le site principal dont l'adresse est indiquée dans la barre d'URL, stocke des cookies sur notre machine. Son adresse n'est pas visible et le dépôt du cookie se fait donc à l'insu de l'utilisateur.Dans ce cas, on parle de cookie tiers.

		#### Utilisation des cookies
		On voit bien que les techniques qui se sont développées et qui continuent d'évoluer sur le Web sont puissantes et nous rendent beaucoup de services. En revanche, leur utilisation dans certains cas peut poser de graves questions de citoyenneté. Bien souvent, la donnée associée au cookie est un numéro d'identification permettant au serveur de retrouver dans ses bases des données propres à l'utilisateur. Dans notre exemple de démarche d'inscription, ce pourrait être, l'étape à laquelle il est arrivé, son nom, ses choix de formation... Il est très important de comprendre qu'un tel numéro d'identification est un moyen très commun utilisé sur le web aussi bien que dans la vie non numérique.

		C'est la technique utilisée par la sécurité sociale (avec le numéro de sécurité sociale), pour vous suivre toute notre vie dans nos démarches de couverture sociale.

		C'est aussi ce qui se cache derrière les cartes d'achat ou promotionnelles des magasins, proposées avant tout pour nous suivre et assurer du marketing direct.

		Donc bien des numéros nous identifient.

		Mais dès lors que ces numéros d'identification sont rapprochés ou unifiés, la technique devient si puissante qu'on l'estime menaçante pour nos libertés.

		Si bien que par exemple, le parlement a dû légiférer il y a plus de 30 ans pour empêcher ou limiter l'usage du numéro de sécurité sociale dans les autres administrations de l'état. Naturellement, avec l'avènement du numérique ce rapprochement de numéros d'identification devient très facile techniquement. Il convient de redoubler de vigilance...
 

 
???+ question "Exercice 1 Rôle des cookies"

	Ouvrir un navigateur navigateur, et appuyer sur la touche F12,  aller dans l'onglet **Application** puis sélectionner le menu **Cookies**.
	Cet onglet affiche l'ensemble des cookies enregistrés sur la machine lors de la visite d'une page web.

	Visiter le site [www.lemonde.fr](https://www.lemonde.fr/) et relever les **cookies tiers** chargées par le navigateur et leur domaine d'origine.  


 
???+ question "Exercice 2 Visualisation de cookies"

	La cnil développe un [outil de visualisation](https://github.com/LINCnil/CookieViz/releases/tag/2.0) pour mesurer l'impact des cookies et autres traqueurs lors de votre propre navigation.
	
	1. Télécharger le fichier ```CookieViz.2.0.0.win.x64.zip```, extraire l'archive et lancer l'executable ```CookieViz.exe```.
	1. Choisissez la langue, et ouvrir le visualiseur (icone <i class="fas fa-eye"></i> en haut). 
	1. Visiter le site [www.lemonde.fr](https://www.lemonde.fr/) depuis l'application ```CookieViz```. Accepter les cookies. Patienter une minute en naviguant sur différentes pages du sites.

		Vous devez observer un graphe similaire au graphe ci-dessous. **Les liens rouges indiquent une transmission d'information par les cookies à des sites tiers**.
		![le monde](https://i.imgur.com/MEMRgmb.png) 
	1. Faire de même avec [www.fnac.com](https://www.fnac.com/). N'oubliez pas d'accepter les cookies. 
		Le graphe doit se peupler de sites supplémentaires
		![fnac et lemonde](https://i.imgur.com/sPkdQkr.png)  
	1. Identifier quelques sites qui ont recueilli des informations grâce aux cookies de la page de lemonde et de celle de la fnac.
	1. À l'aide du bouton ```Usage des cookies``` préciser l'objet de cette collecte.
	1. Quelles implications (bénéfiques ou non) de l'usage des cookies par les sites ? 


???+ question "Exercice 3 Paramètres de sécurité d'un navigateur" 
	En Europe il y a 5 navigateurs principaux : Microsoft Edge, Firefox, Google Chrome, Safari, Opera.
	
	1. Trouver le chemin pour supprimer les cookies des navigateurs Firefox et Edge en détaillant les différences dans la procédure. 
	1. Que permet la **Navigation privée** (incognito mode) ? 
	1. En activant la navigation privée, quels cookies ne sont plus chargés lors de la visite du site [www.lemonde.fr](https://www.lemonde.fr/) ? 
	1. Quelle trace de nos activités internet reste visible malgré la navigation privée et la suppression de cookies ?   
  


???+ question "Exercice 4 RGPD et traceurs"
	
En 2018, une nouvelle directive européenne est entrée en vigueur : le RGPD - Règlement Général sur la Protection des Données. 
Elle encadre le traitement des données personnelles sur le territoire de l'Union européenne. Visiter la page  [cnil et traceurs](https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi) et répondre aux questions suivantes :
1. Le consentement des personnes doit-il être systématiquement recueilli ? Sinon, dans quels cas est il obligatoire ?
1. La RGPD contraint les annonceurs à ne pas recouper les données collectées avec d’autres traitements. Pouvez vous préciser les craintes du législateur d'une telle pratique ?} 
 

## Conclusion 

<iframe  width="100%" height="416px" src="https://www.youtube.com/embed/OFRjZtYs3wY?rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
  