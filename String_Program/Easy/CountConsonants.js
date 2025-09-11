function countConsonants(str){
    let count = 0;
    for(let ch of str){
        if(ch != 'a' || ch != 'e' || ch != 'i' || ch != 'o' || ch != 'u'){
            count++;
        }
    }
    return count;
}
console.log(countConsonants('I am sagar nale'));