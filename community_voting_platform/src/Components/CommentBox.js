import React, { useState } from "react";

const CommentBox = ({ comments, onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    onAddComment(comment);
    setComment("");
  };

  return (
    <div>
      <h4>Comments</h4>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentBox;
