import React, { useState } from "react";

const PollForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => setOptions([...options, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ question, options: options.filter(opt => opt) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Poll Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      {options.map((opt, index) => (
        <input
          key={index}
          type="text"
          value={opt}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          placeholder={`Option ${index + 1}`}
          required
        />
      ))}
      <button type="button" onClick={handleAddOption}>
        Add Option
      </button>
      <button type="submit">Create Poll</button>
    </form>
  );
};

export default PollForm;
