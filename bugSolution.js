function foo(a, b) {
  if (a === null || b === null) {
    return 0;
  }
  if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; // Handle cases where a or b is not a number
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3
console.log(foo('a', 2)); // Output: NaN