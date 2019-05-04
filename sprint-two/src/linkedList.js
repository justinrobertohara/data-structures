var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new Node with the passed in value
    //conditional to see if it's the very first value
    //assign the new node as list.tail.next's value
    //new node is now the new tail

    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode; //4
      list.tail = newNode;
      return;
    }
    list.tail.next = newNode; //4.next -> 5
    list.tail = newNode; //5

    /*{head = null, tail = null}
    1st Node = value: 4, next = Node 5
    2nd Node = value: 5, next = null
    */
  };

  list.removeHead = function() {
    // create a temp var for former head value
    // re-assign the value of list.head
    // return the temp variable

    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    //check .value is the target
    //check .next is the target
    //conditional if .next === null, return false;
    //return a boolean value

    var currentNode = list.head;
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
    var newHead = new Node(val);

    if (list.head === null) {
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
    var currentNode = list.head;
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
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail: O(1), constant
  removeHead: O(1), constant
  contains: O(n), linear
 */
