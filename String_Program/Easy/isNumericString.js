function isNumericString(str){    
    return /^\d+$/.test(str);
}

console.log(isNumericString("1234"));
console.log(isNumericString("123S"));
console.log(isNumericString("Sagar123"));