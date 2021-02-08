---
layout: post
title: "Premier billet"
subtitle: "tests des différentes possibilités" 
excerpt: "un petit résumé qui apparait sur la page. "
image: "/assets/img/avatar-icon.png"
show-avatar: true
category: ["blog"]
tags: [blog]
comments: true
social-share: true
googlefonts: ["Share+Tech+Mono"]
---
Ce billet est uniquement pour tester ce qui s'affiche correctement en local, et le comparer avec ce qui s'affiche sur githubpages.

controle de la date ? 
 

# slider


# des titres en couleurs

{% include about.html footer=true readingtime=true %}

{: .box-warning}
**travail à faire**  

{: .box-note} 
**déroulement**    

{: .box-error} 
**erreurs**   

{: .box-success} 
**succès**  
	

## Table of Contents #

|                              |Owner read/write|Signed-in read|Signed-in write|Guest read|Guest write|
|:-----------------------------|:--------------:|:------------:|:-------------:|:--------:|:---------:|
|<span class="text-nowrap"><i class="fa fa-leaf fa-fw"></i> **Freely**</span>               |✔|✔|✔|✔|✔|
|<span class="text-nowrap"><i class="fa fa-pencil fa-fw"></i> **Editable**</span>           |✔|✔|✔|✔|✖|
|<span class="text-nowrap"><i class="fa fa-id-card fa-fw"></i> **Limited**</span>           |✔|✔|✔|✖|✖|
|<span class="text-nowrap"><i class="fa fa-lock fa-fw"></i> **Locked**</span>               |✔|✔|✖|✔|✖|
|<span class="text-nowrap"><i class="fa fa-umbrella fa-fw"></i> **Protected**</span>        |✔|✔|✖|✖|✖|
|<span class="text-nowrap"><i class="fa fa-hand-stop-o fa-fw"></i> **Private**</span>       |✔|✖|✖|✖|✖|

 
Cette séance[^1] a pour objectif de comprendre, à l’aide d’instructions Python, la structure d’une image numérique et le codage des pixels selon leurs composantes rouge, vert, bleu. 

<p><span class="newthought">The Tufte Jekyll theme</span>  is an attempt to create a website design with the look and feel of Edward Tufte’s books and handouts. Tufte’s style is known for its extensive use of sidenotes, tight integration of graphics with text, and well-set typography.<!--more--> The idea for this project is essentially cribbed wholesale from Tufte and R Markdown’s Tufte Handout format<label for="One" class="margin-toggle sidenote-number"></label><input type="checkbox" id="One" class="margin-toggle" /><span class="sidenote">See <a href="https://tufte-latex.github.io/tufte-latex/">tufte-latex.github.io/tufte-latex/</a> and <a href="http://rmarkdown.rstudio.com/tufte_handout_format.html">rmarkdown.rstudio.com/tufte_handout_format</a> </span> This page is an adaptation of the <a href="http://rmarkdown.rstudio.com/examples/tufte-handout.pdf">Tufte Handout PDF</a>.</p>

Test of another side note 
 
<iframe class="extensions extensions--slide" src="/assets/slides/slides.html"
   width="100%"  height="450" frameborder="0" marginwidth="0" marginheight="0" scrolling="yes"
    style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen="true">
</iframe>
Commands :

| Command               |                                              |
|-----------------------|----------------------------------------------|
| ↑, ←, Pg Up, k        | Go to previous slide                         |
| ↓, →, Pg Dn, Space, j | Go to next slide                             |
| Home                  | Go to first slide                            |
| End                   | Go to last slide                             |
| Number + Return       | Go to specific slide                         |
| b / m / f             | Toggle blackout / mirrored / fullscreen mode |
| c                     | Clone slideshow                              |
| p                     | Toggle presenter mode                        |
| t                     | Restart the presentation timer               |
| ?, h                  | Toggle this help                             |


You can look at the bottom right section of the view area, there is a _ToC_ button <i class="fa fa-bars"></i>.
Pressing that button will show you a current _Table of Contents_, and will highlight which section you're at.
ToCs support up to **three header levels**.

## Permalink #
Every header will automatically add a permalink on the right side.
You can hover and click <i class="fa fa-chain"></i> to anchor on it.


## heading 2

 

{: .box-note}
<span style="color: #2980b9;"><i class="fas fa-comment-dots"  aria-hidden="true"></i></span> **NOTE:** un petit commentaire avec une icone de texte à gauche !
 

> This is a block quote 

this is collapsible markdown

<details><summary>CLICK MOI</summary>
<p>
	
**yes, even hidden code blocks!**

</p>
</details>

{: .box-note}
<details><summary>CLICK MOI</summary>
<p>
	
**yes, even hidden code blocks!**

</p>
</details>


<div class="about-container">
    <div class="about-container-header" data-toggle="collapse" data-target="#aboutcontent" title="Display a summary about this page.">
        <p class="about-container-heading about-font-default">
            <i class="fa fa-paperclip about-font-out" aria-hidden="true"></i>
            <span class="about-prompt">
                ~&gt;
            </span>
            <span class="about-font-cmd">
                Get-Help
            </span>
            -Name
            <span class="about-font-string">
                    'About_PageAndPrivacyUpdates'</span>
        </p>
    </div>
    <div class="about-container-content  collapse" id="aboutcontent">
        <p class="about-font-out">
            
                This post reflects the updates based on the GDPR requirements and policy changes.
            
            <span class="blinking-cursor">|</span>
        </p>
	</div>
</div>




un tableau

| Data | Data2 | Data3 | 
| :--: | :-----------: | :-----------:- |
| 1    | 2             |   3       | 


un bos avertissement

{: .box-warning}
<i class="fas fa-bolt icon-yellow" aria-hidden="true"></i> **??**: un texte d'avertissement.

<form action="https://www.dgpad.net/index.php" 
target="dgpad_frame_1589622562939" 
method="post" 
width="100%" 
height="793">
<input 
type="hidden" 
name="file_content" value="Ly8gQ29vcmRpbmF0ZXMgU3lzdGVtIDoKU2V0Q29vcmRzKDQ2MC4xNDAyODM1NjkzMjExLDUyOC43MTYwMjQwNDg0MDc1LDc1LjYwNTcwNzMwMDMwMjkxLGZhbHNlLDgyMCw3OTQpOwoKCi8vIEdlb21ldHJ5IDoKb3g9WF9heGlzKCJveCIpOwpveT1ZX2F4aXMoIm95Iik7CkUxPUV4cHJlc3Npb24oIkUxIiwiIiwiIiwiIiwiLTV4LzcrMyIsIi0zLjMwODQ4NDE0MDk2MjcxNSIsIjUuMTQxMzU4MjExMjg0Nzk5Iik7ClAxPVBvaW50KCJQMSIsLTIwLjAxMjQ5OTk5OTk5OTk5Miw1LjAxMjQ5OTk5OTk5OTk5Myk7CmYxPUN1cnZ1cygiZjEiLCIiLCIiLCJFMSh4KSIpOwpFMj1FeHByZXNzaW9uKCJFMiIsIiIsIiIsIiIsIlswLEUxKDApXSIsIi0zLjMwODQ4NDE0MDk2MjcxNSIsIjQuNjEyMjk3NjIyNzYxNzQ1Iik7ClAyPVBvaW50T24oIlAyIixveSwtMC45Mzc1KTsKRTM9RXhwcmVzc2lvbigiRTMiLCIiLCIiLCIiLCJbNyxFMSg3KV0iLCItMy4zMDg0ODQxNDA5NjI3MTUiLCI0LjA4MzIzNzAzNDIzODY5MSIpOwpBPVBvaW50KCJBIiwiWzAsRTEoMCldIiwiMCIpOwpCPVBvaW50KCJCIiwiWzcsRTEoNyldIiwiMCIpOwoKCi8vIFN0eWxlcyA6ClNUTChFMSwiYzojMzQ3MDI1O3M6NztmOjI0O3A6MjtjTDoyMDA7Y1BUOll6b2pOemd3TURFek8zTTZNVEE3Wmpvek1BPT0iKTsKU1RMKFAxLCJjOiMwMDAwYjI7aDoxO3M6NjtmOjMwIik7ClNUTChmMSwiYzojMDAwMGIyO3M6MjtmOjMwO3A6MDtubWk6dHJ1ZSIpOwpTVEwoRTIsImM6IzEwNTUyNjtzOjc7ZjoyNDtwOjI7Y0w6MjAwO2NQVDpZem9qTnpnd01ERXpPM002TVRBN1pqb3pNQT09Iik7ClNUTChQMiwiYzojMDAwMGIyO2g6MTtzOjY7ZjozMCIpOwpTVEwoRTMsImM6IzMwMGYwYztzOjc7ZjoyNDtwOjI7Y0w6MjAwO2NQVDpZem9qTnpnd01ERXpPM002TVRBN1pqb3pNQT09Iik7ClNUTChBLCJjOiMwMDAwYjI7czo2O3NuOnRydWU7ZjozMDtucDowLjQxNDUwNjg3NDU4NDc4NTk3Iik7ClNUTChCLCJjOiMwMDAwYjI7czo2O3NuOnRydWU7ZjozMCIpOwpTZXRDb29yZHNTdHlsZSgiaXNBeGlzOnRydWU7aXNHcmlkOnRydWU7aXNPeDp0cnVlO2lzT3k6dHJ1ZTtpc0xvY2tPeDpmYWxzZTtpc0xvY2tPeTpmYWxzZTtjZW50ZXJab29tOmZhbHNlO29ubHlQb3NpdGl2ZTpmYWxzZTtjb2xvcjojMTExMTExO2ZvbnRTaXplOjI1O2F4aXNXaWR0aDozO2dyaWRXaWR0aDowLjUiKTsKU2V0R2VuZXJhbFN0eWxlKCJiYWNrZ3JvdW5kLWNvbG9yOiNGOEY4Rjg7ZGVncmVlOnRydWU7ZHJhZ21vdmVhYmxlOnRydWUiKTsK">
<input 
type="hidden" 
name="hide_ctrlpanel" 
value="true">
<iframe 
name="dgpad_frame_1589622562939" 
width="100%" 
height="793" 
src="about:blank" 
scrolling="no" 
frameborder="no" 
oNlOAd="if (!this.parentNode.num) {this.parentNode.submit();this.parentNode.num=true}">
</iframe>
</form>


un petit test
``` python 
from random import *
carte = ["A","R","D","V","10","9","8","7"]
paire = 0
for k in range(1,101):
	score=[]
	for j in range(0,2) :
		tirage=randint(0,7)
		for i in range(0,8):
			if tirage == i :
				score.append(carte[i])
	print(score)
	if score[0] == score[1]:
		print("Tu as une paire")
		paire = paire + 1
print ("tu as eu ",paire," paire(s)")
```

 


ou de manière équivalente 
{%highlight python%}if 
elif 
else 
{%endhighlight%}
mais comment faire pour avoir un span avec le bon formatage ?
<code class="highlight">
if elif  else 
</code>
 

et si veux un contenu en ligne ```python if elif else``` ou  ```if elif else``` 

et un embed de Geogébra

<div id="ggbApplet"></div>

<script>
var parameters = {
"id": "ggbApplet",
"width": 800,
"height":1000,
"showMenuBar":true,
"showAlgebraInput":true,
"showToolBar":true,
"customToolBar":"0 39 | 1 501 67 , 5 19 , 72 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71 | 30 29 54 32 31 33 | 17 26 62 73 , 14 68 | 25 52 60 61 | 40 41 42 , 27 28 35 , 6",
"showToolBarHelp":true,
"showResetIcon":false,
"enableLabelDrags":false,
"enableShiftDragZoom":true,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":false,
"showZoomButtons":true,
"capturingThreshold":3,
// add code here to run when the applet starts
"appletOnLoad":function(api){ /* api.evalCommand('Segment((1,2),(3,4))');*/ },
"showFullscreenButton":true,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"showSuggestionButtons":true,
"buttonRounding":0.7,
"buttonShadows":false,
"language":"fr",
// use this instead of ggbBase64 to load a material from geogebra.org
// "material_id":"RHYH3UQ8",
// use this instead of ggbBase64 to load a .ggb file
// "filename":"myfile.ggb",
"ggbBase64":"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",
};
// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
var views = {'is3D': 0,'AV': 0,'SV': 0,'CV': 0,'EV2': 0,'CP': 0,'PC': 0,'DA': 0,'FI': 0,'macro': 0};
var applet = new GGBApplet(parameters, '5.0', views);
window.onload = function() {applet.inject('ggbApplet')};
applet.setPreviewImage('data:image/gif;base64,R0lGODlhAQABAAAAADs=','https://www.geogebra.org/images/GeoGebra_loading.png','https://www.geogebra.org/images/applet_play.png');
</script>


## Références

[^1]: Sujet original de Dominique Gluck professeur de SI pour la thématique photographie numérique.
