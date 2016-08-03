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

function removeDup(arr){
  var seen = {};
  var final = [];

  for (var i = 0; i < arr.length; i++){
    if (seen[arr[i]]){

    } else {
      final.push(arr[i]);
      seen[arr[i]] = 1;
    }
  }
  return final;
}

function pig(str){
  var words = str.split(" ");
  var final = [];
  var vowels = ["a", "e", "i", "o", "u"];
  words.forEach(function(word){
    if (vowels.indexOf(word[0]) === -1){
      var newWord = word.slice(1) + word[0] + "ay";
      final.push(newWord);
    } else {
      newWord = word + "ay";
      final.push(newWord);
    }
  });

  return final.join(" ");
}

function same(arr1, arr2){
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

var cutoff = function(arr1, max) {
  var finalA = [];
  arr1.forEach(function(el){
    if (el < max){
      finalA.push(el);
    } else {
      finalA.push(max);
    }
  });

  return finalA;
};

function randTen(){
  var over = false;
  var answers = [];
  var seen = {};
  while (over === false){
    var randy = Math.floor(Math.random() * 100);
    if (seen[randy]){
      continue;
    } else {
      seen[randy] = 1;
      answers.push(randy);
    }

    if (answers.length === 10){
      over = true;
    }
  }
  return answers;
}

var mergeList = function(arr1, arr2){
  var merged = [];
  while (arr1.length > 0 && arr2.length > 0){
    if (arr1[0] < arr2[0]){
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  merged = merged.concat(arr1);
  merged = merged.concat(arr2);
  return merged;
};

var subSum = function(arr) {
  var sum1 = arr[0];
  var finalAnswer = [];
  var tempSum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      var sliced = arr.slice(i, j+1);
      sliced.forEach(function(el){
        tempSum += el;
      });
      if (tempSum > sum1){
        finalAnswer = sliced;
        sum1 = tempSum;
      }
      tempSum = 0;
    }
  }
  return finalAnswer;
};

var a = {1: 2, "a": 3, 4 : "yes"};
console.log(a);

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

function removeDup(arr){
  var seen = {};
  var final = [];

  for (var i = 0; i < arr.length; i++){
    if (seen[arr[i]]){

    } else {
      final.push(arr[i]);
      seen[arr[i]] = 1;
    }
  }
  return final;
}

function pig(str){
  var words = str.split(" ");
  var final = [];
  var vowels = ["a", "e", "i", "o", "u"];
  words.forEach(function(word){
    if (vowels.indexOf(word[0]) === -1){
      var newWord = word.slice(1) + word[0] + "ay";
      final.push(newWord);
    } else {
      newWord = word + "ay";
      final.push(newWord);
    }
  });

  return final.join(" ");
}

function same(arr1, arr2){
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

var cutoff = function(arr1, max) {
  var finalA = [];
  arr1.forEach(function(el){
    if (el < max){
      finalA.push(el);
    } else {
      finalA.push(max);
    }
  });

  return finalA;
};

function randTen(){
  var over = false;
  var answers = [];
  var seen = {};
  while (over === false){
    var randy = Math.floor(Math.random() * 100);
    if (seen[randy]){
      continue;
    } else {
      seen[randy] = 1;
      answers.push(randy);
    }

    if (answers.length === 10){
      over = true;
    }
  }
  return answers;
}

var mergeList = function(arr1, arr2){
  var merged = [];
  while (arr1.length > 0 && arr2.length > 0){
    if (arr1[0] < arr2[0]){
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  merged = merged.concat(arr1);
  merged = merged.concat(arr2);
  return merged;
};

var subSum = function(arr) {
  var sum1 = arr[0];
  var finalAnswer = [];
  var tempSum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      var sliced = arr.slice(i, j+1);
      sliced.forEach(function(el){
        tempSum += el;
      });
      if (tempSum > sum1){
        finalAnswer = sliced;
        sum1 = tempSum;
      }
      tempSum = 0;
    }
  }
  return finalAnswer;
};

var a = {1: 2, "a": 3, 4 : "yes"};
console.log(a);
