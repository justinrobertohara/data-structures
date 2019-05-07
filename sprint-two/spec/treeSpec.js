describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it("should be able to add children to a tree's child", function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect deeply nested children', function() {
    tree.addChild(5);
    tree.children[0].addChild(4);
    tree.children[0].children[0].addChild(3);
    tree.children[0].children[0].children[0].addChild(2);
    tree.children[0].children[0].children[0].children[0].addChild(1);
    expect(tree.contains(1)).to.equal(true);
  });

  it('all nodes should have a parent property that is null before adding anything to your tree', function() {
    tree.addChild(5);
    expect(tree.parent).to.equal(null);
  });

  xit('should correctly assign parent nodes to children nodes', function() {
    tree.addChild(100);
    tree.children[0].addChild(150);
    expect(tree.children[0].children[0].parent[0]).to.equal(100);
  });

  xit('should correctly assign multiple parent nodes in an array', function() {
    tree.addChild(100);
    tree.addChild(1);
    tree.addChild(101);
    tree.children[0].addChild(150);
    tree.children[0].children[0].addChild(300);
    expect(tree.children[0].children[0].parent[0].to.equal(150));
  });
});
