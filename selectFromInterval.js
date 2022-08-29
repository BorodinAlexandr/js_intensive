const selectFromInterval = (array, startNum, endNum) => {
  if (!Array.isArray(array)) {
    throw new Error('Передан не массив');
  } else if (isNaN(Number(startNum)) || isNaN(Number(endNum))) {
    throw new Error('Цифра начала или конца массива невалидна');
  }
  return array.filter((item) => {
    if (isNaN(Number(item))) {
      throw new Error('Массив содержит не только цифры');
    }
    if (startNum < endNum) {
      if (item >= startNum && item <= endNum) {
        return item;
      }
    } else {
      if (item >= endNum && item <= startNum) {
        return item;
      }
    }
  });
};

// Сложность алгоритма O(n)
