
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import Question from './Question';
import Result from './Result';

axiosRetry(axios, {
  retries: 3, 
  retryDelay: (retryCount) => {
    return retryCount * 2000; 
  },
  retryCondition: (error) => {
    return error.response.status === 429;
  },
});

const Quiz = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
      .then(response => {
        setQuestions(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching questions:", error);
      });
  }, [category]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) return <Result score={score} total={questions.length} />;

  return (
    <div className="quiz">
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
