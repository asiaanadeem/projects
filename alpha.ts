// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function alphabetical(element: string) {
  let sequence = element.split(" ").sort().join();

  return sequence;
}
console.log(alphabetical("webmaster"));
