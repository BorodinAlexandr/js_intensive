class Calculator {
  constructor(x, y) {
    if (isNaN(Number(x)) || isNaN(Number(y))) {
      throw new Error('x или y не число');
    }
    this.x = Number(x);
    this.y = Number(y);
  }

  setX(num) {
    if (isNaN(Number(num))) {
      throw new Error('новое значение x не число');
    }
    this.x = Number(num);
  }

  setY(num) {
    if (isNaN(Number(num))) {
      throw new Error('новое значение y не число');
    }
    this.y = Number(num);
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error('на ноль делить нельзя!');
    }
    console.log(this.x / this.y);
  }
}
