function removNegativeNumbers(numbrs: number[]) {
  let positiveNumbers: number[] = [];
  for (let n of numbrs) {
    if (n > 0) {
      positiveNumbers.push(n);
    }
  }

  return positiveNumbers;
}
console.log(removNegativeNumbers([-23, 4, 324, 52, -4, 643, 23, -5, -1]));
