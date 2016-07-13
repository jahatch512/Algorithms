function mysteryScoping1() {
  let x = "out of block";
  if (true) {
    let x = "in block";
    console.log(x);
  }
  console.log(x);
}
mysteryScoping1();
