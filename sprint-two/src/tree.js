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

  // if (!this.children) {
  //   this.parent = null;
  // } else {
  //   newTree.parent = [];
  //   // console.log(this.value)
  //   newTree.parent.push(this.value);
  // }

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

/*
 * Complexity: What is the time complexity of the above functions?
  addChild = constant, O(1)
  contains = linear, O(n)
 */
