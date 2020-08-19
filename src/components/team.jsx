import React from 'react';

function Team({match}) {
    return (
        <div className="team-container">
        <div className="team-logo"></div>
        <div className="team-sc">
          <div className="team-sc-t team-text">{match.score}</div>
        </div>
        <div className="team">
          <span className="team-text">{match.team}</span>
          <span className="a-player-card"></span>
          </div>
      </div>
    )
};

export default Team;