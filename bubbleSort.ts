const arr = [64, 34, 25, 12, 22, 11, 90, 5];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    let current = arr[j];
    let next = arr[j + 1];
    if (current > next) {
      arr[j] = next;
      arr[j + 1] = current;
    }
  }
}
console.log(arr);
