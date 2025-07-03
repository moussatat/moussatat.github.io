# --- PYODIDE:code --- #

import matplotlib.pyplot as plt
fig1 = PyodidePlot('cible_plot_1')
fig2 = PyodidePlot('cible_plot_2')


fig1.target()
xs = range(1,10)
ys = [ x**2 for x in xs ]
plt.plot(xs, ys, 'r-')
plt.title("La fonction carré")
plt.show()

fig2.target()
xs = [ -2 + n*.1 for n in range(41) ]
ys = [ x**3 for x in xs ]
plt.plot(xs, ys, 'r-')
plt.grid()     # Optionnel : pour voir le quadrillage
plt.axhline()  # Optionnel : pour voir l'axe des abscisses
plt.axvline()  # Optionnel : pour voir l'axe des ordonnées
plt.title("La fonction cube")
plt.show()
