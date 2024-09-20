// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function combinations(word: string) {
  let comb = [];
  for (let i = 0; i <= word.length - 1; i++) {
    let iChar = word[i];
    comb.push(iChar);
    for (let j = i + 1; j <= word.length - 1; j++) {
      iChar += word[j];
      comb.push(iChar);
    }
  }
  return comb;
}
console.log(combinations("dog"));
/**
 * what did i learn....
 * when loop run in the first itration the inner loop itrations run in a
 * sequence thn 2nd loop run and thn its inner loop itrations run
 * thn the 3rd loop and its inner loop itrations 
 * 
 * for evry itration of the outer loop, inner loop has to finish all of its itrations
 * how to access the charactor of a string by a position
 * index var of a loop can be used as a positional value
 */
