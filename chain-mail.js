const _ = require('lodash');

const worker = function(arr) {
  return _.chain(arr)
  .map(el => `${el.toUpperCase()}CHAINED`)
  .sortBy(el => el);
};

module.exports = worker;
