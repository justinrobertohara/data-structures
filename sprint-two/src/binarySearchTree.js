const BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
  let newBranch = new BinarySearchTree(value);

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
  } else if (this.right && value > this.value) {
    return this.right.contains(value);
  } else if (this.left && value < this.value) {
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

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  //stack of value to run the callback
  ////while left and right exist
  //push left onto the stack
  //push right onto stack if they exist
  //callback on all items on the stack

  let queue = [];
  cb(this.value);

  if (this.left) {
    queue.push(this.left);
  }
  if (this.right) {
    queue.push(this.right);
  }

  while (queue.length > 0) {
    queue.forEach(node => cb(node.value));

    queue.forEach(node => {
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      queue.shift();
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert =  logarthmic O(log n)
  contains = logarthmic O(log n)
  depthFirstLog = linear 0(n)
 */
