function mysteryScoping1() {
  // let x = "out of block";
  if (true) {
    // let x = "in block";
    console.log(x);
  }
  console.log(x);
}

function madLib(s1, s2, s3){
  return `We shall ${s1} the ${s2} ${s3}`
}

function printChildren(parent, ...children){
  var pString = parent + "'s children are: ";
  console.log(pString);
  children.forEach(function(child){
    console.log(child);
  })
}

console.log(printChildren("Geourg", "Cassie", "Jeff", "roger"));
