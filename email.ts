// console.log(getTagFromEmail("mabroorcc@gmail.com"));//mabroorcc
// console.log(getTagFromEmail("ali@gmail.com"));//ali
// function getTagFromEmail(emailAdress:string)
/*
asianadeem00@gmail.com

*/
function getTagFromEmail(email: string) {
  let parts = email.split("@");

  let tag = parts[0];
  return tag;
}
console.log(getTagFromEmail("ali@gmail.com"));
/*
what did i learn...
we can split the string by any charactor
right to left assigning 
how to extract element from array by position...arr[]
variable names should be meaningfull...they should be named after the value they contain
without calling a function we can't run the function code
*/
