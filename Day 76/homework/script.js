function findCommonElements(array1, array2) {
 
    return array1.filter(element => array2.includes(element));
  }
  
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];
  
  const commonElements = findCommonElements(arr1, arr2);
  console.log(commonElements); // [4, 5]