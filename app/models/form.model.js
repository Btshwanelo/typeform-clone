module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      question: String,
      questionOptions: Array,
      correctIndex: String,
    },
    { timestamps: true },
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Form = mongoose.model('form', schema);
  return Form;
};
