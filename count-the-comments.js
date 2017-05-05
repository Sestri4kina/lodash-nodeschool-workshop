const _ = require('lodash');

const worker = function(arr) {
  let result = [];
  _.chain(arr)
    .groupBy('username')
    .forEach((user, key) => result.push({'username': key, 'comment_count': _.size(user)}))
    .value();
  return _.sortBy(result, el => -el['comment_count']);
};

module.exports = worker;
