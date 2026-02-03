**Module:** [[MTH1002]]
**Sources:** - ![[MTH1002 lecture notes.pdf#height=700]]

---
## 1. Chapter Summary
> This chapter briefly covers the basis of conic sections, the formulaic differences, and polar coordinates and curves.

---
## 2. Textbook Notes

We will be working off of the general conic section Cartesian form for the majority of this section: $$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$$
**NOTE:** There is also another form of a conic in polar form given by $$r = \frac{l}{1 + e \cos\theta}, \ \text{where } l, e \in \mathbb{R}^{+}$$
The constant $l$ determines the size / scale of the conic. The constant $e$, eccentricity, determines what kind of conic is produced:

|           | Eccentricity table |                 |
| --------- | ------------------ | --------------- |
| ellipse   | $0 \leq e \leq 1$  | $B^2 - 4AC < 0$ |
| parabola  | $e = 1$            | $B^2 - AC = 0$  |
| hyperbola | $e \geq 1$         | $B^2 - 4AC > 0$ |

We can also find general equations for each of the different conics:


| General equations for conics |                                                                                  |                                                 |
| ---------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------- |
| Circle                       | $(x - a)^2 + (x - b)^2 = r^2$ / $x^2 + y^2 - 2(ax + by) + (a^2 + b^2 - r^2) = 0$ | $(x,y) = (a + r\cos \theta, b + r \sin \theta)$ |
| Ellipse                      | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$                                          | $(x,y) = (a \cos \theta, b \sin \theta)$        |
| Parabola                     | $y^2 = 4ax$                                                                      | $(x,y) = (at^2, 2at)$                           |
| Hyperbola                    | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$                                          | $(x,y) = (\pm a \cosh \theta, b \sinh \theta)$  |

### Diretrix, Focus, and Eccentricity

Conic sections can be defined using loci. Consider the line $D \ (\text{diretrix})$, the point $F \ (\text{focus})$, and the *eccentricity*. Given any of these, the set of $P:(x,y)$ such that $$|PF|^2 = e^2 |PN|^2$$ where the point $N$ is the closest point to $P$ on $D$.

### Polar Curves

We can change coordinate systems from Cartesian to polar.

//insert graph her later

To read polar coordinates, we take the angle from the initial line (anticlockwise). The parametric relationship between Cartesian form and polar is given by $(x,y) = (r \cos \theta, r \sin \theta)$. 
**NOTE**: whilst $x = k$ and $y = k$ both produce straight lines, $r = k$ produces a circle and $\theta = k$ produces a ray at the angle $\theta$.

When plotting, if for some $\theta = \theta ^*$ you obtain $r = -r^*$, then instead plot on the ray $\theta = \theta ^* + \pi$ with $r^*$ such that $$(-r^*, \theta ^*) = (r^*, \theta ^* + \pi)$$
![[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Orthogonal Coordinate Systems]]

---
## 3. Problem Sheet Actions
**Sheet:** [[MTH1001 - Sheet 1]]
- [ ] 