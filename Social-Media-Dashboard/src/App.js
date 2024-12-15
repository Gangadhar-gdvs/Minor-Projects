
import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const editPost = (id, updatedContent) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, content: updatedContent } : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Social Media Dashboard </h1>
       
      </header>
      <div className="App-content">
        <PostForm addPost={addPost} />
        <PostList posts={posts} likePost={likePost} addComment={addComment} editPost={editPost} deletePost={deletePost} />
      </div>
    </div>
  );
}

export default App;
