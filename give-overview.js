const _ = require('lodash');

const workerReduce = function(arr) {
  let result = [];
  _.chain(arr)
    .groupBy('article')
    .forEach((el, key) => {
      let newObj = {
        'article': +key,
        'total_orders': _.reduce(el, (acc, num) => acc + num.quantity, 0)
      };
      result.push(newObj);
    })
    .value();
    return _.sortBy(result, el => -el['total_orders']);
};

module.exports = workerReduce;
