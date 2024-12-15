
import React from 'react';

const CategorySelect = ({ categories, onSelect }) => {
  return (
    <div className="category-select">
      <h2>Select a Category</h2>
      {categories.map((category) => (
        <button key={category.id} onClick={() => onSelect(category.id)}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelect;
