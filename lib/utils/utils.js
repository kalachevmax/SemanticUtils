

/**
 * @namespace
 */
var utils = {};


/**
 * @namespace
 */
utils.arr = {};


/**
 * @namespace
 */
utils.obj = {};


/**
 * @namespace
 */
utils.fn = {};


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
