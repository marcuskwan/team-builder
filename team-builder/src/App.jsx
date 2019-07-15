import React, { useState } from "react";
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const addNewMember = (event, newMember) => {
    event.preventDefault();
    setTeam([...team, newMember]);
  };
  return (
    <div className="App">
      <TeamForm addNewMember={addNewMember} />
      <Team team={team} />
    </div>
  );
}

export default App;
