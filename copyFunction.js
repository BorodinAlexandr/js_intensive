const makeObjectDeepCopy = (object) => {
  const copiedObj = {};

  for (let key in object) {
    if (typeof object[key] === 'object') {
      copiedObj[key] = makeObjectDeepCopy(object[key]);
    } else {
      copiedObj[key] = object[key];
    }

    if (object[key] instanceof Array) {
      copiedObj[key] = object[key];
    }
  }
  return copiedObj;
};
