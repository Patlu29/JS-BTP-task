// for each
let arr = [1, 3, 5, 6, 7, 9]

arr.forEach((item) => {
    console.log(item * item)
})

let arrayObject = ["prakash", "20", {dept: "CSE", CGPA: 7.5}, "lazy"]

arrayObject.forEach((a, b, c) => {
    console.log(a, b, c)
})

// sort

let numbers = [23, 12, 2, 56, 78]
let words = ["prakash", "akash", "uma", "kali"]
words.sort()
numbers.sort((a,b) => (a-b));
console.log(numbers, words)

// map
const mapArr = [2, 4, 6, 10];
const square = mapArr.map(map);

function map(num) {
  console.log([num * 10].join(""));
}

const persons = [
    {firstname : "Prakash", lastname: "Rajan"},
    {firstname : "Akash", lastname: "Rajan"},
    {firstname : "Uma", lastname: "Mageshwari"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    console.log([item.firstname,item.lastname].join(" "));
  }

// filter
function even(num){
  return num % 2 == 0
}
const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(even)

console.log(integers)
