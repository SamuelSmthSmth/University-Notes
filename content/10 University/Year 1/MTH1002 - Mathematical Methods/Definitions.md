# Definitions

### Canonical Unit Vectors
The *standard unit vectors,* also known as the *canonical unit vectors,* are $$\hat{i} = (1,0,0), \ \hat{j} = (0,1,0), \ \hat{k} = (0,0,1).$$
They each have [[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Length of a vector|norm]] 1 and point in the directions of the $x, y$ and $z$-axes respectively.

### Cross Product
Let $\vec{u}, \vec{w} \in \mathbb{R}^3$. The *vector cross product* of $\vec{u}$ with $\vec{w}$ is given by
$$\vec{u} \times \vec{w} = 
\begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
u_1 & u_2 & u_3 \\
w_1 & w_2 & w_3
\end{vmatrix}
= \left( u_2w_3 - u_3w_2, -u_1w_3 + u_3w_1, u_1w_2 - u_2w_1 \right).$$

### Dot Product
Let $\vec{u}$ and $\vec{v}$ be two vectors in $\mathbb{R}^2$ or $\mathbb{R}^3$ with angle $\theta$ between them. The *dot product* (also known as the *scalar product*) of $\vec{u}$ and $\vec{v}$ is $$\vec{u} \cdot \vec{v} = |\vec{u}| |\vec{v}| \cos \theta$$

### Function
A function $f$ from a set $A$ to a set $B$ is a rule which **associates** to every element $a \in A$ one and only one element $f(a)$ is $B$.
We write $f : A \to B$ to indicate that $f$ is a function from $A$ to $B$. The set $A$ is called the *domain* of the function, and $B$ is called it's *codomain*.

### Inverse Function
An *inverse* ([[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Function|function]]) to a function $f : A \to B$ is a function $g : B \to A$: $$g \circ f = id_A \text{ and } f \circ g = id_B$$

### Length of a vector
The length of a vector $\vec{v}$ is often called the *norm, modulus, length or magnitude* of $\vec{v}$. It is denoted $|\vec{v}|$. A vector of norm 1 is called a unit vector.
If $\vec{v} = (v_1, v_2, v_3)$ then $$|\vec{v}| = \sqrt{v_1 ^2 + v_2 ^2 + v_3 ^2}.$$

### Limit
We say $f(x) \to L$ as $x \to a$ if for $\epsilon > 0$, there exists $\delta > 0$, such that for all $x$ satisfying $$0 < |x - a| < \delta$$ we have $$|f(x) - L| < \epsilon$$
We write $\lim_{x \to a} f(x) = L$.

### Monotonic increasing and decreasing
We say $f : D \to R$ is ***monotonic increasing*** if $f(x) \leq f(y)$ for all $x < y$ where $x,y \in D(f)$. $f$ is **strictly monotonic increasing*** if $f(x) < f(y)$ for all $x < y$.
Likewise, $f$ is **monotonic decreasing*** if $f(x) \geq f(y)$ for all $x < y$ and **strictly monotonic increasing*** if $f(x) \geq f(y)$ for all $x < y$.

### Odd and Even functions
Suppose $f$ is defined on a subset of $\mathbb{R}$ which is symmetric about $0$ ($x \in D(f) \implies -x \in D(f)$). If $f(x) = f(-x)$ for all $x \in D(f)$, $f$ is an ***even*** function. If $f(x) = -f(-x)$ for all $x \in D(f)$, $f$ is an **Odd*** function. This can be further defined as: $$O(f)(x) = \frac{f(x) - f(-x)}{2} \ \text{ and } \ E(f)(x) = \frac{f(x) + f(-x)}{2}$$

### One-to-One and Onto
For a given function $f : D \to C$ is ****one-to-one*** if $f(x) = f(y) \implies x = y$ for $x,y \in D$. The function is ***onto*** if for all $y \in C$, there exists some $x \in D$ such that $y = f(x)$.

### Orthogonal Coordinate Systems
When each family of curves / vectors intersect perpendicular to each other, they are considered ***orthogonal***. This is denoted as $$\vec{u} \perp \vec{v}.$$

### Periodicity of functions
A function $f : \mathbb{R} \to \mathbb{R}$ is periodic if there exists some $T > 0$ such that $f(x + T) = f(x)$ for all $x$.

### Scalar Triple Product
Let $\vec{u}, \vec{u}, \vec{w} \in \mathbb{R}^3$. Then the *scalar triple product* of these three vectors (in the given order) is given by $$\vec{u} \cdot (\vec{v} \times \vec{w}).$$

### Vector Triple Product
Let $\vec{u}, \vec{v}, \vec{w} \in \mathbb{R}^3$ . Then the *vector triple product* of these three vectors is given by $$\vec{u} \times (\vec{v} \times \vec{w}).$$