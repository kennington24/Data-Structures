const List = require('./linked-list');

class Queue {
  /* Do not modify the constructor */
  constructor() {
    this.size = 0;
    this.storage = new List();
  }

  /* Adds the given item to the queue */
  enqueue(item) {
    this.storage.addToTail(item);
    this.size++;
  }

  /* Removes and returns the least recently
  added item from the queue */
  dequeue() {
    if (!this.storage.head) {
      this.store = 0;
      return null;
    }
    this.size--;
    let store = this.storage.head.value;
    this.storage.removeHead();
    return store;
  }

  /* Returns true if the queue contains no
  elements, false otherwise */
  isEmpty() {
    if ((this.size = 0)) return true;
    if (this.size > 0) return false;
  }

  /* A getter method for the length of the queue */
  get length() {
    return this.size;
  }
}

module.exports = Queue;
