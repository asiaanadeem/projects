/*
*
**
***
****
*****
create a program that prints stars like above
hint:use loops
*/
// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("*****");
//loop is created from 1 to 5 
for (let x = 1; x <= 100; x++) {
    //line created to store stars
  let line = "";
  //loop is created from 1 to x
  for (let y = 1; y <= x; y++) {
    //star is added to the line
    line += "*";
  }
  //print the line
  console.log(line);
}
