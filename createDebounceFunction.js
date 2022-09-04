function createDebounceFunction(callback, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.call(this);
    }, delay);
  };
}
