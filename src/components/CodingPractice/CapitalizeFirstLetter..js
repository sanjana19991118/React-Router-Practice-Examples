function capitalizeFirstLetterOfEachWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Iterate over each word and capitalize the first letter
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join(" ");
}

// Example usage
const exampleString = "the quick brown fox jumps over the lazy dog";
const capitalizedString = capitalizeFirstLetterOfEachWord(exampleString);
console.log(capitalizedString); // Output: "The Quick Brown Fox Jumps Over The Lazy Dog"
