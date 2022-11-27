module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      questionText: String,
      answer1: String,
      answer2: String,
      answer3: String,
      answer4: String,
      correctAnswer: String,
    },
    { timestamps: true },
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Question = mongoose.model('question', schema);
  return Question;
};
