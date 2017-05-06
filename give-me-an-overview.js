const _ = require('lodash');

const worker = function(arr) {
  return  _.chain(arr)
    .groupBy('article')
    .map((el, key) => {
      'article': key,
      'total_orders': _.reduce(el, (acc, num) => acc + num, {})
    })
    .sortBy(el => -el['total_orders'])
    .value();
};

module.exports = worker;
