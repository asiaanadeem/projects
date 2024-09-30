// console.log(findMin([0.5333, 0.3233, 0.9874,0.6214,0.8475, 0.1234,0.2345]));
/*
first we have to start reading the array 
minimum<-remember....

steps...
 start reading from the first element and compare each element one by one with the 
 previous element to check if it is smaller thn previous or not until we reahed 
 the last letter 

computer...
create a variable minimum,
thn create a funcion to get the minimum number and assign a number array to it
create a loop to check the array element one by one
use if to set a condition if the array element is  less than minimum than 
mininum is equal to n
return the minimum to the function
*/

function findMin(numb: number[]) {
  let minimum = 100;
  for (let n of numb) {
    if (n < minimum) {
      minimum = n;
    }
  }
  return minimum;
}
console.log(findMin([0.5333, 0.3233, 0.9874, 0.6214, 0.8475, 0.1234, 0.2345]));
