var BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newBranch = new BinarySearchTree(value);

  if (this.value === value) {
    return;
  }

  if (newBranch.value > this.value && this.right === null) {
    this.right = newBranch;
  } else if (newBranch.value > this.value && this.right) {
    this.right.insert(value);
  } else if (newBranch.value < this.value && this.left === null) {
    this.left = newBranch;
  } else {
    this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.right && (value > this.value)) {
    return this.right.contains(value);
  } else if (this.left && (value < this.value)) {
    return this.left.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//insert =  logarthmic O(log n)
//contains = logarthmic O(log n)
//depthFirstLog = linear 0(n)
