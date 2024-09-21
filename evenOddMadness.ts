/*
create a program that prints fifty even numbers per line in this particular format
2 - Even
4 - Even
*/

//created count to check the count of even numbers that we have printed
let count = 0;
//we loop from zero to hundred
for (let x = 0; x <= 100; x++) {
  //condition to check if x is even or not
  if (x % 2 === 0) {
    //increment count as we found even number
    count++;
    //print the even number in particular format requested
    console.log(`${x} - Even`);
  }
  //second if condition to scheck if we reached 50
  if (count === 50) {
    //used to stop the loop
    break;
  }
}
//print the count
console.log(count);
