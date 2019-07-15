import React, { useState } from "react";
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});
  const addNewMember = newMember => {
    setTeam([...team, newMember]);
  };
  return (
    <div className="App">
      <TeamForm
        addNewMember={addNewMember}
        setMemberToEdit={setMemberToEdit}
        memberToEdit={memberToEdit}
      />
      <Team team={team} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
