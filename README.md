# Unexpected behavior with null values in function

This repository contains a JavaScript code example demonstrating an uncommon bug related to null values in a function. The function is designed to return the sum of two numbers if both are provided; however, it unexpectedly returns 0 when either argument is null.

## Bug Description
The function `foo` is expected to return the sum of two numbers (a and b).  If either `a` or `b` is `null`, the function should return 0.  However, the current implementation always returns 0 when either `a` or `b` is `null`.

## Bug Reproduction
Clone this repository and run `bug.js`. The output will show the unexpected behavior.

## Solution
The `bugSolution.js` file provides a corrected implementation that addresses the unexpected behavior, demonstrating how to effectively handle null values to achieve the expected results.

## Learning Points
This example highlights the importance of meticulous code testing and careful handling of potential null values in function parameters.  Even seemingly simple functions can exhibit unexpected behavior due to overlooked edge cases.  Understanding and correctly managing these edge cases is crucial for writing robust and reliable code.