import React, { useEffect, useState } from "react";
import axios from "axios";
import BugItem from "./BugItem";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bugs");
      setBugs(response.data);
    } catch (err) {
      console.error("Error fetching bugs:", err);
    }
  };

  return (
    <div>
      <h2>Bug List</h2>
      {bugs.map((bug) => (
        <BugItem key={bug._id} bug={bug} />
      ))}
    </div>
  );
};

export default BugList;
