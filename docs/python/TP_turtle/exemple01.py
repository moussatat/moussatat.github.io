# --- PYODIDE:env --- #
from js import document
if "restart" in globals():
    restart()

def m_a_j(cible):
    done()
    document.getElementById(cible).innerHTML = Screen().html

_cible = "cible_1"

# --- PYODIDE:code --- #
from turtle import *
speed(10)

def lettreJ():      
    penup()
    goto(0,0)
    pensize(1) 
    pendown()                   # stylo en position ecriture

    setheading(-90)
    circle(50, 180)             # demicercle (180 degres) de rayon 50.
    forward(100)

lettreJ()
# --- PYODIDE:post --- #
if Screen().html is None:
    forward(0)
m_a_j(_cible)

# --------- PYODIDE:post_term --------- #
if "m_a_j" in globals():
    m_a_j(_cible)