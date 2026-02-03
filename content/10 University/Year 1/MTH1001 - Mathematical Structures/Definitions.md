### Axioms for a group
A set $G$ with the [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Binary Operation|binary operation]] $*$ is a group if
1. $a * (b * c) = (a * b) * c$ for all $a,b,c \in G$;
2. there is $e \in G$ with the property that $e * a = a$ and $a * e = a$ for all $a \in G$;
3. for each $a \in G$ there is $a' \in G$ such that $a * a' = e$ and $a' * a = e$.

### Binary Operation
A ***binary operation*** $*$ (or just an operation) on a set $X$ is a rule assigning to each $a \in X$ and $b \in X$ an element $a * b \in X$.

### Cardinality
The *cardinality* (or *order*) of a group is the number of elements it has. If this number is finite, it is a finite group and otherwise an infinite group. We write $|G|$ for the cardinality of $G$.

### Commutative
A [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Binary Operation|binary operation]] $*$ on a set $X$ is *commutative* if $a * b = b * a$ for all $a, b \in X$.

### Compliment of a set
Given all of the [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Set|sets]] being considered are all subsets of a fixed set $S$, we call $S$ the **universal set** and define the compliment of set $A$ as:
$$A^c = A' = \{ x \in S : x \notin A \} = S \ \backslash \ A$$

### Cyclic subgroup
If $a \in G$, then the set $\{ a^n : n \in \mathbb{Z} \}$ is a subgroup of $G$, which we denote $\langle a \rangle$. This is the *cyclic subgroup* of $G$ *generated* by $a$.

### Equality of functions
Let $f : A \to B$ and $g : C \to D$ be [[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Function|functions]]. Then $f$ and $g$ are equal (written $f = g$) if $A = C$ and $B = D$, and $f(x) = g(x)$ for all $x \in A$.

### Equality of sets
Let $A$ and $B$ be [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Set|sets]]. Then $A$ and $B$ are equal ($A = B$) if and only if $A \subseteq B$ and $B \subseteq A$: $$A = B \iff (A \subseteq B) \ \land \ (B \subseteq A)$$

### Function composition
Let $f : A \to B$ and $g : C \to D$. Then the *composition* of $f$ and $g$: $$f \circ g = f(g(a)) \forall a \in A$$ creating the [[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Function|function]] $f \circ g : A \to C$

### group subset
For $g \in G$, we write $$gH = \{ gh : h \in H \}$$
So $gH$ is a *subset* (not subgroup) of $G$, and it contains precisely $|H|$ elements, since if $gh = gh'$ then (multiplying on the left by $g^{-1}$) we get $h = h'$. We call $gH$ the **left coset** of $H$ determined by $g$.

### Homomorphism
Let $G$ and $H$ be groups with operations denoted by $*$ and $\boldsymbol{\cdot}$ respectively. A **homomorphism** from $G$ to $H$ is a is a map $\phi : G \to H$ which is satisfies $$\phi (a * b) = \phi(a) \ \boldsymbol{\cdot} \ \phi (b) $$ for all $a, b \in G$.

### Identity Function
For any set $A$, the identity [[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Function|function]] of $A$ is the function $id_A(a) = a$ for all $a \in A$.

### Isomorphism
Let $G$ and $H$ be groups with operations denoted by $*$ and $\boldsymbol{\cdot}$ respectively. An **isomorphism** from $G$ to $H$ is a [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Surjectivity, Injectivity, and Bijectivity|bijection]] $\phi : G \to H$ which is "structure-preserving" in the sense that $$\phi (a * b) = \phi(a) \ \boldsymbol{\cdot} \ \phi (b) $$ for all $a, b \in G$.

### Left and Right Inverse
For a [[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Function|function]] $f : A \to B$, we say:
- $g : B \to A$ is a *left inverse* to $f$ if $g \circ f = id_A$
- $h : B \to A$ is a *right inverse* to $f$ if $f \circ h = id_B$

### Permutation
Let $X$ be any [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Set|set]]. Then a *permutation* on $X$ is a bijection $\pi : X \to X$.

### Predicate
A predicate is a statement in involving one or more free variables. The statement becomes a proposition once we specify values for the free variables.

### Set of all permutations
For any natural number $n$, we write $S_n$ for the [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Set|set]] of all permutations on the set $\{ 1, 2, \dots , n \}$. (It is sometimes write $\mathfrak{S}_n$).

### Set
A set is a collection of objects (known as elements). Sets are written using the brackets { }.

### Subgroup
If $G$ is a group with operation $*$ then a subset $H$ of $G$ is a *subgroup* of $G$ if
- $a * b \in H$ whenever $a \in H$ and $b \in H$
- the identity element of $G$ is an element of $H$
- the inverse of each element of $G$ is an element of $H$

### Subset
Let $A$ and $B$ be [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Set|sets]]. Then $A$ is a subset of $B$ if all of the elements in $A$ are also elements in $B$. This is written as $A \subseteq B$.

### Surjectivity, Injectivity, and Bijectivity
For a [[10 University/Year 1/MTH1002 - Mathematical Methods/Definitions#Function|function]] $f : A \to B$:

- $f$ is *surjective* if, for each $b \in B$, there is at least one $a \in A$ with $f(a) = b$.
- $f$ is injective if, for each $b \in B$, there is at most one $a \in A$ with $f(a) = b$. So for many elements $a$, $a' \in A$: $f(a) = f(a') \implies a = a'$
- $f$ is bijective if it is both surjective and injective. So for each $b \in B$, there is exactly one $a \in A$ with $f(a) = b$

### Cartesian Product
For [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Set|sets]] $A$ and $B$, their **Cartesian Product**, $A \times B$, consists of all of the ordered pairs $(a,b)$ where $a \in A$ and $b \in B$: $$A \times B = \{ (a,b) : a \in A \land b \in B \}$$

### Powerset
A [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Set|set]] of all the [[10 University/Year 1/MTH1001 - Mathematical Structures/Definitions#Subset|subset]] of a given set $S$ is called the **powerset**, denoted using $\mathtt{P}(S)$ . Note, $|S| = n \iff \mathtt{P}(S) = 2^n$

### Proposition
> A Proposition is a statement that is either true or false