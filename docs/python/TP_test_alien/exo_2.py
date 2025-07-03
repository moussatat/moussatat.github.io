# --------- PYODIDE:env --------- #
from alien_python import *
import p5

app2 = App("figure2")

app2.droite(6)
app2.bas(5)
app2.gauche(4)
app2.haut(3)
app2.droite(2)
app2.bas(1)

app2.dessiner_parcours()