function CountWords(str){
    let count=str.trim().split(/\s+/).length;
    return count;
}

console.log(CountWords("I am sagar"));