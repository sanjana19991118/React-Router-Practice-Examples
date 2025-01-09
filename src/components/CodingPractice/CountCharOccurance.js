function countCharacterOccurrences(str) {
  // Initialize an object to store the character counts
  const charCount = {};

  // Iterate over each character in the string
  for (const char of str) {
    // If the character is already in the object, increment its count
    if (charCount[char]) {
      charCount[char]++;
    } else {
      // Otherwise, add the character to the object with a count of 1
      charCount[char] = 1;
    }
  }

  // Return the object with the character counts
  return charCount;
}

// Example usage
const exampleString = "hello world";
const characterCounts = countCharacterOccurrences(exampleString);
console.log(characterCounts);
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
