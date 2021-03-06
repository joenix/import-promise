/* !!
 * Code By Joenix
 * ----- ----- -----
 * Compatible ES2016+
 * ===== ===== =====
 */

module.exports = (
  group = [],
  callback = () => {},
  action = {
    each(group, callback, index) {
      for (index in group) {
        if (callback(group[index], index) === false) {
          break;
        }
      }
    },

    cip(one) {
      return one.default || one;
    }
  },

  result = {}
) => {
  return new Promise(resolve => {
    action.each(group, name => {
      result[name] = callback(name, action.cip);
    });
    resolve(result);
  });
};
