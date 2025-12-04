**Module:** [[MTH1002]]
**Sources:** - ![[MTH1002 lecture notes.pdf#height=700]]

---
## 1. Chapter Summary
> This chapter covers the less rigorous definition of the function, focusing more on function properties and attributes of special functions, alongside the limit.

---
## 2. Textbook Notes

![[Definition - Function]]

If $x \in D$ and $y \in R$ are related by the function $f$, then we write $y = f(x)$. Here, $R = f(D)$ is known as the range or image ($R = f(R)$). The *Codomain* is the set of all possible outputs of the function, whilst the *Range* is the set of actual outputs from the function.

The ***Maximal domain*** is the largest subset of $\mathbb{R}$ for which the formula can be evaluated to give a finite value.

![[Definition - Odd and Even functions]]

![[Definition - Periodicity of functions]]

![[Definition - Monotonic increasing and decreasing]]


| Function Operations |                     |                                                    |
| ------------------- | ------------------- | -------------------------------------------------- |
| $(f \pm g)(x)$      | $f(x) \pm g(x)$     | $D(f \pm g) = D(f) \cap D(g)$                      |
| $(fg)(x)$           | $f(x) g(x)$         | $D(fg)(x) = D(f)(x) \cap D(g)(x)$                  |
| $(f / g)(x)$        | $\frac{f(x)}{g(x)}$ | $D(f / g)(x) = D(f) \cap D(g)$ where $g(x) \neq 0$ |

### Composition of functions

Consider the functions $f$ and $g$: $x \mapsto g(x) \mapsto f(g(x))$. Then we can say $(f \circ g)(x) = f(g(x))$, pronounced '$f$ composed with $g$'. $D(f \circ g)(x) : g(x) = D(f)$

### Inverse of function

![[Definition - Inverse Function]]

For MTH1001 and MTH1002, the definitions are essentially the same, however in MTH1002 we relate the definition to the variable $x$ of which is taken as the input, alongside the function mapping: $(g \circ f)(x) = x$ for all $x \in D$ and $(f \circ g)(x) = x$ for all $x \in C$. We can also write the inverse as $f^{-1} = g$.

![[Definition - One-to-One and Onto]]

![[Theorem - Existence of inverse function]]

**Proposition:** Suppose $f$ has the inverse $f^{-1}$, then: $$D(f) = R(f^{-1}) \text{ and } R(f) = D(f^{-1})$$
### Limits

Suppose $f$ is a real valued function defined for $x$ arbitrarily close to $a$.

![[Definition - Limit]]


## 3. Problem Sheet Actions
**Sheet:** [[MTH1001 - Sheet 1]]
- [ ] 