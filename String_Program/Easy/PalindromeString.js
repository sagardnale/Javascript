//check string is palindrome using for loop
function isPalindromeString(str){
    for(let i=0,j=str.length-1;i<j && j>i;i++,j--){
        if(str[i] != str[j]){
            return false;
        }
    }
    return true;
} 
console.log(isPalindromeString("nitin"));
console.log(isPalindromeString("Sagar"));

//check string is palindrome using split,reverse,join 
function isPalindromeString(str){
    const rev = str.split('').reverse().join('');
    return str === rev;
} 

console.log(isPalindromeString("nitin"));
console.log(isPalindromeString("Sagar"));