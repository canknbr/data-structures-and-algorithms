// Stacks last in, first out (LIFO)

// Queues first in, first out (FIFO)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return holdingPointer;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return undefined;
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return holdingPointer;
  }
}
