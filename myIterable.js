const myIterable = {
  from: 1,
  to: 4,
};

myIterable[Symbol.iterator] = function () {
  if (this.to < this.from) {
    throw new Error('to меньше from');
  }
  if (typeof this.to != 'number' || typeof this.from != 'number') {
    throw new Error('from или to не число или не указаны');
  }
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let item of myIterable) {
  console.log(item);
}
