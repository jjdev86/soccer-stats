import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
function App({teams}) {
  return (
    <div className="App">
      <Header />
      {/* <div>
        <ul>
        {teams.map((team) => 
          <div>
            <li>{team.team_name}</li>
            <img src={team.team_logo} />
          </div>
        )}
        </ul>

      </div> */}

    </div>
  );
}

export default App;
