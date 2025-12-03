**Module:** [[MTH1001 - Mathematical Structures]]
**Sources:** - ![[MTH1001-2025-26-Notes-Term-1.pdf#height=700]]

---
## 1. Chapter Summary
> This section covers the formal definition of functions involving domains and codomains , the concepts of injectivity and surjectivity , the theorem that a function has an inverse if and only if it is a bijection , and the study of permutations using cycle notation.

---
## 2. Textbook Notes

![[Definition - Function]]

A function can generally be written and defined: $$f : A \to B, \text{ given by } f(x) \text{ for all } x = C$$
![[Definition - Equality of functions]]

### Surjective and injective functions

![[Definition - Surjectivity, Injectivity, and Bijectivity]]

### The "Algebra" of functions

One way to create new functions is to *compose* two or more existing functions.

![[Definition - Function composition]]

**Proposition:** Suppose we have the functions $h : A \to B$, $g : B \to C$, $f : C \to D$. Then, $$(f \circ g) \circ h : A \to D \text{ is the same as } f \circ (g \circ h) : A \to D$$
![[Definition - Identity Function]]

![[Definition - Inverse Function]]

![[Theorem - Conditions for inverse of a function]]

![[Definition - Left and Right Inverse]]

## Permutations

![[Definition - Permutation]]

### Properties of permutations

- If $\sigma$, $\tau$ are permutation on $X$, then so is $\sigma \circ \tau$.
- For any permutation $\sigma$, $\tau$, $\pi$ on $X$, the permutation $(\sigma \circ \tau) \circ \pi$ and $\sigma \circ (\tau \circ \pi)$ are equal.
- The identity function $id_X : X \to X$ is a permutation on $X$.
- Each permutation $\sigma$ on $X$ has an inverse function $\sigma ^{-1} : X \to X$ so that $\sigma \circ \circ ^{-1} = id_X$ and $\sigma ^{-1} \circ \sigma = id_X$. The function $\sigma ^{-1}$ is itself a permutation.

![[Definition - Set of all permutations]]

| Examples of permutations         |     |     |     |
| -------------------------------- | --- | --- | --- |
| $i$                              | 1   | 2   | 3   |
| $\sigma (i)$                     | 2   | 3   | 1   |
| $\tau (i)$                       | 1   | 3   | 2   |
| $id_A (i)$                       | 1   | 2   | 3   |
| $\alpha (i)$ (not a permutation) | 2   | 1   | 2   |

**Lemma:** $S_n = n!$. THat is to say there are exactly $n!$ permutations on $\{ 1, 2, \dots , n \}$

### Cycle Notation

We can write out a cycle using an algorithm:

1. *Let* $a_0$ = chosen term
2. *While* ($a_0$ is not equal to a):
	1. cycle.append($a_i$)
	2. $a_i = \pi (a_i)$


| Example permutation |     |     |     |     |     |     |     |     |
| ------------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| $i$                 | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
| $\pi (i)$           | 3   | 4   | 6   | 1   | 8   | 2   | 7   | 5   |

$\pi (1) = 3$, $\pi (3) = 6$, $\pi (6) = 2$, $\pi (2) = 4$, $\pi (4) = 1$
$\therefore$ starting from 1, it has a cycle $(1 \ 3 \ 6 \ 2 \ 4)$

For $1$, we get $(1 \ 3 \ 6 \ 2 \ 4)$, $2$ gives us $(2 \ 8)$, and $7$ gives us $(7)$.
$\therefore$ $\pi = (1 \ 3 \ 6 \ 2 \ 4)(2 \ 8)(7)$ or rather $(1 \ 3 \ 6 \ 2 \ 4)(2 \ 8)$

If $\pi _1 = (1 \ 3 \ 6 \ 2 \ 4)$ and $\pi  = (2 \ 8)$, then $\pi _1 \circ \pi _2 = \pi = \pi _2 \circ \pi _1$

In this case, we have expressed $\pi$ as the product of *disjoint* cycles.

### Composing permutations in cycle notation

If you want to perform one permutation after another, or compose them, you write a new composition describing the previous permutations.

*Let* $\sigma = (2 \ 3 \ 4)(5 \ 6)$ and $\tau = (1 \ 4)(2 \ 3 \ 6 \ 5)$
Then $\sigma \circ \tau = (2 \ 3 \ 4)(5 \ 6)(1 \ 4)(2 \ 3 \ 6 \ 5)$

This works, but the cycles are not disjoint ($4$ is an element of both $(2 \ 3 \ 4)$ and $(1 \ 4)$ ). You can evaluate $\sigma \tau (i)$ by working right to left through the cycles, finding new cycles as a result.

### Inverse of a permutation

To obtain the inverse of a permutation, simply flip the direction of each cycle ($\sigma \sigma ^{-1} = id$). Note that cycles of length $2$ are self-inverse: $(a_1 \ a_2 ) = (a_2 \ a_1)$. 

### The order of a permutation

Consider $\sigma = (1 \ 2 \ 3)$. Then $\sigma ^2 = (1 \ 2 \ 3)(1 \ 2 \ 3) = (1 \ 3 \ 2)$ and continuing it gives us $\sigma ^3 = (1 \ 2 \ 3)(1 \ 2 \ 3)(1 \ 2 \ 3) = (1 \ 2 \ 3)(1 \ 3 \ 2) = id$.

**Proposition:** For a permutation $\pi$ in $S_n$, the order of $\pi$ is the smallest $m > 0$ such that $\pi ^{m} = id$. For multiple cycles, $\pi ^k = \sigma _1 ^k \sigma _2 ^k \sigma _3 ^k \dots \sigma _n ^k$ where $\sigma _i$ are cycles.

**Lemma:** If $\pi = \sigma _1 \dots \sigma _t$  where $\sigma _1 , \dots , \sigma _t$ are disjoint cycles of lengths $m_1 , \dots , m_t$ respectively, then the order of $\pi$ is the least common multiple of these cycle lengths: $$\text{order of } \pi = \text{lcm}(m_1, m_2, \dots, m_t)$$

### The sign of a permutation

***Transposition*** means permutations in the form $(i \ j)$. Every permutation can be written as a product of transpositions: $$(1_1 \ a_2 \ \dots \ a_{k-1 \ a_{k}}) = (a_1 \ a_2)(a_2 \ a_3) \dots (a_{k-1} \ a_{k}) = \Pi _{i = 1} ^{k} (a_{i-1} \ a_{i})$$
![[Theorem - Parity of a permutation]]

The ***sign*** of a permutation, written as $\text{sgn}(\sigma)$, works in the opposite way to what you might expect where an even length means it's an odd permutation, and an odd length means it's an even permutation. However, $\text{sgn}(\sigma) = 1$ if it is even, and $-1$ if odd.

Note: $\text{sgn}(\sigma \pi) = \text{sgn}(\sigma) \text{sgn}(\pi)$

---
## 3. Problem Sheets
- [ ] **Sheet 2:** ![[Structures-Sheet-2.pdf]]
- [ ] **Sheet 3:** ![[Structures-Sheet-2.pdf]]