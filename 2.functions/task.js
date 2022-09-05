// Задание 1//
function getArrayParams(arr) {
  let sum = 0;
  let min = - 100;
  let max = 100;
  let avg = sum / arr.length;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > min) {
      min = arr[i];
    }
    if (arr[i + 1] > min) {
      max = arr[i + 1];
    }
    return min, max, avg;
  }

}
getArrayParams(97, 99, 10);



// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
