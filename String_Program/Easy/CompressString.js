function compressString(str) {
    let returnStr = '', count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            returnStr = returnStr + str[i] + count;
            count = 1;
        }
    }
    return returnStr;
}

console.log(compressString('aaaaabbccaa'));