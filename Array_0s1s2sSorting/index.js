const inputArr = [1, 2, 2, 1, 0, 1, 2, 0, 0, 1, 2, 0];

const sort = (arr) => {
  let low = (mid = 0);
  let high = arr.length - 1;
  while (mid < high) {
    switch (arr[mid]) {
      case 0:
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [arr[high], arr[mid]] = [arr[mid], arr[high]];
        high--;
        break;
    }
  }
  return arr;
};

const result = sort(inputArr);

console.log(result);
