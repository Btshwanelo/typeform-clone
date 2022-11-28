const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = new Schema(
  {
    questionText: String,
    options: [
      { answer: String },
      { answer: String },
      { answer: String },
      { answer: String },
    ],
    correctAnswer: String,
  },
  {
    collection: 'questions',
  },
);

module.exports = mongoose.model('questionSchema', questionSchema);
