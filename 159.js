function isArraySorted(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array.");
    }
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  try {
    console.log(isArraySorted([1, 2, 3, 4])); 
    console.log(isArraySorted([4, 3, 2, 1])); 
    console.log(isArraySorted("not an array"));
  } catch (error) {
    console.error(error.message);
  }
  