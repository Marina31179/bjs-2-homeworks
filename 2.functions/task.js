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
  let Avg = avg.toFixed(2);
  return { min: min, max: max, avg: Avg };
}



// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  for (let j = 0; j < arrOfArr.length; j++) {
    worker(arrOfArr[j]);
    if (worker(arrOfArr[j]) > max) {
      max = worker(arrOfArr[j]);
    }
  }
  return max;

}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    return(Math.abs(max - min));
  }
}
function makeWork(arrOfArr, worker2) {
  let Max = -Infinity;
  for (let j = 0; j < arrOfArr.length; j++) {
    worker2(arrOfArr[j]);
    if (worker2(arrOfArr[j]) > Max) {
      Max = worker2(arrOfArr[j]);
    }
  }
  return Max;

}
