import React from "react";
import Match from './match';


function Round({ round }) {
  return (
    <div className="round-container">
      {round.map((match) => (
          <Match match={match}/>
      ))}
    </div>
  );
}

export default Round;
