var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  if (!this[Object.keys(this).length]) {
    this[Object.keys(this).length] = val;
  }
};

queueMethods.dequeue = function() {
  var temp = this[Object.keys(this)[0]];
  delete this[Object.keys(this)[0]];
  return temp;
};

queueMethods.size = function() {
  return Object.keys(this).length;
};
