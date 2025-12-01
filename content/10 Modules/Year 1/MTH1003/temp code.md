## My Code

```
# group all imports at the top of the file
from math import floor, pi
from scipy.special import jv
import numpy as np
import matplotlib.pyplot as plt


# DO NOT EDIT THIS FUNCTION
def myfunction(x, test=False):

    if test:
        # for testing purposes only 
        w1 = rand() * 2 - 1
        w2 = rand() * 2 - 1
    else:
        # gain the last pairs of digits from the student number to
        # obtain weights
        a  = myID()
        w1 = (a % 100) * 0.02 - 1.0
        w2 = (floor(a/100) % 100) * 0.02 - 1.0

    # some suitable functions to add together 
    y0 = jv(0, x)
    y1 = jv(1, x*2) * 0.75
    y2 = jv(2, x*4) * 0.5

    # to give the 'myfunction' weighted by the student number final digits 
    y = y0 + w1 * y1 + w2 * y2

    return y


# TASK 1: Write your myID function

def myID():
    return 750049674

# TASK 2: Write your code to produce a line plot using myfunction to
# generate the y values

#Creating x and f(x) as two numpy arrays (myfunction doesn't take in a list)

h = 0.1
x = np.arange(0, 10 + h, h)

y = myfunction(x)

#Making plot function

plt.figure()
plt.plot(x, y, label=r'$y = f(x)$', color='blue', linewidth=2)

plt.xlabel('x (Independent Variable)')
plt.ylabel('y = myfunction(x)')

plt.title('Task 2: Plot of myfunction')
plt.savefig(f'yplot.png')


# TASK 3: Write your numdiff function

def numdiff(h, y):
    dy = np.zeros(len(y))
    ddy = np.zeros(len(y))

    #Left-hand side thing
    dy[0] = (-y[2] + 4*y[1] - 3*y[0]) / (2 * h)
    ddy[0] = (-y[3] + 4*y[2] - 5*y[1] + 2*y[0]) / (h**2)

    #Normal differentiation
    for j in range(1, len(y) - 1):
        dy[j] = (y[j+1] - y[j-1]) / (2 * h)
        ddy[j] = (y[j+1] - 2*y[j] + y[j-1]) / (h**2)

    #Right-hand side thing
    dy[-1] = (3*y[-1] - 4*y[-2] + y[-3]) / (2 * h)
    ddy[-1] = (2*y[-1] - 5*y[-2] + 4*y[-3] - y[-4]) / (h**2)

    return dy, ddy

h = 0.1
dy, ddy = numdiff(h, y)

# TASK 4: Test your numdiff function on a function of your choice

g = np.sin(x)
dg_numdiff, ddg_numdiff = numdiff(h, g)

dg = np.cos(x)
ddg = -np.sin(x)

plt.figure()

plt.plot(x, dg_numdiff, 'r--', label="g' (num)")
plt.plot(x, dg, 'r-', alpha=0.3, linewidth=4, label="g'") #alpha works the same as in Photoshop :)
plt.plot(x, ddg_numdiff, 'g--', label="g'' (num)")
plt.plot(x, ddg, 'g-', alpha=0.3, linewidth=4, label="g''")
plt.legend()

plt.title('Task 4: Differentiation Test')
plt.savefig('dyddytest.png')

plt.close()

# TASK 5: Plotting f'(x) and f''(x) for the function f(x) given by myfunction

plt.figure()

plt.plot(x, dy, label="f'(x)")
plt.plot(x, ddy, label="f''(x)")
plt.legend()

plt.title("Derivatives of myfunction")
plt.savefig('dyddyplot.png') #

plt.close()

# TASK 6: Write your findroot function

def findroot(f, x1, x2):
    x_prev = x1
    x_curr = x2

    for j in range(20):

        y_prev = f(x_prev)
        y_curr = f(x_curr)

        x_new = (x_prev * y_curr - x_curr * y_prev) / (y_curr - y_prev)

        if abs(f(x_new)) < (10**(-6)) and j >= 3:
            return x_new

        x_prev = x_curr
        x_curr = x_new

    print('the calculation has not converged')
    return 0





# TASK 7: Test your findroot function on a function of your choice

#h = np.exp(x) * np.sin(x) #Tried variable which breaks so using function instead
def h(x):
    return np.exp(x) * np.sin(x)

x1, x2 = 2.5, 3.5
xstar = findroot(h, x1, x2)
xtrue = pi

print(f'The root approximation of h(x) is {xstar} and it"s true value is {xtrue}')
print(f'The difference between the two is {abs(xstar - xtrue)}')

# TASK 8: Apply your findroot function to f(x) defined by myfunction

xstar = findroot(myfunction, 1, 2)
print(f'The root approximation of myfunction is {xstar}') #value is around 2.40932 which seems correct
print(f'myfunction(xstar) = {myfunction(xstar)}') #confirmed that value is very good approx of root
```

## Gemini's Code

```
import numpy as np
import matplotlib.pyplot as plt

def myID():
    return 123456

def myfunction(x):
    return np.sin(x) * (x**2 - 5*x + 3)

def numdiff(h, y):
    N = len(y)
    dy = np.zeros(N)
    ddy = np.zeros(N)

    for j in range(1, N - 1):
        dy[j] = (y[j+1] - y[j-1]) / (2*h)
        ddy[j] = (y[j+1] - 2*y[j] + y[j-1]) / (h**2)

    dy[0] = (-y[2] + 4*y[1] - 3*y[0]) / (2*h)
    ddy[0] = (-y[3] + 4*y[2] - 5*y[1] + 2*y[0]) / (h**2)

    dy[-1] = (3*y[-1] - 4*y[-2] + y[-3]) / (2*h)
    ddy[-1] = (2*y[-1] - 5*y[-2] + 4*y[-3] - y[-4]) / (h**2)

    return dy, ddy

def findroot(f, x1, x2):
    for j in range(20):
        fx1 = f(x1)
        fx2 = f(x2)
        
        if abs(fx2) < 1e-6:
            return x2
        
        if fx2 == fx1:
            break

        x_new = x2 - fx2 * (x2 - x1) / (fx2 - fx1)
        x1 = x2
        x2 = x_new

    print('the calculation has not converged')
    return 0

h = 0.1
x = np.arange(0, 10 + h/100, h)
y = myfunction(x)

plt.figure()
plt.plot(x, y)
plt.xlabel('x')
plt.ylabel('y')
plt.title('Plot of y = f(x)')
plt.savefig('yplot.png')

def g(x):
    return np.exp(0.5 * x)

def g_prime(x):
    return 0.5 * np.exp(0.5 * x)

def g_double_prime(x):
    return 0.25 * np.exp(0.5 * x)

y_g = g(x)
dy_g, ddy_g = numdiff(h, y_g)

plt.figure()
plt.plot(x, dy_g, label="Numerical f'(x)")
plt.plot(x, g_prime(x), '--', label="Analytical f'(x)")
plt.plot(x, ddy_g, label="Numerical f''(x)")
plt.plot(x, g_double_prime(x), '--', label="Analytical f''(x)")
plt.legend()
plt.xlabel('x')
plt.ylabel('Derivative value')
plt.title('Test of Numerical Differentiation')
plt.savefig('dyddytest.png')

dy_f, ddy_f = numdiff(h, y)

plt.figure()
plt.plot(x, dy_f, label="f'(x)")
plt.plot(x, ddy_f, label="f''(x)")
plt.legend()
plt.xlabel('x')
plt.ylabel('Derivative value')
plt.title('Derivatives of myfunction')
plt.savefig('dyddy.png')

def h_test(x):
    return x**2 - 4

print(2.0)
print(findroot(h_test, 1.0, 3.0))

root_approx = findroot(myfunction, 1.0, 2.0)
print(root_approx)
print(myfunction(root_approx))
```