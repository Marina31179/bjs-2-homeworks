"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0) {
    arr = [];
  }
  if (d === 0) {
    arr = [-b/(2*a)];
  }
  else {
    arr = [(-b + Math.sqrt(d) )/(2*a),(-b - Math.sqrt(d) )/(2*a)];
  }

  // код для задачи №1 писать здесь//
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, n) {
  let totalAmount;
  let monthAmount;
  n = totalAmount/monthAmount;
  let S = amount;
  let P = percent/12;
  monthAmount = S*(P + (P/(((1 + P)**n) - 1)));
  console.log('Вывод:', totalAmount)


  return totalAmount;
}

