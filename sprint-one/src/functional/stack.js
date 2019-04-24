var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if (!(storage[count] === value)) {
      storage[count] = value;
      count++;
    }
  };

  someInstance.pop = function() {
    var temp = storage[count - 1];
    delete storage[count - 1];
    count--;
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
