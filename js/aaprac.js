Array.prototype.myEach = function(cb) {
  var newb = [];
  for (var i = 0; i < this.length; i++) {
    this[i] = cb(this[i]);
  }
  return this;
};


Array.prototype.myInject = function(cb){
  var result = this[0];

  this.slice(1).myEach(function(el){
    result = cb(result, el);
  });
  return result;
};




console.log([1,2,3,4].myInject(function(res, el1){
  return res + el1;
}));
