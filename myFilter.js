Array.prototype.myFilter = function (callback, thisArg) {
  let context = this;

  if (thisArg) {
    context = thisArg;
  }

  let newArr = [];

  for (let i = 0; i < context.length; i++) {
    if (callback.call(context, context[i], i, context)) {
      newArr.push(context[i]);
    }
  }

  return newArr;
};
