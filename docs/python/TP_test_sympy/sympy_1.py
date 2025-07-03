# --------- PYODIDE:code --------- #
from sympy import *
from sympy.plotting import plot

PyodidePlot("sympy_fig").target()      # disponible après un import de sympy

x = symbols('x')
plot(x**2) 