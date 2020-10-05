# Roll
A simple program that emulates dice rolls with custom number of dimensions and times rolled. Like rolling 5d20 but with a function.

# Usage
```
import Roll, { d, sum } from '@stacon/roll'

// Create a dice set
const D20 = d(20);

// Sigle die roll
console.log(Roll(D20)) // should log a number between 1 - 20 like a d20 roll would.

// Multiple dice roll of the same dimensions
const resultsArr = Roll.times(5)(D20) // returns an array of numbers between 1 - 20
console.log(resultsArr) // should log e.g [ 19, 20, 1, 5, 11 ]
console.log(sum(resultsArr)) // should return the sum of results are e.g. 56
```
