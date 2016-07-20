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


function leap(year){
  if (year % 4 === 0){
    if (year % 100 === 0){
      if (year % 400 === 0){
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function missing(arr){
  var inc = 1;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] !== inc){
      return inc;
    }
    inc += 1;
  }
}
