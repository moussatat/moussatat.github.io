# --- PYODIDE:env --- #
# Import de matplotlib (installation lors du 1er lancement)
import matplotlib 
# Précision du backend à utiliser
matplotlib.use("module://matplotlib_pyodide.html5_canvas_backend") 
# Insertion de la courbe dans une div spécifié(id="bac_a_sable")
from js import document 
if "restart" in globals():
    restart()
document.pyodideMplTarget = document.getElementById("bac_a_sable") 
# On vide la div
document.getElementById("bac_a_sable").textContent = "" 
# --- PYODIDE:code --- #
import matplotlib.pyplot as plt

# --- PYODIDE:post --- #
done()
document.getElementById("bac_a_sable").innerHTML = svg()