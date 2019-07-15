import React, { useState } from "react";
import TeamForm from "./components/TeamForm";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  return (
    <div className="App">
      hi
      <TeamForm />
    </div>
  );
}

export default App;
