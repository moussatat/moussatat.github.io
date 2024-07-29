# --- PYODIDE:env --- #
from js import document
if "restart" in globals():
    restart()

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
done()
document.getElementById("cible_1").innerHTML = svg()