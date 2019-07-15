import React, { useState } from "react";
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const addNewMember = newMember => setTeam([...team, newMember]);

  const editMember = editingMember =>
    setTeam(
      team.map(member =>
        member.id === editingMember.id ? editingMember : member,
      ),
    );
  return (
    <div className="App">
      <TeamForm
        addNewMember={addNewMember}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <Team team={team} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
