/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

// ANSWER

function oddOrEven(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  if (sum % 2 === 0) {
    return "even";
  } else if (sum % 2 !== 0) {
    return "odd";
  }
}

// REFACTOR
function oddOrEven1(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum % 2 === 0 ? "even" : "odd";
}
