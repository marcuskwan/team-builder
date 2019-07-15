import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TeamForm(props) {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    role: "",
  });
  return (
    <div className="team-form">
      <form>
        <input
          name="name"
          value={memberData.name}
          placeholder="name"
          required
        />
        <input
          name="email"
          value={memberData.email}
          placeholder="email"
          type="email"
          required
        />
      </form>
      <select onChange={() => {}} value={{}}>
        <option value="role">Roles</option>
        <option value="Frontend Engineer">Frontend Engineer</option>
        <option value="Backend Engineer">Backend engineer</option>
        <option value="UI Designer">UI Designer</option>
      </select>
    </div>
  );
}

TeamForm.propTypes = {};
