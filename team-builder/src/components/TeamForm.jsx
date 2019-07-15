import React, { useState, useEffect } from "react";
import { Form, FormInput, FormGroup, FormSelect, Button } from "shards-react";
import PropTypes from "prop-types";
const uuidv4 = require("uuid/v4");

export default function TeamForm({ addNewMember, memberToEdit, editMember }) {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    role: "",
    id: uuidv4(),
  });
  const handleChanges = event => {
    event.preventDefault();
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };
  const handleAdd = event => {
    event.preventDefault();
    addNewMember(memberData);
    setMemberData({
      name: "",
      email: "",
      role: "",
      id: uuidv4(),
    });
  };
  const handleEdit = event => {
    event.preventDefault();
    editMember(memberData);
    setMemberData({
      name: "",
      email: "",
      role: "",
      id: uuidv4(),
    });
  };
  useEffect(() => setMemberData(memberToEdit), [memberToEdit]);
  return (
    <div className="team-form">
      <Form onSubmit={handleAdd}>
        <h2>Add New Member</h2>
        <FormGroup>
          <FormInput
            onChange={handleChanges}
            name="name"
            value={memberData.name}
            placeholder="name"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            onChange={handleChanges}
            name="email"
            value={memberData.email}
            placeholder="email"
            type="email"
            required
          />
        </FormGroup>

        <FormSelect
          onChange={handleChanges}
          name="role"
          value={memberData.role}>
          <option value="" selected disabled hidden>
            Roles
          </option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Backend Engineer">Backend engineer</option>
          <option value="UI Designer">UI Designer</option>
        </FormSelect>
        {memberData.role && <Button>Submit</Button>}
        {memberData.role && memberToEdit && (
          <Button onClick={handleEdit} theme="info">
            Update
          </Button>
        )}
      </Form>
    </div>
  );
}

TeamForm.propTypes = {
  memberToEdit: PropTypes.object,
  addNewMember: PropTypes.func,
  editMember: PropTypes.func,
};
