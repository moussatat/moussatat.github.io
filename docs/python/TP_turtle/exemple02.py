# --- PYODIDE:env --- #
from js import document
if "restart" in globals():
    restart()

# --- PYODIDE:code --- #
from turtle import *
speed(10)

def figure(n,l):     
    penup()
    goto(0,0)
    pendown()   
    for i in range(n) :
        forward(l)
        left(72)

figure(5,100)

# --- PYODIDE:post --- #
done()
document.getElementById("cible_2").innerHTML = svg()