

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
    value: node,
    edges: []
  };
  this[newNode.value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < Object.keys(this).length; ++i) {
    if (this[Object.keys(this)[i]].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var target = this[node];

  if (target.edges.length > 0) {
    for (let i = 0; i < target.edges.length; i++) {
      this.removeEdge(target.value, target.edges[i]);
    }
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var to = this[toNode];
  var from = this[fromNode];

  if (from === undefined || to === undefined) {
    return false;
  }

  if (to.edges.length > 0) {
    for (var i = 0; i < to.edges.length; i++) {
      if (fromNode === Number(to.edges[i])) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var to = this[toNode];
  var from = this[fromNode];

  to.edges.push(Number(fromNode));
  from.edges.push(Number(toNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var to = this[toNode];
  var from = this[fromNode];

  from.edges.splice(from.edges.indexOf(to.value), 1);
  to.edges.splice(to.edges.indexOf(from.value), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: constant, O(1)
  contains: linear, O(n)
  removeNode: linear, O(n)
  hasEdge: linear, O(n)
  addEdge: constant, O(1)
  removeEdge: linear, O(n)
  forEachNode: linear, O(n)
 */


