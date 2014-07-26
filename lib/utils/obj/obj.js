

/**
 * @param {!Object} base
 * @param {!Object} obj
 * @return {!Object}
 */
utils.obj.extend = function(base, obj) {
  for (var key in obj) {
    base[key] = obj[key];
  }

  return base;
};
