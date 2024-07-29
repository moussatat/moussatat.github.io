# --- PYODIDE:env --- #
from js import document
if "restart" in globals():
    restart()

# --- PYODIDE:code --- #
from turtle import *
speed(10)

def arbre(l=100, n=5):
    forward(l)
    if n > 0:
        left(45)
        arbre(l/2, n-1)
        right(90)
        arbre(l/2, n-1)
        left(45)
    back(l)

arbre(200, 5)
# --- PYODIDE:post --- #
done()
document.getElementById("cible_3").innerHTML = svg()
