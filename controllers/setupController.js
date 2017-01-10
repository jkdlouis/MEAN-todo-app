var Todos = require('../models/todoModels');

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res) {
    //seed database
    var starterTodos = [
      {
        username: 'test',
        todo: 'learn Angular 2',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'learn Nodejs',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'learn ExpressJs',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'learn MongoDb',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(error, results) {
      res.send(results);
    });
  });
};