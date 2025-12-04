**Module:** [[MTH1001]]
**Sources:** - ![[MTH1001-2025-26-Notes-Term-1.pdf#height=700]]

---
## 1. Chapter Summary
> This chapter covers the axioms of Vector Spaces, the definition of Subspaces, and the proof that the intersection of subspaces is a subspace.

---
## 2. Textbook Notes

![[Definition - Binary Operation]]

An example of a binary operation is addition $+$ on $\mathbb{N}$. For all $a,b \in \mathbb{N}$, $a + b \in \mathbb{N}$. In fact, addition is a binary operation on $\mathbb{R}$. Essentially, a binary operation takes two elements of the same set, performs some operation, and produces another element of the **same** set.

![[Definition - Commutative]]

Note that addition and multiplication are commutative, but subtraction and division are not. That is to say $a + b = b + a$ and $a \times b = b \times a$, but $a - b$ is not necessarily equal to $b - a$ and $\frac{a}{b}$ is not necessarily equal to $\frac{b}{a}$. For instance, $5 - 3 \neq 3 - 5$. Commutativity is a useful property because it means you can ignore the order of the operation and 'drop the brackets' when using an operation on more than $2$ elements.

For [[Definition - Function composition |function compositions]], $(h \circ (g \circ f))(a) = h((g \circ f)(a)) = h(g(f(a)))$ and $((h \circ g) \circ f)(a) = (h \circ g)(f(a)) = h(g(f(a)))$. Thus, $h \circ (g \circ f)$ and $(h \circ g) \circ f$ define the same function.

![[Definition - Axioms for a group]]

The operation in a group must be *associative*, must possess an *identity* element, and each element has an *inverse*. However, we don't assume that a group operation is *commutative*.

***NOTE:*** A group where the operation is commutative can be referred to as an *Albelian* group.

$\mathbb{N}$ is not a group with addition as there is no identity element, whereas $\mathbb{Z}$ is a group under addition. Note that none of these number systems are groups under multiplication as $0$ has no inverse. To circumvent this, we can simply remove the zero element. For example, define $$Q^{\times} = \{ a \in Q : a \neq 0 \}$$ Then that would make multiplication a binary operation on $Q^ \times$ .

***Proposition:*** Let G be a group with operation $*$. Then
1. G has only one identity element;
2. each $a \in G$ has only one inverse;
3. if $a,b,x \in G$ and $a * x = a * y$ then $x = y$


| systems of notation    |                   |                         |
| ---------------------- | ----------------- | ----------------------- |
|                        | additive notation | multiplicative notation |
| $a * b$                | $a + b$           | $ab$ or $a \times b$    |
| identity               | 0                 | $e$ or $1$ or id or $I$ |
| inverse of a           | $-a$              | $a^{-1}$                |
| $a * a, a* a * a,$ etc | $2a, 3a$ etc      | $a^2, a^3,$ etc         |

### Dihedral groups




---
## 3. Problem Sheet Actions
**Sheet:** [[MTH1001 - Sheet 1]]
- [ ] 