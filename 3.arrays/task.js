function compareArrays(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  }
  else {
    return false;
  }
}

function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0).filter(number => number % 3 === 0).map(number => number * 10);
  return resultArr;
}
