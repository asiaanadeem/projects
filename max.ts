// console.log(findMax([5, 3, 9, 1, 6]));


function findMax(numbers: number[]) {
  let maximumNumber = 0;
  for (let n of numbers) {
    if(n>maximumNumber){
      maximumNumber = n;
    }
  }
  return maximumNumber;
}

console.log(findMax([5, 3, 9, 11, 6]));
