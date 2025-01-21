let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let currentSum = 0;
let maxSum = -Infinity;

for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i]; 
    
    if (currentSum > maxSum) {
        maxSum = currentSum; 
    }

    if (currentSum < 0) {
        currentSum = 0; 
    }
}

console.log("Maximum sum of subarray is:", maxSum);