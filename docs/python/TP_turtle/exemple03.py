# --- PYODIDE:env --- #
from js import document
if "restart" in globals():
    restart()

# --- PYODIDE:code --- #
from turtle import *
speed(10)

def figure():     
    for i in range(1,17) :
        width(i)
        color(255-10*i,10*i,10*i)
        forward(3*i)
        left(30)

figure() 

# --- PYODIDE:post --- #
done()
document.getElementById("cible_3").innerHTML = svg()