**Module:** [[MTH1002]]
**Sources:** - ![[MTH1002 lecture notes.pdf#height=700]]

---
## 1. Chapter Summary
> This chapter covers the axioms of Vector Spaces, the definition of Subspaces, and the proof that the intersection of subspaces is a subspace.
---
## 2. Textbook Notes

For this module, we'll work with points $(x,y,z) \in \mathbb{R} ^3$ (3 dimensional space). Note that the coordinates are being written as an ordered pair and not as an open interval.

![[Definition - Length of a vector]]

**NOTE:** this definition can be generalised to vectors in any dimension: $$\vec{v} = (v_1, v_2, \cdots, v_n) \implies |\vec{v}| = \sqrt{\sum_{i = 1}^n (\vec{v}_i ^2)}$$
**Properties of the Norm:**
- $\vec{v} \geq 0$ for all $\vec{v} \in \mathbb{R}^3$
- $|k \vec{v}| = |k||\vec{v}|$ for all $\vec{v} \in \mathbb{R}^3$ and for all $k \in \mathbb{R}$
- If $\vec{v} \neq \vec{0}$, then the unit vector that points in the same direction as $\vec{v}$ is $\frac{\vec{v}}{|\vec{v}|}$
- For all $\vec{u}, \vec{v} \in \mathbb{R}^3,$ $$|\vec{u} + \vec{v}| \leq |\vec{u}| + |\vec{v}|.$$This is known as the *triangle inequality*

### Dot Product

!![[Definition - Dot Product]]

![[Theorem - Dot Product]]

Like with the definition of the [[Definition - Length of a vector |norm]] of a vector, we can extend this definition to higher orders. You could also deduce that the dot product is *commutative*, obeys the *distributive law*, alongside other simple properties.

![[Definition - Orthogonal Coordinate Systems]]

![[Theorem - Dot Product Orthogonal properties]]

![[Definition - Canonical Unit Vectors]]

### Cross Product

![[Definition - Cross Product]]

![[Theorem - Cross Product Orthogonal Properties]]

![[Theorem - Cross Product]]

![[Definition - Scalar Triple Product]]

![[Definition - Vector Triple Product]]

### Lines and Planes

Let $L$ be a line in 3-D space passing through a point $P_0 = (x_0, y_0, z_2)$ parallel to a vector $\vec{v}$. Further let $P = (x,y,z)$ be an arbitrary point on $L$ and let $\vec{r}_0$ and $\vec{r}$ be the position vectors of $P_0$ and $P$ respectively, with respect to the origin, that is $$\vec{r} = x \hat{i} + y \hat{j} + z \hat{k} \ \text{ and } \ \vec{r}_0 = x_0 \hat{i} + y_0 \hat{j} + z_0 \hat{k}.$$
Then $P$ lies on $L$ if and only if $\vec{P_0 P}$ is a scalar multiple of $\vec{v}$. This means that there is a scalar $t$ such that $\vec{r} - \vec{r}_0 = t \vec{v}$. Thus $$\vec{r} = \vec{r}_0 + t \vec{v}, \ \ \ t \in \mathbb{R}.$$
This is often referred to as the *vector equation of the line* $L$, where $t$ is a parameter for the line (like a slider deciding how far along the line you are). We also have the *symmetric representation* of $L$: $$\frac{x - x_0}{v_1} = \frac{y - y_0}{v_2} = \frac{z - \_0}{v_3}.$$

---
## 3. Problem Sheet Actions
**Sheet:** [[MTH1001 - Sheet 1]]
- [ ] 