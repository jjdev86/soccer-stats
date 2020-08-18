import React from "react";

function Round({ round }) {
  return (
    <div>
      {round.map((match) => (
        <div>
           <div>
              <div>{match.team1}</div>
              <div>{match.team2}</div>
              <div>{match.date}</div>
              {match.score ? (
                <div className="a-score">{`${match.score.ft[0]} - ${match.score.ft[1]}`}</div>
              ) : (
                <div></div>
              )}
            </div>
            {/* <img src={team.team_logo} /> */}

        </div>
      ))}
    </div>
  );
}

export default Round;
