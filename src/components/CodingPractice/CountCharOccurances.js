function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Example usage
const exampleString = "hello world";
const characterCounts = countCharacterOccurrences(exampleString);
console.log(characterCounts);
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
