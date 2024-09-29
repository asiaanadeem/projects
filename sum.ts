// console.log(sumArray([1, 2, 3, 4])); // Output: 10

function sumArray(numbers: number[]) {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 8, 22, 12, 3]));

