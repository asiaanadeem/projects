// {
//     "employees" : [
//       {"firstName":"John", "lastName":"Doe"},
//       {"firstName":"Anna", "lastName":"Smith"},
//       {"firstName":"Peter", "lastName":"Jones"}
//     ]
// } 
let txt =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(txt);
// const obj = JSON.stringify("employees")
// console.log(obj);
console.log(JSON.stringify(obj,null,2));
