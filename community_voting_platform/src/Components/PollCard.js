import React from "react";

const PollCard = ({ poll, onVote }) => (
  <div>
    <h3>{poll.question}</h3>
    <ul>
      {poll.options.map((opt, index) => (
        <li key={index}>
          {opt.text} - {opt.votes} votes
          <button onClick={() => onVote(index)}>Vote</button>
        </li>
      ))}
    </ul>
  </div>
);

export default PollCard;
