import React, { useState } from "react";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";

const App = () => {
  const [bugs, setBugs] = useState([]);

  const handleBugCreated = (newBug) => {
    setBugs([...bugs, newBug]);
  };

  return (
    <div className="container">
      <h1>Bug Tracker</h1>
      <BugForm onBugCreated={handleBugCreated} />
      <BugList />
    </div>
  );
};

export default App;
