import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const CreatePoll = () => {
  const { addPoll } = useContext(GlobalContext); // Use your context function
  const [pollTitle, setPollTitle] = useState("");
  const [options, setOptions] = useState([{ text: "", votes: 0 }, { text: "", votes: 0 }]);
  const navigate = useNavigate();

  // Handle change for poll title
  const handleTitleChange = (e) => {
    setPollTitle(e.target.value);
  };

  // Handle change for options
  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index].text = event.target.value;
    setOptions(newOptions);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure the poll has a title and options
    if (!pollTitle || options.some((option) => !option.text)) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new poll object
    const newPoll = {
      id: Date.now(), // Or you can use some UUID generation
      title: pollTitle,
      options: options,
    };

    // Add poll to global state
    addPoll(newPoll);

    // Redirect to the created poll's detail page
    navigate(`/poll/${newPoll.id}`);
  };

  return (
    <div>
      <h2>Create Poll</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Poll Title:</label>
          <input
            type="text"
            value={pollTitle}
            onChange={handleTitleChange}
            placeholder="Enter poll title"
            required
          />
        </div>

        <div>
          <label>Option 1:</label>
          <input
            type="text"
            value={options[0].text}
            onChange={(e) => handleOptionChange(0, e)}
            placeholder="Option 1"
            required
          />
        </div>

        <div>
          <label>Option 2:</label>
          <input
            type="text"
            value={options[1].text}
            onChange={(e) => handleOptionChange(1, e)}
            placeholder="Option 2"
            required
          />
        </div>

        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;
