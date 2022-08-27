class Stack {
  constructor() {
    this.data = [];
  }

  push(arg) {
    this.data.push(arg);
  }

  pop() {
    this.data.pop();
  }

  peek() {
    return this.data.slice(-1);
  }

  length() {
    return this.data.length;
  }
}
