/*
my_array = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(my_array)
for i in range(n-1):
    for j in range(n-i-1):
        if my_array[j] > my_array[j+1]:
            my_array[j], my_array[j+1] = my_array[j+1], my_array[j]

print("Sorted array:", my_array)
*/
let arr = [64, 34, 25, 12, 22, 11, 90, 5];
function arraySorting(a: any, b: any) {
  let sort: any = [];
  if (a - b < 0) {
    sort.push(a);
  } else {
    sort.push(b);
  }
  return a-b;
}
let result = arr.sort(arraySorting);
console.log(result);
