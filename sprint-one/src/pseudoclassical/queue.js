var Queue = function() {
  this;
};

Queue.prototype.enqueue = function(val) {
  if (!this[Object.keys(this).length]) {
    this[Object.keys(this).length] = val;
  }
};

Queue.prototype.dequeue = function () {
  var temp = this[Object.keys(this)[0]];
  delete this[Object.keys(this)[0]];
  return temp;
};

Queue.prototype.size = function () {
  return Object.keys(this).length;
};

