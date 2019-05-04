

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._resizeOn = true;
};

HashTable.prototype.insert = function(k, v) {
  if (this._resizeOn) {
    this.resize();
  }

  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = [];
  var tuple = [k, v];
  if (!this._storage.get(index)) {
    this._storage.set(index, bucket);
  } else {
    var bucket = this._storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }
    }
  }
  this._storage.get(index).push(tuple);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  for (var i = 0; i < bucket.length; ++i) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this.resize();
};

HashTable.prototype.resize = function() {
  var arr = [];

  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; ++i) {
        arr.push(bucket[i]);
      }
    }
  });

  var length = arr.length;

  if (length === (this._limit * .75)) {
    this._limit *= 2;

    this._storage = LimitedArray(this._limit);
    this._resizeOn = false;

    for (var i = 0; i < arr.length; ++i) {
      this.insert(arr[i][0], arr[i][1]);
    }

    this._resizeOn = true;

  } else if ((length === (this._limit * .25)) && ((this._limit / 2) >= 8)) {
    this._limit /= 2;

    this._storage = LimitedArray(this._limit);
    this._resizeOn = false;

    for (var i = 0; i < arr.length; ++i) {
      this.insert(arr[i][0], arr[i][1]);
    }

    this._resizeOn = true;
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
  insert: constant, O(1)
  retrieve: constant, O(1)
  remove: constant, O(1)
 */

