
import React, { useState } from 'react';
import './EditPostForm.css';

function EditPostForm({ post, handleEditSubmit }) {
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditSubmit(content);
  };

  return (
    <form className="edit-post-form" onSubmit={handleSubmit}>
      <textarea
        className="edit-post-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="edit-post-button" type="submit">Save</button>
    </form>
  );
}

export default EditPostForm;
