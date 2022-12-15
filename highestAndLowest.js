/*
DESCRIPTION:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// ANSWER

function highAndLow(numbers) {
  // split the numbers into an array of individual strings
  let nums = numbers.split(" ");

  // convert each string to a number and store it in a new array
  let numValues = nums.map(function (num) {
    return parseInt(num, 10);
  });

  // sort the array in ascending order
  numValues.sort(function (a, b) {
    return a - b;
  });

  // return the highest and lowest numbers as a string, separated by a space
  return `${numValues[numValues.length - 1]} ${numValues[0]}`;
}
