const _ = require('lodash');
const worker = function(arr) {
  return _.sortBy(arr, el => -el["quantity"];);
};

module.exports = worker;
