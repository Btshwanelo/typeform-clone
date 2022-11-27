const db = require('../models');
const Question = db.question;

// Create and Save a new Question
exports.create = (req, res) => {
  // Validate request
  if (!req.body.questionText) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a Question
  const question = new Question({
    questionText: req.body.questionText,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
    correctAnswer: req.body.correctAnswer,
  });

  // Save Question in the database
  Question.save(question)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    });
};

// Retrieve all Questions from the database.
exports.findAll = (req, res) => {
  // const questionText = req.query.questionText;
  // var condition = questionText
  //   ? {
  //       $questionText: 'i',
  //       $answer1: 'i',
  //       $answer2: 'i',
  //       $answer3: 'i',
  //       $answer4: 'i',
  //       $correctAnswer: 'i',
  //     }
  //   : {};

  Question
    .find((error, data) => {
      if (error) {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving tutorials.',
        });
      } else {
        res.send(data);
      }
    });
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || 'Some error occurred while retrieving tutorials.',
    //   });
    // });
};
