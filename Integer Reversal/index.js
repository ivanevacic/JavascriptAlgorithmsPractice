/*

Given an integer, return an integer that is the reverse ordering of numbers

reverseInt(15) === 51
reverseInt(-13) === -31
reverseInt(500) === 5,not 005
reverseInt(-90) === -9



*/

//Solution 1

function reverseInt(n) {
    //turn number into string
        //reverse the order of chars(still string)
            const reversed = n.toString().split('').reverse().join('');

    // if n > 0 result will be positive,otherwise negative
    return parseInt(reversed) * Math.sign(n);

}

console.log(reverseInt(-15));//-51