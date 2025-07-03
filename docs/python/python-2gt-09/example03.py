# --- PYODIDE:code --- #
def nbrdediviseur(nbr) :
    compteur  = 0           # initialiser le compteur avant la boucle
    for i in range(1,nbr+1) :
        if  nbr % i == 0 :  # teste si nbr est divisible par i 
            compteur = compteur + 1
    return compteur