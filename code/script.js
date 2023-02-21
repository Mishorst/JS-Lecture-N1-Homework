"use strict";

// N#1
const equal = function (a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
};

console.log(equal(2, 3));
console.log(equal("3", 3));
console.log(equal("3", "3"));
