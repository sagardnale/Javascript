function moveAllZeroToEnd(arr){
    let zerosCount = 0;
    let returnArray = [];
    for(let num of arr){
        if(num !=0){
            returnArray.push(num);
        }else{
            zerosCount++;
        }
    }
    while(zerosCount != 0){
        returnArray.push(0);
        zerosCount--;
    }
    return returnArray;
}

console.log(moveAllZeroToEnd([1,2,0,2,5,0,0,0,6,9,0]));