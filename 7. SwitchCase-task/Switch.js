let input = require("prompt-sync")();

let age = Number(input("Enter your age: "));

let result;

switch (true) {
  case (age < 18):
    result = "you're not eligible for voting";
    break;
  case (age >= 18):
    result = "you're eligible for voting";
    break
  default:
    result = "Enter correct age";
}

console.log(result)