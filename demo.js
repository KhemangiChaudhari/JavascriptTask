function reverseWords(sentence) {
    // Split the sentence into words, reverse each word, and join them back
    return sentence.split(' ')
                   .map(word => word.split('').reverse().join(''))
                   .join(' ');
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "shiT si a ynnus yad"


