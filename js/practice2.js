function mode(arr){
  var count = {};

  arr.forEach(function(el){
    if (count[el]) {
      count[el] += 1;
    } else {
      count[el] = 1;
    }

  });
  var greatestFreq = 0;
  var modey;
  for (var keys in count){
    if (count[keys] > greatestFreq){
      greatestFreq = count[keys];
      modey = keys;
    }
  }

  console.log(modey);

}

mode([1,2,2,3,4]);
