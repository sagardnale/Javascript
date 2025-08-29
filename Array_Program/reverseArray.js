function reverseArray(arr){
    let reverseArr =[];
    for(let i=arr.length-1;i > -1;i--){
        reverseArr.push(arr[i])
    }
    return reverseArr
}
console.log(reverseArray([1,2,3,4,5]));