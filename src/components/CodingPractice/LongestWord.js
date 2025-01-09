function findLongestWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Initialize a variable to keep track of the longest word
  let longestWord = "";

  // Iterate over each word in the array
  for (const word of words) {
    // Update the longest word if the current word is longer
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  // Return the longest word found
  return longestWord;
}

// Example usage
const exampleString = "The quick brown fox jumped over the lazy dog";
const longestWord = findLongestWord(exampleString);
console.log(`The longest word is: ${longestWord}`);
