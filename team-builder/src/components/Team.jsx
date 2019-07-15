import React from "react";
import PropTypes from "prop-types";
import TeamMember from "./TeamMember";

function Team(props) {
  return <div className="team" />;
}

Team.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object),
};

export default Team;
