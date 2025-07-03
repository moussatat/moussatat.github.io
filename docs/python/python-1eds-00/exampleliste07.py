# --- PYODIDE:code --- #
liste_0 = [1,2,3,4,5,6,7,6,5,4,3,2,1]
print("liste de départ :", liste_0)
liste_double = [ 2*x for x in liste_0 ]
print("liste des doubles :", liste_double)
liste_carres = [ x**2 for x in liste_0 ]
print("liste des carrés :", liste_carres)
liste_partielle = [x for x in liste_0 if x > 2 ]
print("liste partielle :", liste_partielle)
