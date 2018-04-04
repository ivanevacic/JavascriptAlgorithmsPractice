/*

Given a string, return true if the string is a palindrome of false if it is not.
Palindromes are strings that form the same word if it is reversed.

palindrome('abba') === true 
palindrome('abcdefg') === false


*/

//Solution 1

function palindrome(str) {
    //reverse
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    //return true if reversed === str,else return false
    return reversed === str;
}

console.log(palindrome('ageag'));//false
console.log(palindrome('abba'));//true