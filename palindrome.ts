function isPalindrome(word: string) {
  let rev = word.split("").reverse().join("");

  if (rev === word) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("dada"));
