import React from "react";
import PropTypes from "prop-types";
import TeamMember from "./TeamMember";

function Team({ team, setMemberToEdit }) {
  return (
    <div className="team">
      {team.map(teamMember => (
        <TeamMember
          teamMember={teamMember}
          setMemberToEdit={setMemberToEdit}
          key={teamMember.name}
        />
      ))}
    </div>
  );
}

Team.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object),
};

export default Team;
