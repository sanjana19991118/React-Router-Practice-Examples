function removeDuplicates(arr) {
  // Initialize a new array to store the unique elements
  let uniqueArray = [];

  // Iterate over each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // If the element is not already in the unique array, add it
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  // Return the array with duplicates removed
  return uniqueArray;
}

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
