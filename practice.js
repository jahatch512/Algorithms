// prob 1

var str = "Hello World";

// var len = str.length - 1;
// var newS = "";
// for (var i = 0; i < str.length; i++){
//   newS = newS + str[(len - i)];
// }

str = str.split("")
str = str.reverse()
str = str.join("")

//prob 2

var num = 0;
var sum = 0;
while (num < 1500) {
  if ((num % 5 === 0) || (num % 3 === 0)){
    sum += num;
  }
  num++;
}
console.log(sum);
