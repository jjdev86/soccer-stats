import React from 'react';

function Team({match}) {
 return (
    <div className="match-container">
    <div className="team-container">
      <div className="team-container">
        <div className="team-logo"></div>
        <div className="team-sc">
          {match.score ? (
          <div className="team-sc-t">{match.score.ft[0]}</div>
          ) : (
              <div></div>
          )}
        </div>
        <div className="team">
          <span>{match.team1}</span>
          </div>
      </div>
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
 )
}; 

export default Team;