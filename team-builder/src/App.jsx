import React, { useState } from "react";
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  return (
    <div className="App">
      hi
      <TeamForm setTeam={setTeam} />
      <Team team={team} />
    </div>
  );
}

export default App;
