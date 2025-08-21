// Using for loop Reverse String
function reverseString(str){
    let reverseStr = "";
    for(let i=str.length-1;i!=-1;i--){
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
} 
console.log(reverseString("Welcome to india"));

// Reverse String using split,reverse and join function.
function reverseString(str){
    return str.split('').reverse().join('');
} 

console.log(reverseString("Welcome to india"));