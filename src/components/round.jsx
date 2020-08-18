import React from "react";
import Team from './team';


function Round({ round }) {
  return (
    <div className="round-container">
      {round.map((match) => (
          <Team match={match}/>
      ))}
    </div>
  );
}

export default Round;
