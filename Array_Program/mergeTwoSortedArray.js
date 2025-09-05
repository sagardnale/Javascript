function mergeTwoSortedArray(sortArray1, sortArray2) {
  let resultArray = [],
    i = 0,
    j = 0;
  while (i < sortArray1.length && j < sortArray2.length) {
    if (sortArray1[i] < sortArray2[j]) {
      resultArray.push(sortArray1[i]);
      i++;
    } else {
      resultArray.push(sortArray2[j]);
      j++;
    }
  }
  return resultArray.concat(sortArray1.slice(i)).concat(sortArray2.slice(j));
}

let sortArray1 = [1, 2, 3, 4, 6, 12],
  sortArray2 = [5, 7, 8, 9, 11, 13];
console.log(
  "Sort Array1 = ",
  sortArray1,
  "\nSort Array2 = ",
  sortArray2,
  "\nMerged two sorted array = ",
  mergeTwoSortedArray(sortArray1, sortArray2)
);
