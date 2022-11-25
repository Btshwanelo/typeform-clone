import React from 'react';
import './style.css';
import QuestionForm from '../../components/add-question-form';
import { useAddQuestionMutation } from '../../redux/services/quizCore';

const AddQuestion = () => {
  const [addQuestion] = useAddQuestionMutation();
  return (
    <div>
      <QuestionForm addQuestion={addQuestion} />
    </div>
  );
};

export default AddQuestion;
