const ray = [64, 34, 25, 12, 22, 11, 90, 5];

for (let i = 0; i < ray.length; i++) {
  let min = i;
  for (let j = i + 1; j < ray.length; j++) {
    if (ray[j] < ray[min]) {
      min = j;
    }
  }
  let val = ray[min];
  ray[min] = ray[i];
  ray[i] = val;
}
console.log(ray);
