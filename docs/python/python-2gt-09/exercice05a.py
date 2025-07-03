# --- PYODIDE:code --- #
def carre(n):
    for i in range(n):
        print("@"*n)
def triangle(n):
    for i in range(n):
        print("@"*(i+1))
def diagonale(n):
    for i in range(n):
        print(" "*i + "\\")