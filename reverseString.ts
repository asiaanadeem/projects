// console.log(reverseString("pneumonoultramicroscopicsilicovolcanoconiosis")); // Output: "olleh"
/*
first we have to start reading the charactor from the end char
sisoinoc
STEPS...
oppositeword <- remeber it
read the last char and add it to oppositeword
read the 2ndlast char and add it to oppositeword
read the 3rdlast char  and add it to oppositeword
read the 4thlast char and add it to oppositeword
read the 5thlast char and add it to oppositeword


read all the charactors one by one starting from the last 
charactor and add it to the oppositeword untill we got the first charactor 

COMPUTER...
create oppositeword variable("")
start the loop from lastchar to the firstchar 
read the char and add the char to the oppositeword
return the oppositeword in the function
*/
function reverseString(word: string) {
  let oppositeword = "";
  for (let i = word.length; i >= 0; i--) {
    //in computers assigning values to variables means remebering something like our brain does
    oppositeword += word.charAt(i);
  }
  return oppositeword;
}
console.log(reverseString("pneumonoultramicroscopicsilicovolcanoconiosis"));
console.log(reverseString("hello"));
