
import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, onAnswer }) => {
  const { question: qText, correct_answer, incorrect_answers } = question;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    onAnswer(answer === correct_answer);
  };

  return (
    <div className="question-container">
      <h3 className="question-text" dangerouslySetInnerHTML={{ __html: qText }} />
      <div className="answers">
        {answers.map((answer, index) => (
          <div key={index} className="answer-option">
            <input
              type="radio"
              id={`answer-${index}`}
              name={`quiz-${qText}`}
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerSelection(answer)}
            />
            <label htmlFor={`answer-${index}`} dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
