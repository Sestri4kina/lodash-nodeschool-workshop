const _ = require('lodash');

const workerTemplate = function(obj) {
  return _.template("Hello <%= name %> (logins: <%= _.size(login) %>)")(obj);
};

module.exports = workerTemplate;
