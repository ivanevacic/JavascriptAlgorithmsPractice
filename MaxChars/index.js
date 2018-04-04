/*

Given a string, return the character that is most commonly used in the stringw

    maxChar('abcccccd') -> 'c'
    maxChar('apple 1231111') -> '1'



*/


//Solution 1

function maxChar(str) {
    const charMap = {};
    //helper variables
    let max = 0;
    let maxChar = '';

    //iterate over str and build charmap
    for(let char of str) {
        //if we have an entry
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for(let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChar('bbbt'));//b
