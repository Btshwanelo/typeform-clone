const express = require('express');
const app = express();
const questionExpressRoute = express.Router();

// Question schema
let QuestionSchema = require('../model/question.model');

// Get questions
questionExpressRoute.route('/').get((req, res) => {
  QuestionSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Create question
questionExpressRoute.route('/create-question').post((req, res, next) => {
  QuestionSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = questionExpressRoute;
