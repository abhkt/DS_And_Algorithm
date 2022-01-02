const inputArr = [-12, 11, -13, -5, 6, -7, 5, -3, -6, 0, 12, -123, 23, 25];

const foo = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    if (arr[start] < 0) {
      start++;
    } else {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      end--;
    }
  }

  return arr;
};

const result = foo(inputArr);

console.log(result);
