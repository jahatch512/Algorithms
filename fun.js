var a = [1,2,3,4,3];

var myHash = {};

for (var i = 0; i < a.length; i++) {
  var element = a[i];
  if (myHash[element] !== undefined){
    return element;
  } else {
    myHash[element] = 1;
  }
}


myHash = {"1": 1, "2": 1, "3": 1, "4": 1}
