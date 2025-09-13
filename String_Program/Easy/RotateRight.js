function rotateRight(str,n){
    return str.slice(-n) + str.slice(0, -n);
}

console.log(rotateRight("sagar nale",2));