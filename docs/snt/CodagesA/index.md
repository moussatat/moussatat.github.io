---
tags:
  - snt/codages
hide :
  - feedback
---
# Codage binaire
 
??? question "Introduction"
  	
	Un petit tour mathémagique [Les sorciers de Salem](https://sorciersdesalem.math.cnrs.fr/Base2/base2.html){ .md-button .md-button--primary  } 
	
	Fonctionnement du codage binaire [par scienceinschool.org](https://www.scienceinschool.org/sis-game/Teacher/card-demo.html){ .md-button .md-button--primary  }
 

!!! abstract "Objectifs" 

	Comprendre le système binaire de représentation des entiers positifs et négatifs. 
 
!!! info "Consignes"
 
	- À partir de la page [```Doctools```](https://link.dgpad.net/r2FF){ .md-button .md-button--primary  } , se connecter à l'aide des codes perso distribués.
	- Utiliser le code ```r2FF``` pour accéder au document à compléter en ligne. 
	- Vous pouvez travailler en bînome, renseigner votre partenaire dans l'espace réservé. 
	- Les groupes de 3 ou plus sont **interdits**.
	- Le travail est sauvegardé au fur et à mesure. Vous pouvez poursuivre en cas de coupure.
	- Vous pouvez travailler sur un document hors-ligne, et renseigner les réponses une fois terminé. 
 
 
 
 
## Le système binaire pour les entiers positifs

En informatique le système binaire est à la base de l'électronique numérique. Dans cette partie nous illustrons l'écriture binaire des nombres entiers positifs.

Dans le système décimal, celui qui nous est familier, nous utilisons dix chiffres, de 0 à 9.  La position des chiffres représente le nombre de puissances de 10.
 
Pour le nombre décimal 70685, le chiffre le plus à droite représente les unités $10^0$, le chiffre situé juste à sa gauche les dizaines $10^1$ puis arrivent les centaines $10^2$, les milliers $10^3$ et ainsi de suite :

$$
70685 = 7\times 10^{4} + 0\times 10^3 + 6 \times 10^2 + 8 \times 10^1 + 5\times 10^0
$$

 

| Puissances de 10 | $10^{7}$ | $10^{6}$ | $10^{5}$ | $10^{4}$ | $10^{3}$	 |	 $10^{2}$  | $10^{1}$   | $10^{0}$  | 
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 				  | 10000000 	 | 1000000 		| 100000 		| 10000	 	| 1000	 		 |	 100  		| 10   			| 1  		 | 
| $70685_{base 10}$  |   |   |   | 7 | 0	 |	 6  | 8 | 5 |  



Dans une numération binaire, seuls 2 chiffres sont utilisés : 0 et 1. Un nombre binaire se présente sous forme particulière, par exemple $1.0.1$  ou $1.1.1.1.0.0.1.1$ (prononcer les chiffres un à un). La position d'un **chiffre binaire** est appelée **bit** ( de l'anglais **BInary digiT** )  et représente une puissance de 2. 

!!! example "Exemple" 

	$$
	\begin{aligned}
	1.0.1_{base 2} & = 1\times 4 + 0\times 2 + 1\times 1=5_{base 10}\\
	1.1.0_{base 2} & = 1\times 4 + 1\times 2 + 0\times 1=6_{base 10}\\
	1.0.1.1.0.0.1_{base 2} & = 64 +16+8+1  =89_{base 10} 
	\end{aligned}
	$$


| Puissances de 2 | $2^{7}$| $2^{6}$| $2^{5}$ | $2^{4}$ | $2^{3}$	 |	 $2^{2}$  | $2^{1}$     | $2^{0}$  | 
| :--:| :--:| :--: | :-----------: |  :-----------: |  :-----------: | :-----------:  |:-----------:  |:-----------: |
| 				  | 128 	 | 64 		| 32 		| 16	 	| 8	 		 |	 4  		| 2   			| 1  		 | 
| $5_{base 10}$   |  |  |  |  |   |  1	 |	 0  | 1 |  
| $6_{base 10}$   |  |  |  |  |   |  1	 |	 1  | 0 |  
| $89_{base 10}$ |  | 1| 0| 1| 1 | 0	 |	 0  | 1 |  

 
???+ question "Exercice 1"  

	Retrouve l'écriture décimale à partir de l'écriture binaire des entiers ci-dessous. Reporte le calcul à effectuer sur ton cahier de brouillon. 
	 
	$$
	\begin{aligned}
	 &11 	&& 1101	&& 10101    && 10001	&& 10110
	\end{aligned}
	$$


???+ question "Exercice 2" 

	Les écritures binaires des entiers $n$ et $m$ sont partiellement connues. On a marqué avec par un $X$ les bits inconnus. Donner toutes les écritures décimales possibles des entiers $n$ et $m$.
	
	 
	| Puissances de 2 | $2^{7}$| $2^{6}$| $2^{5}$ | $2^{4}$ | $2^{3}$	 |	 $2^{2}$  | $2^{1}$     | $2^{0}$  | 
	| :--:| :--:| :--: | :-----------: |  :-----------: |  :-----------: | :-----------:  |:-----------:  |:-----------: |
	| 				  | 128 	 | 64 		| 32 		| 16	 	| 8	 		 |	 4  		| 2   			| 1  		 | 
	| $n$   | 0| 0 | 0 | X | 0  | X	 |	 1  | 0 |  
	| $m$   | 0| X | 0 | 0 | 1  | 0	 |	 1  | X |  
	
	
???+ coeur "Exercice 2" 

	Combien de valeurs différentes peut-on enregistrer sur 8 bits ? sur $n$ bits ?


???+ question "Exercice 4"  

	Complétez les cases marquées par un point d'interrogation et retrouver les écritures binaires des nombres donnés.

	| Puissances de 2 | $2^{7}$| $2^{6}$| $2^{5}$ | $2^{4}$ | $2^{3}$	 |	 $2^{2}$  | $2^{1}$     | $2^{0}$  | 
	| :--:| :--:| :--: | :-----------: |  :-----------: |  :-----------: | :-----------:  |:-----------:  |:-----------: |
	| 				  | 128 	 | 64 		| 32 		| 16	 	| 8	 		 |	 4  		| 2   			| 1  		 | 
	| $82_{base 10}$   | 0| ? | 0 | 1 | 0  | 0	 |	 ?  | 0 | 
	| $145_{base 10}$   | ? | 0 | 0 | 1 | ?  | 0	 |	 0  | 1 |   
	| $226_{base 10}$   | 1 | 1 | ? | 0 | 0  | 0	 |	 1  | ? |  
	| $238_{base 10}$   | ? | 1 | 1 | 0 | 1  | ?	 |	 1  | 0 |  

 
???+ question "Exercice 5"  

	Retrouver les écritures binaires des nombres suivants.

	| Puissances de 2 | $2^{7}$| $2^{6}$| $2^{5}$ | $2^{4}$ |$2^{3}$	 |	 $2^{2}$  | $2^{1}$     | $2^{0}$  | 
	| :--:| :--:| :--: | :-----------: |  :-----------: |  :-----------: | :-----------:  |:-----------:  |:-----------: |
	| 				  | 128 	 | 64 		| 32 		| 16	 	| 8	 		 |	 4  		| 2   			| 1  		 | 
	| $21_{base 10}$   |  |   |   |   |    |  	 |	    |   | 
	| $46_{base 10}$   |  |   |   |   |    |  	 |	    |   |   
	| $55_{base 10}$   |  |   |   |   |    |  	 |	    |   |   
	| $78_{base 10}$   |  |   |   |   |    |  	 |	    |   |  
	| $91_{base 10}$   |  |   |   |   |    |  	 |	    |   |  
	| $149_{base 10}$   |  |   |   |   |    |  	 |	    |   |  
	| $177_{base 10}$   |  |   |   |   |    |  	 |	    |   |  
	| $216_{base 10}$   |  |   |   |   |    |  	 |	    |   |    
   

 
???+ question "Exercice 6"  

	Heureusement, les ordinateurs excellent dans la conversion entre écriture décimale et binaire.  On peut rentrer les nombres entiers directement en écriture binaire, à condition d'utiliser le préfixe ```0b```.
 
	1. Taper dans la console de votre pythonette  ```0b10``` et ```0b1011``` et retrouver les écritures décimales correspondantes.
	
		{{ terminal(FILL='0b10', TERM_H=4) }} 
	
	2. Utiliser l'instruction ```bin(37)``` et ```bin(139)``` pour retrouver l'écriture binaire des nombres entiers $37$ et $139$.
	
		{{ terminal(FILL='bin(37)', TERM_H=4) }} 


!!! coeur "à retenir" 

	Le nombre de bits alloués à un nombre binaire détermine la grandeur de ce nombre.  
	
	- Avec 4 bits, on peut représenter les nombres de ```0b0000``` à
	```0b1111``` (0 à 15 en décimal).   
	- Avec 8 bits (un **octet**, on peut représenter les nombres de ```0b00000000``` à
	```0b11111111``` (0 à 255 en décimal). 
	
	Sur 4 bits, on peut enregistrer   $2^4 = 16$ valeurs différentes.
		
	Sur 8 bits, on peut enregistrer $2^8 = 256$ valeurs possibles.  

	Sur $n$ bits, le plus grand entier que l'on peut enregistrer est $2^n-1$.

	L'écriture binaire nécessite environ $\log_2(10)\approx 3.3219$ fois plus de chiffres que l'écriture décimale. Typiquement, pour des entiers d'écriture décimale à 10 chiffres, l'écriture binaire sera sur 32 bits environ.



???+ question "Exercice 7 : le bug de l'an 2038" 

	À l'aide de la page [:fontawesome-brands-wikipedia-w:ikipedia](https://fr.wikipedia.org/wiki/Bug_de_l%27an_2038){  .md-button--primary  }  répondre aux questions :
	
	- Quel est le plus grand entier signé (positif ou négatif) que l'on peut enregistrer sur 32-bit ? 
	- Convertir le nombre précédent de secondes en années.
	- Quelle date afficheront les systèmes informatiques concernés le 19 janvier 2038 à 3h 14 min 8 s ?
	- Donner quelques systèmes concernés par ce bug.

## Bonus : Le système binaire et les entiers négatifs 

Pour représenter un entier relatif en binaire, on utilisera le bit de poids fort (le bit situé à l'extrême gauche) pour représenter le signe :

- ```0``` pour indiquer un nombre positif
- ```1``` pour les nombres négatifs

Pour un codage sur 4 bit, le bit le plus fort étant réservé au signe, le plus grand nombre que l'on peut coder est $7$.

| Puissances de 2 | $\pm$  |	$2^{2}$  | $2^{1}$     | $2^{0}$  | 
|  :-----------: |  :-----------: | :-----------:  |:-----------:  |:-----------: |
| 					|				| 4  		| 2   			| 1  		 | 
| 	$7_\text{base 10}$	|	 0  		| 1   			| 1  		 | 1  		 |  
| 	$5_\text{base 10}$	|	 0  		| 1   			| 0  		 | 1  		 | 
| 	$0_\text{base 10}$	|	 0  		| 0   			| 0  		 | 0  		 | 

Pour représenter le nombre $-5_\text{base 10}$, la méthode la plus simple serait d'écrire $1101$.

Pour des raisons techniques, on peut aussi utiliser la méthode  du **complément à deux**. Elle permet de s'assurer que la somme de deux nombres opposés est nulle.

!!! example "Exemples de calcul du complément à 2"

	1. Pour coder $-5_\text{base 10}$ sur 4 bits :
	
		- on écrit la valeur absolue de $5$ en binaire sur 4 bits : $0101$ (le bit le plus fort à 0).
		- on écrit le complément à $1$ en inversant tous les bits : $1010$
		- on ajoute $1$ au résultat : $-5_\text{base 10}=1011$

		Notez alors que $0101_\text{base 2} + 1011_\text{base 2}+   = 0000_\text{base 2}$ (avec retenue de $1$ qui est éliminée).

	1. Pour coder $-20_\text{base 10}$ sur 8 bits :
	
		- on écrit  $20$ en binaire sur 8 bits : ```0001 0100``` (le bit le plus fort à 0).
		- on écrit le complément à $1$ en inversant tous les bits : ```1110 1011```
		- on ajoute $1$ au résultat : $-20_\text{base 10}=1110 1100$.
 

???+ question "Exercice bonus"   

	1. Coder sur 8 bit, les nombres entiers négatifs $-1$ et $-56$ avec la méthode du complément à 2.
	1. Que vallent en base 10 les entiers relatifs codés sur 8 bits par la méthode du complément à 2 : ```0110 1100``` et ```1110 1101```

!!! tip "À savoir"

	Acune des écritures $1101$ ou $1011$ est plus légitime pour représenter le nombre $-5$.
	C'est à l'informaticien de décider du sens accordé aux bits. Dans les deux cas :
	
	- le plus grand **entier signé** que l'on peut enregistrer sur 8 bits est $2^7-1=127$
	- le plus grand **entier signé** que l'on peut enregistrer sur $n$ bit est $2^{n-1}-1$

