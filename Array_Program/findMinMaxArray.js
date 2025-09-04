function findMinMaxArr(arr){
    let min = arr[0],max=arr[0];
    
    for(let num of arr){
        if(num < min) min=num;
        if(num> max) max= num;
    }
    console.log("Array=",arr);
    console.log("Minimum value=",min);
    console.log("Maximum value=",max);
};

findMinMaxArr([5,4,6,7,2,3,1,90,45]);