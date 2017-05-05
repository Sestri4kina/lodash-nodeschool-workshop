var _ = require('lodash');

var worker = function(arr) {
  return _.filter(arr, {'active': true});
};

module.exports = worker;
