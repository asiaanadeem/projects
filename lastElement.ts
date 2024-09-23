// Write a JavaScript function to get the last element of an array. Passing the parameter
//'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// [-2]
// [9, 0, -2]
// [7, 9, 0, -2]
function last(numbers: number[], n?: number) {
  let output = [];
  let steps = 0;
  if (!n) {
    n = 1;
  }
  for (let i = numbers.length - 1; steps < n; i--) {
    output.unshift(numbers[i]);
    if (numbers[i - 1] === undefined) {
      break;
    }
    steps++;
    
  }
  return output;
}
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
console.log(last([7, 9, 0, -2]));
/*
what did i learn.....
how to make input(parameters) optional meaning user can pas them or not its upto the user
required parameters should be placed before optional parameters
how to check if something doesn't exist...14
how to assign value to something that doesn't exist....15
how to move from right to left in the array
how to add element to the start of the array
how to acccess next value from the currerent position of the array[i+1 or i-1]
how to breakout of a loop even if loop isn't finished based on a condition
how to create a new array from the values of an existting array
*/
