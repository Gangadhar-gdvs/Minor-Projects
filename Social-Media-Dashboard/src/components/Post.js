
import React, { useState } from 'react';
import CommentList from './CommentList';
import EditPostForm from './EditPostForm';
import './Post.css';

function Post({ post, likePost, addComment, editPost, deletePost }) {
  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(post.id, comment);
      setComment('');
    }
  };

  const handleEditSubmit = (updatedContent) => {
    editPost(post.id, updatedContent);
    setIsEditing(false);
  };

  return (
    <div className="post">
      {isEditing ? (
        <EditPostForm post={post} handleEditSubmit={handleEditSubmit} />
      ) : (
        <>
          <p className="post-content">{post.content}</p>
          <button className="like-button" onClick={() => likePost(post.id)}>
            ❤️ {post.likes}
          </button>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-button" onClick={() => deletePost(post.id)}>Delete</button>
        </>
      )}
      <CommentList comments={post.comments} />
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button className="comment-button" type="submit">Post</button>
      </form>
    </div>
  );
}

export default Post;
