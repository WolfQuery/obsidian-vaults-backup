---
dg-publish: true
tags:
  - school/mathinscience/q1
  - lecture_notes
title: "Electron Orbitals"
subject: "mathinscience"
type: "lecture notes"
date: "2.9.2025"
quarter: "1"
---
# Electron Orbitals
---
### Schrödinger Equation
$$
{\displaystyle i\hbar {\frac {d}{dt}}|\Psi \rangle ={\hat {H}}|\Psi \rangle}
$$
> [!example] Wikipedia
> The **Schrödinger equation** is a [partial differential equation](https://en.wikipedia.org/wiki/Partial_differential_equation "Partial differential equation") that governs the [wave function](https://en.wikipedia.org/wiki/Wave_function "Wave function") of a non-relativistic quantum-mechanical system. Its discovery was a significant landmark in the development of [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics "Quantum mechanics"). It is named after [Erwin Schrödinger](https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger "Erwin Schrödinger"), an Austrian physicist, who postulated the equation in 1925 and published it in 1926, forming the basis for the work that resulted in his [Nobel Prize in Physics](https://en.wikipedia.org/wiki/Nobel_Prize_in_Physics "Nobel Prize in Physics") in 1933.

## Atomic Models
---
### Bohr model
> [!example] Wikipedia
> The Bohr model of the [hydrogen atom](https://en.wikipedia.org/wiki/Hydrogen_atom "Hydrogen atom") (_Z_ = 1) or a hydrogen-like ion (_Z_ > 1), where the negatively charged [electron](https://en.wikipedia.org/wiki/Electron "Electron") confined to an [atomic sh$\ell$](https://en.wikipedia.org/wiki/Atomic_sh$\ell$ "Atomic sh$\ell$") encircles a small, positively charged [atomic nucleus](https://en.wikipedia.org/wiki/Atomic_nucleus "Atomic nucleus") and where an electron jumps between orbits, is accompanied by an emitted or absorbed amount of [electromagnetic energy](https://en.wikipedia.org/wiki/Electromagnetic_wave "Electromagnetic wave") (_hν_). The orbits in which the electron may travel are shown as grey circles; their radius increases as _n_2, where _n_ is the [principal quantum number](https://en.wikipedia.org/wiki/Principal_quantum_number "Principal quantum number"). The 3 → 2 transition depicted here produces the first line of the [Balmer series](https://en.wikipedia.org/wiki/Balmer_series "Balmer series"), and for hydrogen (_Z_ = 1) it results in a photon of [wavelength](https://en.wikipedia.org/wiki/Wavelength "Wavelength") 656 [nm](https://en.wikipedia.org/wiki/Nanometre "Nanometre") (red light).
---

![[Bohr_atom_model.svg.png|300]]
>The Bohr model of the [hydrogen atom](https://en.wikipedia.org/wiki/Hydrogen_atom "Hydrogen atom") (_Z_ = 1) or a hydrogen-like ion (_Z_ > 1), where the negatively charged [electron](https://en.wikipedia.org/wiki/Electron "Electron") confined to an [atomic sh$\ell$](https://en.wikipedia.org/wiki/Atomic_sh$\ell$ "Atomic sh$\ell$") encircles a small, positively charged [atomic nucleus](https://en.wikipedia.org/wiki/Atomic_nucleus "Atomic nucleus") and where an electron jumps between orbits, is accompanied by an emitted or absorbed amount of [electromagnetic energy](https://en.wikipedia.org/wiki/Electromagnetic_wave "Electromagnetic wave") (_hν_). The orbits in which the electron may travel are shown as grey circles; their radius increases as _n_2, where _n_ is the [principal quantum number](https://en.wikipedia.org/wiki/Principal_quantum_number "Principal quantum number"). The 3 → 2 transition depicted here produces the first line of the [Balmer series](https://en.wikipedia.org/wiki/Balmer_series "Balmer series"), and for hydrogen (_Z_ = 1) it results in a photon of [wavelength](https://en.wikipedia.org/wiki/Wavelength "Wavelength") 656 [nm](https://en.wikipedia.org/wiki/Nanometre "Nanometre") (red light).

---
## Kvantová Čísla
---
> [!example] Wikipedia
> **Kvantová čísla** jsou [čísla](https://cs.wikipedia.org/wiki/%C4%8C%C3%ADslo "Číslo"), kterými se v [kvantové mechanice](https://cs.wikipedia.org/wiki/Kvantov%C3%A1_mechanika "Kvantová mechanika") popisují vlastnosti určitých [částic](https://cs.wikipedia.org/wiki/%C4%8C%C3%A1stice "Částice") v systému; každé číslo odpovídá jedné [zachovávané](https://cs.wikipedia.org/wiki/Z%C3%A1kon_zachov%C3%A1n%C3%AD "Zákon zachování") veličině. Nejčastějším použitím kvantových čísel je popis [elektronů](https://cs.wikipedia.org/wiki/Elektron "Elektron") a jejich [orbitalů](https://cs.wikipedia.org/wiki/Orbital "Orbital") v [atomovém](https://cs.wikipedia.org/wiki/Atom "Atom") obalu, například v [chemii](https://cs.wikipedia.org/wiki/Chemie "Chemie").
>
Kvantové číslo je charakteristikou [kvantového stavu](https://cs.wikipedia.org/wiki/Kvantov%C3%BD_stav "Kvantový stav").

---
## Quantum Numbers
Schrödinger’s approach results in **three quantum numbers** that can be used to define an orbital (wave function), the **principle** ($n$), **azimuthal** ($l$), and **magnetic** ($m_l$) quantum number. There is a fourth quantum number, the **spin** quantum number ($m_s$) and **electrons can reside in orbitals that are defined by these four quantum numbers**. Every electron in an atom must reside in an orbital that contains a unique set of quantum numbers.[^1]

### Principal quantum number ($n$)
*Hlavní kvantové číslo*[^2]

The **principal quantum number** (n) tells the average relative distance of an electron from the nucleus:
$$
n = 1,2,3,4,\dots
$$
**<mark style="background: #FFB8EBA6;">As *n* increases for a given atom, so does the average distance of an electron from the nucleus.</mark>** A negatively charged electron that is, on average, closer to the positively charged nucleus is attracted to the nucleus more strongly than an electron that is farther out in space. This means that electrons with higher values of _n_ are easier to remove from an atom. *All wave functions that have the same value of n are said to constitute a principal shell because those electrons have similar average distances from the nucleus. As you will see, the principal quantum number n corresponds to the n used by Bohr to describe electron orbits and by Rydberg to describe atomic energy levels. As we will see, these can also be related to the periods of the periodic table.*[^1]


### Azimuthal Quantum Number ($\ell$)
*Vedlejší kvantové číslo*[^2]

The second quantum number is often called the **azimuthal quantum number ($\ell$)**. The value of *$\ell$* describes the _shape_ of the region of space occupied by the electron. If you look at the standing waves in [section 6.4.3.2](https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_\(Belford\)/Text/6%3A_The_Structure_of_Atoms/6.4%3A_Wave-Particle_Duality#Standing_Waves "https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_(Belford)/Text/6%3A_The_Structure_of_Atoms/6.4%3A_Wave-Particle_Duality#Standing_Waves") <mark style="background: #FFB8EBA6;">the value of $\ell$ can be related to the number of nodes and so the first standing wave ($n=1$) has $\ell=0$ (there is no node).</mark> The allowed values of _$\ell$_ depend on the value of *$n$* and can range from 0 to _$n − 1$_:[^1]
$$
l = 0, 1, 2,\dots,n-1
$$
**For example, if _n_ = 1, $\ell$ can be only 0; if _n_ = 2, $\ell$ can be 0 or 1; if n = 3, $\ell$ can be 0,1, or 2; and so forth. For a given atom, all wave functions that have the same values of both _n_ and $\ell$ form a sub-shell.** The regions of space occupied by electrons in the same sub-shell usually have the same shape, but they are oriented differently in space.[^1]

<mark style="background: #FF5582A6;">In naming orbitals we often denote the azimuthal number with a symbol. $\ell=0$ is an s orbital, $\ell= 1$ is a p orbital, $\ell=2$ is a d orbital and $\ell=3$ is an f orbital</mark>. [^1]

### Magnetic Quantum Number ($m_\ell$)
*Magnetické Kvantové číslo*[^2]

The third quantum number is the magnetic quantum number ($m_\ell$). The value of $m_\ell$ describes the _orientation_ of the region in space occupied by an electron with respect to an applied magnetic field.[^1]

>[!warning]
> **For each value of $n$, there are $2\ell + 1$ values of $m_\ell$**

<mark style="background: #FFB8EBA6;">The allowed values of $m_\ell$ depend on the value of $\ell$: $m_\ell$ can range from $-\ell$ to $\ell$ in integral steps:</mark>
$$
m_\ell = -\ell, -\ell+1,\dots,0,\dots,\ell-1,\ell
$$
<mark style="background: #FF5582A6;">For example, if $\ell=0$, $m_\ell$ can be only $0$; if $\ell = 1$, $m_\ell$ can be $−1, 0,\text{ or } +1$; and if $\ell = 2$, $m_\ell$ can be $−2, −1, 0, +1,\text{ or }+2$.</mark>

*Each wavefunction with an allowed combination of $n$, $\ell$, and $m_\ell$ values describes an atomic orbital, a particular spatial distribution for an electron. For a given set of quantum numbers, each principal shell has a fixed number of subshells, and each subshell has a fixed number of orbitals.*[^1]

### Spin Quantum Number ($s$)
*Spinové Kvantové Číslo*[^2]

There is a fourth quantum number, which is the electron spin quantum number. **The above three quantum numbers come from the solutions of the Schrödinger wave equation and describe the distance from the nucleus, the shape and orientation of the electronic orbitals that can exist for a hydrogen like atom.** But<mark style="background: #FFB8EBA6;"> there are actually two orbitals within each of these orbitals, and these result from the intrinsic spin of an electrons, which produces an intrinsic magnetic field</mark>. [^3]

*It should be noted that in 1928 Paul Dirac developed a relativistic wave equation, the Dirac Equation, that was consistent with both quantum mechanics and the theory of special relativity, and <mark style="background: #FFB86CA6;">not only accounted for all four quantum numbers, but even introduced the concept of antimatter</mark>.* [^3]

## Naming Orbitals
*The first three quantum numbers define the geometric shapes of the orbitals and can be used to name them*. <mark style="background: #FFB8EBA6;">The convention is to first indicate the principle quantum number (n), followed by a letter designating the azimuthal quantum number and then using a subscript to indicate the magnetic quantum number</mark>. **The magnetic quantum number is often not specified**. Note, the ml value may be the true values (-3,-2,-1,0,+1,+2,+3), or as we will see in the next section, expressions within the x,y,z Cartesian coordinate system.[^3]

![[clipboard_eae1200552c2eda9beb00c54fc1c7c041.png|300]]
$$
\begin{align}
s: l=0  \\
p: l=1  \\
d: l=2  \\
f: l=3  \\
\end{align}
$$

### Number of each orbital
<mark style="background: #FFB8EBA6;">For each shell there are n orbitals</mark>. The following table shows the allowed orbitals for ground state configurations, <mark style="background: #FF5582A6;">for each shell (principle quantum number) you add an azimuthal orbital (the allowed values of l for each n are 0 to n-1), where l=0 is an s orbital, l=1 is a p, l=2 is a d....)</mark>[^3]
$$
\begin{align}
\begin{array}{c|c}
1s \\ \hline
2s & 2p \\ \hline
3s & 3p & 3d \\ \hline
4s & 4p & 4d & 4f  \\ \hline
5s & 5p & 5d & 5f & \color{orange}{5g} \\ \hline
6s & 6p & 6d & 6f & \color{orange}{6g} & \color{orange}{6h} \\ \hline
7s & 7p & \color{orange}{7d} & \color{orange}{7f} & \color{orange}{7g} & \color{orange}{7h} & \color{orange}{7i}
\end{array}
\end{align}
$$

As we shall see in the next [Chapter](https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_%28Belford%29/Text/6%3A_The_Structure_of_Atoms/6.6%3A_The_Shapes_of_Atomic_Orbitals), <mark style="background: #FFB8EBA6;">the structure of the periodic table is based on the filling of the orbitals in their lowest energy state</mark>, and the orbitals in <mark style="background: #FFB86CA6;">orange (5g, 6g,6h,... are of such high energy that electrons do not occupy them if the electron is in a ground state configuration</mark>.[^3]

Now <mark style="background: #FFB8EBA6;">because the are $2\ell+1$ magnetic quantum numbers for each $n$, there are $n2$ potential orbitals</mark> for each principle quantum number.

*n= 1 as one s orbital = (1 total)*  
*n=2 has one s and three p (4 total)*  
*n=3 has one s, three p and 5 d (9 total)*  
*n=4 has one s, three p, 5 d and 7 f (16 total)*

---
$$
\begin{array}{c|c|c|c|c|c}
\color{orange}{n} & \color{orange}{\ell} & \color{orange}{\text{Sub-shell}} & \color{orange}{m_\ell} & \color{orange}{\text{Orbitals in sub-shell}} & \color{orange}{\text{Orbitals in shell}} \\ \hline
1 & 0 & 1s & 0 & 1 & 1 \\ \hline
\\ \hline
2 & 0 & 2s & 0 & 1& 4 \\ \hline
2 & 1 & 2p & -1,0,1 & 3 & 4 \\ \hline
\\ \hline
3 & 0 & 3s & 0 & 1 & 9 \\ \hline
3 & 1 & 3p & -1,0,1 & 3 & 9 \\ \hline
3 & 2 & 3d & -2,-1,0,1,2 & 5 & 9 \\ \hline
\\ \hline
4 & 0 & 4s & 0 & 1 & 16 \\ \hline
4 & 1 & 4p & -1,0,1 & 3 & 16 \\ \hline
4 & 2 & 4d & -2,-1,0,1,2 & 5 & 16 \\ \hline
4 & 3 & 4f & -3,-2,-1,0,1,2,3 & 7 & 16 \\ \hline
\end{array}
$$
## The Shape of Atomic Orbitals
*In the previous section we learned that electrons have wave/particle duality, exist in orbitals that are defined by the Schrödinger wave equation that involves the complex coordinate system and imaginary numbers, and that they can be defined by quantum numbers n, l and ml.* <mark style="background: #FF5582A6;">We use the Greek symbol psi ($\psi$) to represent a wave function. </mark>**In this section we will look at the shapes of orbitals that have been transformed to the real coordinates of the x,y,z Cartesian coordinate system. The math of this transform is beyond the scope of this class, but for example, the $\psi P_{+1}$ and the $\psi P_{−1}$ orbitals can be combined in two ways that produce two new orbitals with real coordinates of the Cartesian coordinate system (the imaginary components of the wave functions cancel)** the $\psi_{P_x}$ and $\psi_{P_y}$ orbitals. Since the original $\psi_{P_{+1}}$ and $\psi_{P_{-1}}$ were both solutions of the Schrödinger wave equation, their combinations are also solutions, and so we can visualize atomic orbitals as shapes along the **x,y,z axes.** All three quantum numbers influence the ultimate shape. The probability of finding an electron is $\psi^2$ and in the following representations we are implicitly defining the orbitals as the square of the wave-function. 
$$
1s\equiv\psi^{2}_1s\text{ and } 2p_x \equiv \psi^{2}_{2p_x} \text{ and } 3d_{xy} \equiv \psi^2_{3d_{xy}}\dots
$$
<mark style="background: #FFB8EBA6;">So when we say $1s$ or $3d_{xz}$ we are orbital in terms of its location in space, and the images in Figure 6.6.1 represents the shapes of some common orbitals where there is roughly a 90% probability of finding the electron that resides in that orbital.</mark>[^4]
![[CNX_Chem_06_03_Oshapes.jpg|500]]
***Figure 6.6.1**: Select Cartesian coordinate visualizations of orbitals expressed in real space.*

Note in Figure 6.6.1 that <mark style="background: #FF5582A6;">there is one type of s orbital $(l=0)$, three types of $p (l=1)$, 5 types of $d (l=2)$ and 7 types of $d (l=3)$. These are not the orbitals described the the magnetic quantum numbers, but combinations of them that result in the x,y,z Cartesian coordinate system.</mark>It should also be indicated that these represent the geometry for the first principle quantum number where an azimuthal quantum number occurs, so for example, this is the s orbital of the first shell, the p orbital of the second shell, d orbital of the third shell and the f orbital of the fourth shell.

### s-orbitals
<mark style="background: #FFB8EBA6;">*For l=0 the electron density function is spherically symmetric and the 1s orbital has no nodes. Figure 6.6.2 shows the square of the wavefunction.*</mark>
![[s-orb_shells.png|400]]
***Figure 6.6.2:** the radial distribution functions for the s orbitals of the first three principle quantum shells. This graph represents $\psi^2_{ns}$ for n=1,2 and 3 respectively.*

<mark style="background: #FF5582A6;">As the principle quantum number ($n$) increases both radial nodes occur and the average distance from the nucleus increases.</mark> *The "onion skin" analogy has often been used to describe this where the flesh of the onion represents the probability of an electron exisiting (realize the greater r, the greater the surface area), and the nodes are the empty spaces between the layers of the onion.* <mark style="background: #FFB8EBA6;">Of interest is that the higher principle quantum number has the peak of its inner peak closer to the nucleus (the first peak in the $\psi^2_{3s}$ is at a shorter radius than for the $\psi_{2s}$ or $\psi_{1s}$.</mark>

### p-orbitals
*For the $n=2$ shell and greater there are three p orbitals.* In **the Cartesian coordinate the $p_z$ correlates to the $m_\ell=0$ and the $p_x$ and $p_y$ are mathematical combinations of the $m_\ell = +1 \text{ and } m_\ell = -1$.** (<mark style="background: #FF5582A6;">Note, the terms $p_x$, $p_y$ and $p_z$ actually relate to the wavefunctions squared, as indicated above.)</mark> For $n=2$ there is one node, in fact it is a nodal plane. If you look at the name, you can see that these are radially symmetric along one axis, which is the axis of the name, and the nodal plane is defined by the other two axes where they go through the origin. [^4]

![[0c20bd61007a2b2733732eb1b1b27033.jpg|650]]
![[clipboard_eb0a5158e88f1896dba3e3a40c20347ef.png|350]]
***Figure 6.6.3:** 2 p orbitals along the x, y and z axes (left) and a 3 p orbital (right).*

**Just as for s orbitals, as you move to higher principle quantum numbers the number of nodal surfaces increases,** <mark style="background: #FFB8EBA6;">but they are no longer simple planar surfaces</mark> (see **Figure 6.6.3**). [^4]



[^1]: https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_(Belford)/Text/6%3A_The_Structure_of_Atoms/6.5%3A_The_Modern_View_of_Electronic_Structure#Quantum_Numbers

[^2]:https://cs.wikipedia.org/wiki/Kvantov%C3%A9_%C4%8D%C3%ADslo#Elektron_v_atomu

[^3]: https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_(Belford)/Text/6%3A_The_Structure_of_Atoms/6.5%3A_The_Modern_View_of_Electronic_Structure#Naming_Orbitals

[^4]: https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_%28Belford%29/Text/6%3A_The_Structure_of_Atoms/6.6%3A_The_Shapes_of_Atomic_Orbitals
