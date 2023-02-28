const mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      required: [true, 'Please provide question'],
      minLength: 10
    },
    options: {
      type: Array,
      required: [true, 'Please provide question options'],
    },
    correctAnswer: {
      type:String,
      required: [true, 'Please provide answer']
    },
  },
  {
    timestamps: true 
  },
);

module.exports = mongoose.model('Question', QuestionSchema);
