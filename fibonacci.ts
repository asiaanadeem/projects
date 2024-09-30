/*
Start with the two first Fibonacci numbers 0 and 1.
Add the two previous numbers together to create a new Fibonacci number.
Update the value of the two previous numbers.
Do point a and b above 18 times.
*/
let fibonacci = [0, 1];
for (let i = 1; i <= 18; i++) {
  let lastElementPosition = fibonacci.length - 1;
  let lastElement = fibonacci[lastElementPosition];
  let secondLastElement = fibonacci[lastElementPosition - 1];
  fibonacci.push(lastElement + secondLastElement);
}
console.log(fibonacci);
/*
what did i learn....
to get the last element position we use array.length-1
this process is taking larger memory bcz we have to 1st store the numbers in the array 
and thn print them
*/ 
