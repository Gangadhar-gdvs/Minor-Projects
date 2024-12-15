
import React from 'react';
import './CommentList.css';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <p key={index} className="comment">{comment}</p>
      ))}
    </div>
  );
}

export default CommentList;
