import React from "react";
import axios from "axios";

const BugItem = ({ bug }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/bugs/${bug._id}`);
      window.location.reload(); // Refresh the page
    } catch (err) {
      console.error("Error deleting bug:", err);
    }
  };

  return (
    <div>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Status: {bug.status}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BugItem;
