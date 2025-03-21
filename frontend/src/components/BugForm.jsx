import React, { useState } from "react";
import axios from "axios";

const BugForm = ({ onBugCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/bugs", {
        title,
        description,
      });
      onBugCreated(response.data);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Error creating bug:", err);
    }
  };

  return (
    <form className="bug-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Report Bug</button>
    </form>
  );
};

export default BugForm;
