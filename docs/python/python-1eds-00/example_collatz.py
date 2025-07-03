# --- PYODIDE:env --- #
# Import de matplotlib (installation lors du 1er lancement)
import matplotlib 
# Précision du backend à utiliser
matplotlib.use("module://matplotlib_pyodide.html5_canvas_backend") 
# Insertion de la courbe dans une div spécifié(id="example_orbite")
from js import document 
document.pyodideMplTarget = document.getElementById("exemple_orbite") 
# On vide la div
document.getElementById("exemple_orbite").textContent = "" 
# --- PYODIDE:code --- #
import matplotlib.pyplot as plt

def terme_suivant(un):
    if un % 2 == 0:
        return un // 2
    else:
        return 3*un + 1
        
def orbite(u0) :
    u = [u0]
    while u[-1] != 1 :
        u.append( terme_suivant( u[-1] ) )
    return u
    
def tracer_orbite(u0):  
    u = orbite(u0)
    plt.plot(range(len(u)), u, 'bx' )
    plt.ylim(0,max(u))
    plt.grid()
    plt.show() 

fig2 = PyodidePlot('exemple_orbite')
fig2.target()
print(orbite(15))
tracer_orbite(15)
plt.show()