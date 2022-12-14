// PROBLEM
/*

“higher-order function” is a function that accepts functions as parameters and/or returns a function

*/

// ANSWER

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
