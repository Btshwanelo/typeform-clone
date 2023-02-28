const Question = require('../model/Question');
const {StatusCodes} = require('http-status-codes');
const {NotFoundError} = require('../errors')

const getAllQuestions = async (req, res) => {
  const questions = await Question.find({})

  if(!questions){
    throw new NotFoundError('No questions found')
  }

  res.status(StatusCodes.OK).json({questions, count: questions.length})
}

const addQuestion = async (req, res) => {
  const question = await Question.create(req.body);
  res.status(StatusCodes.CREATED).json({question})
}

module.exports = {
  getAllQuestions,
  addQuestion
}