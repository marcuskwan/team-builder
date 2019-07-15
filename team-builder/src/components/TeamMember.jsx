import React from "react";
import PropTypes from "prop-types";

function TeamMember(props) {
  return <div />;
}

TeamMember.propTypes = {
  teamMember: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default TeamMember;
