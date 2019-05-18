const Tree = function(value) {
  let newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  extend(newTree, treeMethods);
  return newTree;
};

let extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

let treeMethods = {};

treeMethods.addChild = function(value) {
  let newTree = new Tree(value);
  newTree.parent = this;

  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};

treeMethods.removeFromParent = function() {
  var index = this.parent.findChild(this.value);
  this.parent.children.splice(index, temp);
  this.parent = null;
};

treeMethods.findChild = function(target) {
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return i;
    }
  }
};

treeMethods.traverse = function(cb) {
  callback(this.value);

  this.children.forEach(child => {
    child.traverse(cb);
  });
};
/*
 * Complexity: What is the time complexity of the above functions?
  addChild = constant, O(1)
  contains = linear, O(n)
 */
