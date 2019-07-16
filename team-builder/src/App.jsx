import React, { useState } from "react";
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";
import "./App.css";
import { Container, Row, Col } from "shards-react";

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
      <Container>
        <Row>
          <Col>
            <TeamForm
              addNewMember={addNewMember}
              memberToEdit={memberToEdit}
              editMember={editMember}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Team team={team} setMemberToEdit={setMemberToEdit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
