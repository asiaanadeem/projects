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
