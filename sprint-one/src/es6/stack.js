class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this;
  }

  push(val) {
    if (!this[Object.keys(this).length]) {
      this[Object.keys(this).length] = val;
    }
  }


  pop() {
    let temp = this[Object.keys(this).length - 1];
    delete this[Object.keys(this).length - 1];
    return temp;
  }

  size() {
    return Object.keys(this).length;
  }
}