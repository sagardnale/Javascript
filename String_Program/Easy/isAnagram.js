//Check if two strings are anagrams

function makeNormalize(str){
    return str.split("").sort().join("");
}
function isAnagram(str1,str2){
    return makeNormalize(str1) == makeNormalize(str2);
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));