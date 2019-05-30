var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var firstNum = [];
var secNum = [];
input.forEach(function (element) {
firstNum.push(element.x);
})

input.forEach(function(element) {
  secNum.push(element.y)
});

var firstNumS = firstNum.map(function(num) {
return Math.pow(num, 2)
});

var secNumS = secNum.map(function(num) {
return Math.pow(num, 2)
});

var sum = firstNumS.map(function(num, i) {
  return num + secNumS[i];
});

var result = sum.map(function(num) {
  return Math.sqrt(num);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);