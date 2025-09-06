function kthLargestNumber(arr,k){
    arr.sort((a,b)=>b-a);
    return arr[k-1];
}

console.log(kthLargestNumber([3, 2, 1, 5, 6, 4], 2)); 