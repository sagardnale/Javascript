function rotateLeft(str,n){
    return str.slice(n) + str.slice(0, n);
}

console.log(rotateLeft("sagar nale",2));