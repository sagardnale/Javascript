function makeUppercase(str){
    let returnValue ='';
    for(let i=0;i<str.length;i++){
        if(i==0){
            returnValue = returnValue + str[i].toUpperCase();  
        }else{
            returnValue = returnValue + str[i];
        }
    }
    return returnValue;
}

function capitalizeFirstLetter(str){
    let returnStr='';
    let newStrArray = str.trim().split(' ');
    for(let i=0;i<newStrArray.length;i++){
        
        returnStr = returnStr + makeUppercase(newStrArray[i]);
        if(i<newStrArray.length){
            returnStr = returnStr+ ' ';
        }
    }
    return returnStr;
}

console.log(capitalizeFirstLetter('    I am sagar nale'));