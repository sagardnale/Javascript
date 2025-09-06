function findDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let index = Math.abs(arr[i]) - 1;
    if (arr[index] < 0) duplicates.push(Math.abs(arr[i]));
    else arr[index] = -arr[index];
  }
  return duplicates;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); 

