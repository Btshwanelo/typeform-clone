const express = require('express');

const router = express.Router();

const {
  getAllQuestions,
  addQuestion
} = require('../controller/questions')


router.route('/').get(getAllQuestions).post(addQuestion)

module.exports = router