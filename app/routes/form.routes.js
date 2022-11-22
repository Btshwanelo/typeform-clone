module.exports = (app) => {
  const forms = require('../controllers/form.controller.js');

  var router = require('express').Router();

  // Create a new Tutorial
  router.post('/', forms.create);

  // Retrieve all Tutorials
  router.get('/', forms.findAll);

  app.use('/api/forms', router);
};
