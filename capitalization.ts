// console.log(capitaizefirstletter("write a program to capitalize the first letter of the string"))
/*
capital<--remember
steps...
first we have to read the string
and while reading all the words  of a string we have to remember that
first word should be capital

computer...
create a variable capital and split the string to an array
create a function 
start a loop
where using uppercase first charactor
 of first word into capital letter
thn use substr method to cut the first letter 
add both the functions values and assigm the value to capital
thn by join() convert he array to string and store data
return the stored data to the fnction
*/

function capitalizeFirstletter(capitalWord: string) {
  let capital = capitalWord.split(" ");

  for (let i = 0, x = capital.length; i < x; i++) {
    capital[i] = capital[i][0].toUpperCase() + capital[i].substr(1);
  }
  let capitalLLet = capital.join(" ");
  return capitalLLet;
}
console.log(
  capitalizeFirstletter(
    "write a program to capitalize the first letter of the string"
  )
);
