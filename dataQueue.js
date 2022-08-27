class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    this.data.shift();
  }

  front() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length == 0;
  }

  size() {
    return this.data.length;
  }
}

// Сложность алгоритма O(n)
