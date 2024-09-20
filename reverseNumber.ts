// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNumber(x: number) {
  let str = x.toString().split("").reverse().join("");

  let num = Number(str);
  return num;
}

console.log(reverseNumber(32243));
/*
what did i learn....
how to convert a number to a string 
thn convert a string to a number
*/
