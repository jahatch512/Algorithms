// prob 1

var str = "Hello World";

// var len = str.length - 1;
// var newS = "";
// for (var i = 0; i < str.length; i++){
//   newS = newS + str[(len - i)];
// }

str = str.split("");
str = str.reverse();
str = str.join("");

//prob 2

var num = 0;
var sum = 0;
while (num < 1500) {
  if ((num % 5 === 0) || (num % 3 === 0)){
    sum += num;
  }
  num++;
}

//prob 3

var val1 = 2;
var summ = 2;
var nextVal = 3;
var temp = 2;

while (nextVal < 4000000) {

  if (nextVal % 2 === 0) {
    summ = summ + nextVal;
  }
  temp = nextVal;
  nextVal = nextVal + val1;
  val1 = temp;
}
// return summ;

//prob 4

var dashes = function() {
  var output = '';
  var number = window.prompt("Enter a number");
  for (var i = 1; i <= number.length; i++) {
    if (number[i] === undefined){
      return output + number[i-1];
    }

    var old = number[i-1];
    if ((old % 2 !== 0) && (number[i] % 2 !== 0)){
      output = output + number[i-1] + '-';
    } else {
      output = output + number[i-1];
    }
  }
  return output;
};
console.log(dashes());

console.log("5" % 2);
