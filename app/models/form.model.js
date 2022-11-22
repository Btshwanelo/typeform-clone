module.exports = mongoose => {
  const Form = mongoose.model(
    "form",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );

  return Form;
};