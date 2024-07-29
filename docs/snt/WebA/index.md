---
tags:
  - snt/le web
hide :
  - feedback
---
# Découverte  

 
## Introduction 

??? question "[Site Internet ou site Web ?](http://ressources.numeres.net/id-58)"
	<iframe src="https://www.youtube.com/embed/GqD6AiaRo3U?si=Zdjai0eYTbDqsyLd" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
	
	
Le "World Wide Web", plus communément appelé "Web" a été développé au CERN (Conseil Européen pour la Recherche Nucléaire) par le Britannique Sir **Timothy John Berners-Lee** et le Belge Robert Cailliau au début des années 90. À cette époque les principaux centres de recherche mondiaux étaient déjà connectés les uns aux autres, mais pour faciliter les échanges d'information Tim Berners-Lee met au point le système **hypertexte**. Le système hypertexte permet de relier un document à un autre à l'aide d'un hyperlien cliquable.  
 
!!! info "[Le Web Introduction](https://vimeo.com/138623515) par [L'Université de Lille](https://vimeo.com/universitelille)[^1]"
	<iframe src="https://player.vimeo.com/video/138623515?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

	??? notes "cours (à dérouler)"   
		Le Web est avant tout un service qui permet de s'échanger des ressources. Celles-ci peuvent être très variées et prendre de nombreuses formes. Dans un premier temps, nous considérerons pour simplifier que ce sont uniquement des documents qui contiennent soit du texte soit des images. Le succès du web est sans doute lié à la notion de document hypertexte. C'est à dire la possibilité d'intégrer à l'intérieur d'un document des liens, qui sont des parties de texte cliquables permettant d'accéder à d'autres ressources. Cela a été rendu possible grâce à l'utilisation du fameux langage HTML - Hyper Text Markup Language - inventé par Tim Berners Lee en 1991. L'ensemble des documents ainsi que les liens qui les relient forment alors un réseau de documents. Cette multitude de liens a fait naître l'image bien connue de la toile d'araignée. En anglais : le web.

 

Au début (**la première [page](http://info.cern.ch/hypertext/WWW/TheProject.html) d'internet**), les pages Webs  contenaient  des **liens hypertextes** (souvent soulignés et en bleu) cliquables mais aucune autre interaction.  Le language JavaScript et PHP qui permettent le développement de sites Web interactifs et Dynamiques :
- [Statistiques d'élection](https://www.bloomberg.com/graphics/2018-midterm-election-turnout-shifts/)
- [Transferts de joueurs de foot](https://futbolismo.it/legends-one-club-men-and-journeymen)
- [Courbes de prix du BigMAc](https://bruegel.org/2018/09/big-macs-in-big-countries-an-update-on-euro-area-adjustment)  
 

 
!!! coeur "à reternir"

	Le Web est service d'échange de ressources qui peuvent inclure : des images, des vidéos, des codes exécutables (souvent en JavaScript)... Les documents texte sont écrits en langage **HyperText Markup Language** (HTML). 

	L'échange de ressources via le réseau internet s’appuie sur un **dialogue entre clients et serveurs**. L’interaction est à l’initiative des clients, qui envoient des **requêtes** aux serveurs. Ces derniers renvoient leur résultat : des pages qu’ils ont stockées ou qu’ils créent dynamiquement en fonction de la requête formulée. On parle de protocole **HyperText Transfert Protocol** (HTTP).

	Les pages de ressources web, sont souvent identifiée par leur **Uniform Resource Locator** (URL).
 
 
 
## Le modèle client-serveur

!!! info "présentation des protocoles par [L'Université de Lille](https://vimeo.com/universitelille)[^1]"

	=== "[Le modèle client serveur](https://vimeo.com/138623558)"

		<iframe src="https://player.vimeo.com/video/138623558?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

		??? notes "cours (à dérouler)"    
		
			Le Web, et bien d'autres applications d'internet, fonctionnent selon un modèle très simple : le modèle client/serveur.

			Celui-ci peut s'illustrer par un petit exemple du quotidien. Dans la vie de tous les jours, si je me promène en ville et que j'ai envie d'un café ou d'une boisson rafraîchissante, j'entre dans une brasserie et j'interpelle un serveur. S'engagent alors des échanges, qui suivent un protocole assez convenu dans une langue commune.

			Dès que je lui ai passé ma commande, il s'empresse de me faire savoir qu'il a compris et vient me servir à condition évidemment qu'il ait à sa disposition ce que je lui ai demandé. Si je demande un pneu de vélo ou les œuvres complètes de Karl Marx, ou simplement une marque de bière qu'il ne possède pas, il me répondra gentiment qu'il ne peut pas répondre à ma demande.Dans tous les autres cas, il va s'empresser de me servir et dès qu'il aura fini, il sera à nouveau disponible pour d'autres clients ou une nouvelle demande de ma part. En l'absence de clients, le serveur attend patiemment que quelqu'un l'interpelle.

			Sur Internet, les clients et les serveurs sont toujours des programmes qui s'exécutent sur des ordinateurs. Nous avons décidé de représenter les serveurs par des tours et les clients par des ordinateurs portables afin d'être plus clairs, mais il va de soi que n'importe quel type d'ordinateur peut potentiellement jouer le rôle de client ou de serveur.

			Dans le cadre du web, les clients sont les navigateurs qui nous permettent d'accéder à des sites constitués de ressources hébergées par des serveurs . Ils respectent pour leurs échanges un langage et des règles communes qu'on appelle le protocole http pour hypertext transfer protocol. Chaque ressource fait l'objet d'un échange demande/retour entre le client et le serveur. Certaines demandes n'aboutissent pas, quand la ressource demandée n'existe pas par exemple. Ce sont les fameuses erreurs 404.

	=== "[Le client](https://vimeo.com/138623609)"

		<iframe src="https://player.vimeo.com/video/138623609?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


		??? notes "cours (à dérouler)"    
		
			Le client quant à lui, émet les requêtes vers le serveur et réceptionne les ressources qui sont envoyées en réponse. Les clients que nous utilisons sont les navigateurs web.Ce sont donc des logiciels qui s'exécutent sur nos propres machines sous notre contrôle.

			Il en existe des centaines mais les plus connus du grand public sont Firefox, Chrome, Safari, Opera ou Internet Explorer.

			D'autres clients moins connus sont pourtant les plus actifs sur le web. Il s'agit des programmes robots des moteurs de recherche, sorte de mini navigateurs automatiques.

			Une remarque importante doit être signalée. Le terme naviguer peut prêter à confusion. Si vous nous avez bien entendu, les clients ne se déplacent pas chez le serveur. Ce sont plutôt les ressources qui sont copiées du serveur vers le client à travers le réseau. Cela signifie donc que lorsque vous visitez un site web, le serveur envoie une copie des pages que vous demandez et votre navigateur vous les présente.
 
	=== "[Les protocoles](https://vimeo.com/138623583)"
	
		<iframe src="https://player.vimeo.com/video/138623583?color=b50067&title=0&byline=0&portrait=0" width="100%" height="416px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

		??? notes "cours (à dérouler)"  
   
			Un serveur est un logiciel (un programme) qui s'exécute sur une machine le plus souvent 24/24 et 7/7 et attend qu'un client l'interpelle, par exemple c'est le cas du serveur web www.univ-lille.fr qui distribue les ressources du site de l'université de Lille. Dans ces journaux, de nombreuses informations à propos des clients sont mémorisées : leur adresse IP, des dates de visites, la ressource demandée... Notons que, l'envoi d'une ressource, est en fait l' envoi d'une copie de la ressource, l'original restant disponible pour d'autres requêtes identiques. En plus de ce service de distribution, le serveur garde l' historique de toutes les requêtes qui lui ont été adressées dans des journaux d'activité : les logs en anglais. Ces journaux sont autant de traces que nous laissons et qui peuvent être analysées et exploitées. Son rôle est de distribuer les ressources dont il dispose, c'est-à-dire qui sont stockées sur ses disques, aux clients qui les demandent .
 



{{ multi_qcm(
    [
    """ 
	Dans l’image du web représentée par une toile d’araignée, les fils sont : 
    """,
        [
            """des hyperliens""",
            """des câbles du réseau internet""",
        ],
        [1],
    ], 
	[
    """ 
	Dans l’image du web représentée par une toile d’araignée, les nœuds sont : 
    """,
        [
            """des ressources""",
            """des ordinateurs""",
        ],
        [1],
    ], 
	[
    """ 
	Que s’échangent les ordinateurs sur le Web ?
    """,
        [
            """des ressources""",
            """des images""",
            """des textes""",
        ],
        [1,2,3],
    ],  
	[
    """ 
	Que signifie le code d’erreur 404 dans le protocole HTTP ?
    """,
        [
            """La ressource a été déplacée sur un autre serveur""",
            """La ressource n’existe pas sur le serveur""",
            """Le client ne peut pas communiquer avec le serveur""",
        ],
        [2],
    ], 
	[
    """ 
	Avec quel navigateur peut-on accéder au plus grand nombre de sites ?
    """,
        [
            """Tous sauf Internet Explorer""",
            """Tous sauf Safari""",
            """Tous sauf Firefox""",
            """Tous""",
        ],
        [4],
    ], 
	[
    """ 
	Qu’est-ce qu’un client web ?
    """,
        [
            """Tout logiciel qui demande des ressources à un serveur web""",
            """un navigateur""",
            """un robot de moteur de recherche""",
            """une page HTML""",
        ],
        [1],
    ],  
	[
    """ 
	Qu’est-ce qu’un fichier de logs d’un serveur web ?
    """,
        [
            """la liste des noms des gens qui ont consulté le site hébergé sur le serveur""",
            """un journal des activités du serveur""",
            """la liste de toutes les ressources stockées sur ce serveur""",
        ],
        [2],
    ],  
	[
    """ 
	Par quel protocole les clients et serveurs dialoguent-ils ?
    """,
        [
            """HTML""",
            """HTTP""",
        ],
        [2],
    ],  
	[
    """ 
	Qu’est-ce qu’une URL ?
    """,
        [
            """une ressource""",
            """l’adresse d’une ressource""", 
            """un fichier""", 
        ],
        [2],
    ], 
	[
    """ 
	Quand un serveur a envoyé une image à un client, il doit attendre que ce client l’ait rendue
avant de la distribuer à un autre client.
    """,
        [
            """Vrai""",
            """Faux""",
        ],
        [2],
    ], 
	[
    """ 
	Quelles informations sont indiquées dans une URL ?
    """,
        [
            """le nom du serveur""",
            """le nom d’une ressource""",
            """le protocole utilisé""",
            """si la ressource est une image ou un texte""",
            """l’adresse du client""",
        ],
        [1,2,3],
    ],   
	[
    """ 
	Quelle est la différence entre HTTP et HTTPS ? Grâce à HTTPS :
    """,
        [
            """mes communications avec le serveur sont cachées""",
            """le contenu de mes communications avec le serveur est chiffré""",
            """je peux m’assurer que le serveur est celui auquel je veux m’adresser""", 
        ],
        [2,3],
    ], 
	[
    """ 
	Quelles autres informations que l’URL peuvent être échangées dans un échange entre un client
et un serveur Web ?
    """,
        [
            """l’adresse IP du client""",
            """le nom du navigateur web : firefox, opera, internet explorer, ...""",
            """la page présentée dans le navigateur au moment où la requête est effectuée""", 
            """l’adresse postale du client""", 
        ],
        [1,2,3],
    ], 
	[
    """ 
	Quand on regarde une page web, toutes les informations viennent du même serveur.
    """,
        [
            """oui""",
            """non""", 
        ],
        [2],
    ],         
    multi = True,
    qcm_title = "Je vérifie ma compréhension (bouton en bas pour recommencer)",
    DEBUG = False,
	hide = True,
    shuffle = False
) }}

## Tim Berners-Lee : les débuts, les enjeux du Web 

!!! info "[Tim Berners-Lee : « le Web que nous voulons »](https://www.youtube.com/watch?v=yJktXipM34w) par [Inria](https://www.youtube.com/user/InriaChannel/videos)"
 
	- La création du [World Wide Web](https://fr.wikipedia.org/wiki/World_Wide_Web)  : décentralisation (vers 5'),  [CERN](https://home.cern/fr/science/computing/birth-web/short-history-web)
	- Protocoles libres de droits : Web vs Gopher (vers 10')
	- Les débuts du langage HTML
	- Avenir des langages du Web : déploiement de pages webs sur différentes machines.
	- Défis La censure
 
	<iframe  width="100%" height="416px" src="https://www.youtube.com/embed/yJktXipM34w?rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


 
 
 
## Références 
 
[^1]: élaboré à partir du module de  [**culture numérique**](https://culturenumerique.univ-lille.fr/index.html)  de l'Université de Lille.

 

