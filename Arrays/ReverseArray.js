/**
 * @input: [1, 2, 3] -> expected output: [3, 2, 1]
 */
const inputArr = [1, 2, 3, -2, 0, -23];

// Method-1 using while loop
const reverseArrayUsingLoop = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
};

console.log('input', inputArr);

// Method-2 using Recursion
const reverseArrayUsingRecursion = (arr, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    // swap short syntax
    [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
    return reverseArrayUsingRecursion(arr, startIndex + 1, endIndex - 1);
  } else {
    return arr;
  }
};

const result = reverseArrayUsingRecursion(inputArr, 0, inputArr.length - 1);
console.log(result);
