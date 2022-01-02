const inputArray = [1, 3, 34, -23, 0, 5, 5, 67, 98, 2345, -546, 0, 1, 2, 345];

// Method-1, using loop (Linear Search)
const minMaxUsingLoop = (arr) => {};

// Method-2, using recursion (Divide and Conquer ) [Using Slice]
const minMaxUsingRecursion1 = (array, size) => {
  if (size === 1) {
    return { max: array[size - 1], min: array[size - 1] };
  } else if (size === 2) {
    return {
      max: array[0] > array[1] ? array[0] : array[1],
      min: array[0] < array[1] ? array[0] : array[1],
    };
  } else {
    let a1 = array.slice(0, Math.floor(size / 2));
    let result1 = minMaxUsingRecursion1(a1, a1.length);
    let a2 = array.slice(Math.floor(size / 2));
    let result2 = minMaxUsingRecursion1(a2, a2.length);
    return {
      max: result1.max > result2.max ? result1.max : result2.max,
      min: result1.min < result2.min ? result1.min : result2.min,
    };
  }
};

// Method-2, using recursion (Divide and Conquer ) [Without Using Slice]
const minMaxUsingRecursion2 = (array, start, end) => {
  if (start === end) {
    return { max: array[start], min: array[start] };
  } else if (end === start + 1) {
    return {
      max: array[start] > array[end] ? array[start] : array[end],
      min: array[start] < array[end] ? array[start] : array[end],
    };
  } else {
    console.log('start->', start, 'end->', end);
    const mid = Math.floor((end + start) / 2);
    let result1 = minMaxUsingRecursion2(array, start, mid - 1);
    let result2 = minMaxUsingRecursion2(array, mid, end);
    return {
      max: result1.max > result2.max ? result1.max : result2.max,
      min: result1.min < result2.min ? result1.min : result2.min,
    };
  }
};

const output = minMaxUsingRecursion2(inputArray, 0, inputArray.length - 1);

console.log('output--->', output);
