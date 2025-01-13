import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const PollDetails = () => {
  const { id } = useParams(); // Assume the poll ID is in the URL
  const [poll, setPoll] = useState({
    question: "Sample Poll Question",
    options: [
      { text: "Option 1", votes: 5 },
      { text: "Option 2", votes: 3 },
    ],
  });

  const handleVote = (index) => {
    const updatedOptions = [...poll.options];
    updatedOptions[index].votes += 1;
    setPoll({ ...poll, options: updatedOptions });
    console.log("Vote submitted for:", poll.options[index].text);
  };

  return (
    <div>
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map((option, index) => (
          <li key={index}>
            {option.text} - {option.votes} votes
            <button onClick={() => handleVote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollDetails;
