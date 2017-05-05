const _ = require('lodash');
const worker = function(arr) {
  _.forEach(arr, city => {
    if (city.population >= 1) city.size = 'big';
    else if (city.population < 1 && city.population >= 0.5) city.size = 'med';
    else city.size = 'small';
  });
  return arr;
};

module.exports = worker;
