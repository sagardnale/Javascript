    function removeDuplicateFromArray(arr){
        return [...new Set(arr)];
    }
    
    console.log(removeDuplicateFromArray([1,1,3,3,6,6,7,8,7,9,0]));