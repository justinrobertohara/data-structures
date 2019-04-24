var Stack = function() {
  this;
};

Stack.prototype.push = function(val) {
  if (!this[Object.keys(this).length]) {
    this[Object.keys(this).length] = val;
  }
};

Stack.prototype.pop = function() {
  var temp = this[Object.keys(this).length - 1];
  delete this[Object.keys(this).length - 1];
  return temp;
};

Stack.prototype.size = function() {
  return Object.keys(this).length;
};
