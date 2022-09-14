// Задание 1//
function getArrayParams(arr) {
  let sum = 0;
  let min;
  let max;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };

}
// Задание 2
function func(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    if (func(arrOfArr[i]) > max) {
      max = funcResult;
    }
  }
  return max;

}

// Задание 3
function func(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return(Math.abs(max - min));
}
function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    }

  }
  return max;
}
