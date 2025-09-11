function toggleCase(str){
    let returnStr = '';
    for(let ch of str){
        if(ch === ch.toUpperCase()){
            returnStr = returnStr + ch.toLowerCase();
        }else{
            returnStr = returnStr + ch.toUpperCase();
        }
    }
    return returnStr;
}

console.log(toggleCase("I am sagar Nale"));