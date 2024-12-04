function sortArrayDescending(arr) {
    // Use the sort method with a custom comparator for descending order
    return arr.sort((a, b) => b - a);
}

// Example usage
const inputArray = [5, 3, 8, 1, 2];
const sortedArray = sortArrayDescending(inputArray);
console.log(sortedArray); // Output: [8, 5, 3, 2, 1]
