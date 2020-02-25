# Dice
A simple program that emulates dice rolls with custom number of dimensions and times rolled. Like rolling 5d20 but with a function.

# Usage
```
// Sigle die roll
Roll.D(20) // returns a number between 1 - 20 like a d20 roll would.

// Multiple dice roll of the same dimensions
Roll.D(12, 5) // returns a number between 5 - 60 like 5 d12s roll would.

// Multiple dice roll with dice of different dimensions and numbers
Roll.D({20: 2, 12: 5}) // return the accumulated roll result from rolling 2*d20 and 5*d12
Roll.D({12: 2, 10: 5, 8: 1}) // return the accumulated roll result from rolling 2*d12 and 5*d10 and 1*d8
```
