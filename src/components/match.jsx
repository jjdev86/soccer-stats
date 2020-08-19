import React from "react";
import Team from "./team";

function Match({ match }) {
  const team1 = {};
  team1.team = match.team1;
  team1.score = match.score ? match.score.ft[0] : "";

  const team2 = {};
  team2.team = match.team2;
  team2.score = match.score ? match.score.ft[1] : "";
  return (
    <div className="match-container">
      <div className="a-match-group">
        <div className="match-status">
          {match.score ? <div className="full-time">FT</div> : <div></div>}
          <div className="event-date">event date</div>
        </div>
        <Team match={team1} />
        <Team match={team2} />
      </div>
    </div>
  );
}

export default Match;
