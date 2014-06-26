

/**
 * @namespace
 */
var utils = {};


/**
 *
 */
utils.nop = function() {};


/**
 * @param {Function} Child
 * @param {Function} Base
 */
utils.inherit = function(Child, Base) {
  var F = function() {};
  F.prototype = Base.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
};


/**
 * @param {!Object} base
 * @param {!Object} obj
 * @return {!Object}
 */
utils.extend = function(base, obj) {
  for (var key in obj) {
    base[key] = obj[key];
  }

  return base;
};


/**
 * @param {*} el Element.
 * @param {!Array} arr Array.
 */
utils.indexOf = function(el, arr) {
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
