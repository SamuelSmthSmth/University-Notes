**Module:** [[MTH1001 - Mathematical Structures]]
**Sources:** - ![[MTH1001-2025-26-Notes-Term-1.pdf#height=700]]

---
## 1. Chapter Summary
> This chapter lays the groundwork for pure mathematics by introducing the theory of **Sets** and the rules of **Logical Reasoning**, methods for mathematical proofs, and propositional calculus.

---
## 2. Textbook Notes
![[Definition - Set]]

An example of a set is the set of Natural numbers = $\{ 1, 2, 3, \dots \}$ or the set of names such as $\{ \text{James}, \text{Jacob}, \text{Sarah} \}$. Any duplicates in a set are considered a singular element, and the order of the elements in the set don't matter.

**NOTE:** An element of which is a set is not the same as the elements contained within the set.

![[Definition - Cardinality]]

$\in$ means ''in, or "is an element of"

Sets can be constructed from other defined sets. They are written as $\{ \text{sets to build upon} : \text{properties of elements in set} \}$. For instance, the set of integers between $-1$ and $3$ $= \{ x \in \mathbb{Z} : -1 < x < 3 \}$

| Common Sets                     |                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| $\mathbb{N}$ (Natural Numbers)  | $\{1, 2, 3, \dots \}$                                                                                         |
| $\mathbb{Z}$ (Integers)         | $\{ \dots, -3, 2, -1, 0, 1, 2, 3, \dots \}$                                                                   |
| $\mathbb{Q}$ (Rational Numbers) | $\{ \frac{a}{b} : a,b \in \mathbb{Z} \text{ and } b \neq 0 \}$                                                |
| $\mathbb{R}$ (Real numbers)     | From Cantor's diagonalisation argument, we find that you cannot actually define the real numbers using a set. |
| $\emptyset$ (Empty set)         | $\{ \dots \}$                                                                                                 |
| $\mathbb{C}$ (Complex Numbers)  | $\{ x + iy : x,y \in \mathbb{R} \}$                                                                           |

### Linking sets

![[20 Knowledge Base/Definitions/Definition - Subset]]

For example, the set $\{ 1, 2, 3, 4, 5 \}$ is a subset of the natural numbers: $$\{ 1, 2, 3, 4, 5 \} \subseteq \mathbb{N}$$
![[Definition - Equality of sets]]

$\subset$ means subset and $\subseteq$ means subset **and/or** equal

$z^n$ is the number of subsets in a finite set with cardinality $n$.


| Operations on sets   |                                           |                                      |
| -------------------- | ----------------------------------------- | ------------------------------------ |
| $A \cap B$           | The **intersection** of both sets A and B | $\{ x : x \in A \land x \in B \}$    |
| $A \lor B$           | The **union** of A and B                  | $\{ x : x \in A \lor x \in B \}$     |
| $A \ \backslash \ B$ | The **difference** between sets A and B   | $\{ x : x \in A \land x \notin B \}$ |

![[Definition - Compliment of a set]]

![[Definitions - Powerset]]

![[Definitions - Cartesian Product]]

Consider $A \times B = \mathbb{R}$. Then, $\mathbb{R} \times \mathbb{R} = \mathbb{R}^2$ of which is equal to $\{ (x,y) : x \in \mathbb{R} \land y \in \mathbb{R} \}$. This is the set of Cartesian points in 2-dimensional space.

### Proving set operation equality

1. Recall the definition
2. Relate the properties of the first set and second set

## Propositional Calculus

![[Definitions - Proposition]]

For example, the statement $1 \neq 2$ is **True** and $12^9 < 11^9$ is **False**.

![[Definition - Predicate]]

| Quantifiers |              |
| ----------- | ------------ |
| $\forall$   | for all      |
| $\exists$   | there exists |


| Operations on propositions |                      |
| -------------------------- | -------------------- |
| $\lor$                     | or                   |
| $\land$                    | and                  |
| $\neg$                     | not                  |
| $\implies$                 | implies              |
| $\impliedby$               | implied by           |
| $\iff$                     | if and only if \ iff |

It's possible to translate between predicates and subsets. For instance, $P \lor (Q \land R) = (P \lor Q) \land (P \lor R)$ is equivalent to $A \lor (B \land C) = (A \lor B) \land (A \lor C)$. So then in general:

Let $S$ be a set and $\mathtt{P}(s), \mathtt{Q}(s), \mathtt{R}(s)$ be predicates of $S$. Further let $A, B, C \subset S$ where $A = \{ s \in S : \mathtt{P}(s) \text{ is true} \}$ ($B$ and $C$ follow on logically). 

Using this idea, you can check for set equality or predicate truth by translating to either one

### De Morgan's Laws

To negate $P \land Q$, negate $P$ and $Q$ separately, and change $\land$ to $\lor$. Likewise, to negate $P \lor Q$, negate $P$ and $Q$ separately, and then change $\lor$ to $\land$. 

e.g, $\neg(P \land Q) = (\neg P) \lor (\neg Q)$ and $\neg(P \lor Q) = (\neg P) \land (\neg Q)$

### Truth Tables


| $\implies$ Truth table |     |                |
| ---------------------- | --- | -------------- |
| $P$                    | $Q$ | $P \implies Q$ |
| F                      | F   | T              |
| F                      | T   | T              |
| T                      | F   | F              |
| T                      | T   | T              |
(figuring out the rest of them is relatively simple)


### Negating Quantified Statements

The negation of a statement changes it from true to false, or false to true.

e.g, $\exists x \in \mathbb{Q} : x^2 = 2$, this is false
the negation of the statement is $\forall x \in \mathbb{Q} : x^2 \neq 2$, which is true

When negating a statement, you flip the universal quantifier, alongside the true or falsities.

### General methods of proofs

-  **Direct Proofs**
	- A 'direct' route from point A to point B
	- these are good for statement of the form $\forall x \in S : P(x) \implies Q(x)$
	- Let $x \in S$, then assume $P(x)$ is True, and finally deduce that $Q(x)$ is True
- Contrapositive Proofs
	- Essentially, consider the logically equivalent opposite to the original statement and perform a direct proofs from there
	- $P \implies Q \text{becomes} \neg (Q) \implies \neg (P)$
	- This is useful for when the contrapositive of a statement is easier to prove than the original statement
	- e.g, $\frac{1}{x} \in \mathbb{Q} \implies x \in \mathbb{Q}$ is the contrapositive to $x \notin \mathbb{Q} \implies \frac{1}{x} \notin \mathbb{Q}$, of which is easier to prove 
- Proofs by contradiction
	- This is to assume the negation and deduce a contradiction, implying that the original statement is true
	- Take the statement $P$ and assume the negation which is $\neg (P)$, from which you deduce that $\neg (P) \implies \text{False}$ and so $P \text{ is True}$.
	- These proofs tend to rely more heavily on definitions
---
## 3. Problem Sheets
- [ ] **Sheet 1:** ![[Structures-Sheet-1.pdf]]