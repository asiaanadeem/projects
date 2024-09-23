//console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //
/*
longest<---remember
steps...
read the string and start counting the char of each word
and remind the longest word if the nxt word is greater in length thn the 
previous thn forget the previous word and remind it

computer...
create a variable name longest
create a function 
start a loop 
add a condition for the largest word
*/

function findLongestWord(longWord:string){
    let parts = longWord.split(" ");
let longestLetter = "";
for(let element of parts){
if(element.length>longestLetter.length)
longestLetter = element;
}
return longestLetter;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

