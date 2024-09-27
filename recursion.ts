let count = 0;
let fibon = [0, 1];
function addFibonacci(arr: number[]) {
  if (count <= 5) {
    let lastElePosi = arr.length - 1;
    let lastEle = arr[lastElePosi];
    let secLastEle = arr[lastElePosi - 1];
    arr.push(lastEle + secLastEle);
    count++;
    return addFibonacci(arr);
  } else {
    return arr;
  }
}
console.log(addFibonacci(fibon));
//recursion is used in this function 
//for recursion to work you must have an exit case this is also called a base case
//you also need to make sure you reach that base case
