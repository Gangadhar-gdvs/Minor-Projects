
import React, { useState } from 'react';
import './PostForm.css';

function PostForm({ addPost }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      const newPost = {
        id: Date.now(),
        content,
        likes: 0,
        comments: []
      };
      addPost(newPost);
      setContent('');
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        className="post-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button className="post-button" type="submit">Post</button>
    </form>
  );
}

export default PostForm;
