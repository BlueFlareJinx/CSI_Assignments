function getFirstElement(arr, n) 
{
  if (arr == null) 
    return [];

  if (n == null) 
    return arr[0];

  if (n < 0) 
    return [];

  return arr.slice(0, n);
}

// Test Data
console.log(getFirstElement([7, 9, 0, -2]));        // 7
console.log(getFirstElement([], 3));               // []
console.log(getFirstElement([7, 9, 0, -2], 3));     // [7, 9, 0]
console.log(getFirstElement([7, 9, 0, -2], 6));     // [7, 9, 0, -2]
console.log(getFirstElement([7, 9, 0, -2], -3));    // []
