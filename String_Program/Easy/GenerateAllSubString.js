function generateAllSubstring(str){
    let returnSubStr = [];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            returnSubStr.push(str.slice(i,j));
        }
    }
    return returnSubStr;
}
console.log(generateAllSubstring('sagar'));
console.log(generateAllSubstring('abc'));