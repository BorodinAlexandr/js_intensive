/* function myFilter(item, index, array) {
  for (index < array.length; index++) {
    if (array[index].item > 1000000) {
      millionPlusCities.push(cities[i]);
    }
  }
}
 */

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}

Array.prototype.filter2 = function (callback, thisArg) {
  if (this == null) {
    throw new Error('Cant iterate over undefined or null');
  }

  let context = this;

  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }

  let len = O.length;

  let res = [];

  for (let i = 0; i < len; i++) {
    if (i in O) {
      let current = this[i];
      if (callback.call(context, current, i, O)) {
        res.push(current);
      }
    }
  }

  return res;
};

let prime = array.myFilter((item, index, array) => {
  return item > 10;
});

console.log(prime);
