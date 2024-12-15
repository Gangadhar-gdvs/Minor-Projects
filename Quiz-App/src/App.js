
import React, { useState } from 'react';
import CategorySelect from './components/CategorySelect';
import Quiz from './components/Quiz';
import './App.css';

const categories = [
  { id: 9, name: 'General Knowledge' },
  { id: 17, name: 'Science & Nature' },
  { id: 21, name: 'Sports' },
];

const App = () => {
  const [category, setCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setCategory(categoryId);
  };

  return (
    <div className="app">
      <h1>Online Quiz App</h1>
      {category ? (
        <Quiz category={category} />
      ) : (
        <CategorySelect categories={categories} onSelect={handleCategorySelect} />
      )}
    </div>
  );
};

export default App;
