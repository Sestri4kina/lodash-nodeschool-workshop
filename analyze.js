const _ = require('lodash');

const workerFilter = function(arr) {
  let result = {},
    average = _.reduce(arr, (acc, num) => acc + num.income, 0) / _.size(arr);
  result["average"] = average;
  result["underperform"] = _.chain(arr)
      .filter(el => el.income <= average)
      .sortBy('income').value();
  result["overperform"] = _.chain(arr)
      .filter(el => el.income > average)
      .sortBy('income').value();
  return result;
};

module.exports = workerFilter;
