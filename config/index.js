var configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
        '@ds159208.mlab.com:59208/node-todo-app';
  }
};