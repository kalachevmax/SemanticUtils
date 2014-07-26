

/**
 * @param {*} el Element.
 * @param {!Array} arr Array.
 */
utils.arr.indexOf = function(el, arr) {
  if (typeof arr.indexOf === 'function') {
    return arr.indexOf(el);
  }

  var i = 0,
      l = arr.length;

  while (i < l) {
    if (arr[i] === el) {
      return i;
    }

    i += 1;
  }

  return -1;
};
