import React from "react";
import PropTypes from "prop-types";

function TeamMember({ teamMember, setMemberToEdit }) {
  return (
    <div className="teamMember">
      <h2>{teamMember.name}</h2>
      <p>{teamMember.email}</p>
      <p>{teamMember.role}</p>
      <button onClick={() => setMemberToEdit(teamMember)}>Edit</button>
    </div>
  );
}

TeamMember.propTypes = {
  teamMember: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default TeamMember;
