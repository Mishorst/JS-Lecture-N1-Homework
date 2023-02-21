"use strict";

// N#1
// თუ a და b განსხვავებული ტიპებია მაგრამ ერთი მნიშვნელობა აქვს, ფუნქცია "ტოლია" -ს დაგვიბრუნებს ორი უდრისის (==) გამო.
const equal = function (a, b) {
  if (a == b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
};

console.log(equal(2, 3));
console.log(equal("3", 3));

// N#2
// ფუნქციას შეყვანილი ტემპერატურა გადაყავს ცელსიუსში
const temperatureFarToCel = function (a) {
  if (typeof a === typeof 1) {
    return ((a - 32) * 5) / 9;
  } else {
    return false;
  }
};

console.log(temperatureFarToCel(140));
console.log(temperatureFarToCel("50"));
console.log(temperatureFarToCel(-140));

// N#3
// ფუნქცია სრულებს გამოთვლას, თუ კი შეყვანილი მნიშვნელობა არ იქნება რიცხვი ან ოპერაცია არ იქნება მოცემულიდან რომელიმე დააბრუნებს false -ს
const mathOperation = function (a, b, operation) {
  if (typeof a === typeof 1 && typeof b === typeof 1) {
    switch (operation) {
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "+":
        return a + b;
      case "-":
        return a - b;
      default:
        return false;
    }
  } else {
    return false;
  }
};

console.log(mathOperation(3, 4, "-"));
console.log(mathOperation(43, 33, "+"));
console.log(mathOperation(4, 5, "*"));
console.log(mathOperation(8, 4, "/"));
console.log(mathOperation(8, "4", "/"));
console.log(mathOperation(8, 4, "m"));
