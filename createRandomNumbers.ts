/*
create a programme that generates one thousand random numbers
and outputs them into a file
randomnumbers.txt
use Math.random to generate random numbers
*/

//we created an array to store 1k random numbers which willbe generate latter on
const numbrs = [];
//created a loop from 0 to 1000
for (let x = 0; x <= 1000; x++) {
  //generate a random number
  const randomNumber = Math.random();
  //now we push random number to array we have created earlier
  numbrs.push(randomNumber);
}
// we have converted the array to a string
const formattedNumbrs = numbrs.join();
// we use fs module to interact with the file system
import fs from "fs";
//then we created a file named randomnumbers.txt and filled it with formatted numbers
fs.writeFileSync("randomnumbers.txt", formattedNumbrs);
