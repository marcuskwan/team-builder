import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TeamForm(props) {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const handleChanges = event => {
    event.preventDefault();
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };
  return (
    <div className="team-form">
      <form>
        <input
          onChange={handleChanges}
          name="name"
          value={memberData.name}
          placeholder="name"
          required
        />
        <input
          onChange={handleChanges}
          name="email"
          value={memberData.email}
          placeholder="email"
          type="email"
          required
        />
      </form>
      <select onChange={handleChanges} name="role" value={memberData.role}>
        <option value="role">Roles</option>
        <option value="Frontend Engineer">Frontend Engineer</option>
        <option value="Backend Engineer">Backend engineer</option>
        <option value="UI Designer">UI Designer</option>
      </select>
    </div>
  );
}

TeamForm.propTypes = {
  setTeam: PropTypes.func,
};
