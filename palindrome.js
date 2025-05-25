let word1 = prompt("Enter first word (e.g., RACECAR):");
let word2 = prompt("Enter second word (e.g., RECORDER):");

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    console.log(`Original: ${word}, Reversed: ${reversed}`);
    return word === reversed;
}

console.log(`Is ${word1} a palindrome? ${isPalindrome(word1)}`);
console.log(`Is ${word2} a palindrome? ${isPalindrome(word2)}`);
