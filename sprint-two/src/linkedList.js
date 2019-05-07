const LinkedList = function() {
  let list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new Node with the passed in value
    //conditional to see if it's the very first value
    //assign the new node as list.tail.next's value
    //new node is now the new tail

    let newNode = new Node(value);
    if (!list.head) {
      list.head = newNode; //4
      list.tail = newNode;
      return;
    }
    let previousVal = list.tail;

    list.tail.next = newNode; //4.next -> 5
    list.tail = newNode; //5
    list.tail.previous = previousVal;

    /*{head = null, tail = null}
    1st Node = value: 4, next = Node 5
    2nd Node = value: 5, next = null
    */
  };

  list.removeHead = function() {
    // create a temp var for former head value
    // re-assign the value of list.head
    // return the temp variable

    let temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    //check .value is the target
    //check .next is the target
    //conditional if .next === null, return false;
    //return a boolean value

    let currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  list.addToHead = function(val) {
    let newHead = new Node(val);

    if (!list.head) {
      list.head = newHead;
      list.tail = newHead;
      return;
    } else {
      newHead.next = list.head;
      list.head = newHead;
      return;
    }
  };

  list.removeTail = function() {
    let currentNode = list.head;
    while (currentNode) {
      if (currentNode.next === list.tail) {
        list.tail = currentNode;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
  };

  return list;
};

var Node = function(value) {
  let node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail: O(1), constant
  removeHead: O(1), constant
  contains: O(n), linear
 */
