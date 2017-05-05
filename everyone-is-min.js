const _ = require('lodash');

const worker = function(arr) {
  let cities = {'hot': [], 'warm': []};
  _.forEach(arr, (city, key) => {
    if ( _.every(city, el => el >= 19) ) cities['hot'].push(key);
    else if ( _.some(city, el => el >= 19) ) cities['warm'].push(key);

  });
  return cities;
};

module.exports = worker;
