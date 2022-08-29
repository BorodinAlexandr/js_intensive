const myIterable = {
  from: 1,
  to: 4,
};

// 1. вызов for..of сначала вызывает эту функцию
myIterable[Symbol.iterator] = function () {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  if (this.to < this.from) {
    throw new Error('to меньше from');
  }
  if (typeof this.to != 'number' || typeof this.from != 'number') {
    throw new Error('from или to не число');
  }
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// теперь работает!
for (let num of myIterable) {
  console.log(num); // 1, затем 2, 3, 4, 5
}
