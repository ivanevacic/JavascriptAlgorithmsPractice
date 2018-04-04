/*

Given a string, return a new string with the reversed order of characters

    revers('apple') -> 'elppa'


*/

//Solution 1

/* function revers(str){
    //turn string to array of chars
    const arr = str.split('');
    //js function that reverses the order of chars
    arr.revers();
    //returns array of chars back to string
    return arr.join('');
} */

//Solution 2

/* function revers(str) {
    //temporary empty variable
    let reversed = '';
    //loop trough every char in string
    for (let character of str) {
        //add each char to variable revers
        reversed = character + reversed;
    }
    //return reversed variable
    return reversed;
} */

console.log(revers('Ivan Evačić'));//ćičavE navI