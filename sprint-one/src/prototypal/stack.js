var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(val) {
  if (!this[Object.keys(this).length]) {
    this[Object.keys(this).length] = val;
  }
};

stackMethods.pop = function() {
  var temp = (this[Object.keys(this).length - 1]);
  delete this[Object.keys(this).length - 1];
  return temp;
};

stackMethods.size = function() {
  return Object.keys(this).length;
};
