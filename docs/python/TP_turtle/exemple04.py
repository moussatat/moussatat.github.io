# --- PYODIDE:env --- #
from js import document
if "restart" in globals():
    restart()

# --- PYODIDE:code --- #
from random import *
from turtle import *
speed(10)

def figure():     
    length = 1
    for count in range(20):
        width(randint(2, 10))
        speed(200)
        forward(length)
        right(135)
        left(2) 
        color(randint(0, 255),randint(0, 255),randint(0, 255)) 
        length = length + 15

figure() 

# --- PYODIDE:post --- #
done()
document.getElementById("cible_4").innerHTML = svg()