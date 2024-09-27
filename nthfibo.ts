// def F(n):
//     if n <= 1:
//         return n
//     else:
//         return F(n - 1) + F(n - 2)

// print(F(19))
function nthFib(n: number): number {
  if (n <= 1) {
    return n;
  } else {
    return nthFib(n - 1) + nthFib(n - 2);
  }
}
console.log(nthFib(7));

