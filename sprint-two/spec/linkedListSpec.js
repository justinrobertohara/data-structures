describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should assign the very first node as both the head and tail', function() {
    linkedList.addToTail(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
  });

  it("should link the old tail's next value to the new tail", function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.head.next.value).to.equal(5);
    expect(linkedList.head.next.next.value).to.equal(6);
  });

  it('should assign a head if list.head is null', function() {
    expect(linkedList.head).to.equal(null);
    linkedList.addToHead(1);
    expect(linkedList.head.value).to.equal(1);
  });

  it('should reassign previous head to the new heads next value', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(1);
    expect(linkedList.head.next.value).to.equal(4);
  });

  it('should add a new head', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(1);
    expect(linkedList.head.value).to.equal(1);
  });

  it('should remove the tail', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.tail.value).to.equal(6);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should add a previous property to our list initially', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.previous).to.equal(null);
  });

  it('should add a previous property to our list with multiple properties', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.previous.value).to.equal(4);
  });

  it('should contain a previous property to our list initally in our a Add To head method', function() {
    linkedList.addToHead(5);
    linkedList.addToHead(6);
    linkedList.addToHead(10);
    expect(linkedList.head.previous).to.equal(null);
  });
});
