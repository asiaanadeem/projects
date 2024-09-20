interface Person {
  name: string;
  age: number;
  alive: boolean;
}
function logPerson({ age, name, alive }: Person) {
  return { name, age };
  //return {name:person.name};
}
let result = logPerson({ name: "ali", age: 22, alive: true });
let obj = { obj: { obj: { print: console.log } } };
console.log(result);
obj.obj.obj.print(123);
/**
 * what did i learn...
 * interface is used to create a custom data type
 * if we want to print only one element thn we use para.element i.e(person.name)
 * if the key and the value variable is same thn you can just refrnce it once
 * object properties are accessed using dot
 */
