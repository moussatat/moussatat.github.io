# --- PYODIDE:env --- #
from js import document
if "restart" in globals():
    restart()

def m_a_j(cible):
    done()
    document.getElementById(cible).innerHTML = Screen().html

_cible = "cible_tortue"

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

# --------- PYODIDE:post --------- #
if Screen().html is None:
    forward(0)
m_a_j(_cible)

# --------- PYODIDE:post_term --------- #
if "m_a_j" in globals():
    m_a_j(_cible)