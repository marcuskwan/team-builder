import React from "react";
import PropTypes from "prop-types";

function TeamMember({ teamMember }) {
  return (
    <div className="teamMember">
      <h2>{teamMember.name}</h2>
      <p>{teamMember.email}</p>
      <p>{teamMember.role}</p>
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
