var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (!storage[count]) {
      storage[count] = value;
      count++;
    }
  };

  someInstance.dequeue = function() {
    var first = Object.keys(storage)[0];
    var temp = storage[first];
    delete storage[first];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
