import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header";
import Round from "./components/round";

function App({ seasonData }) {
  const [season, setSeason] = useState([]);

  useEffect(() => {
    // were we would fetch data from DB
    // fetch data seasonData from DB knowing that data is in order from apertura 1 - 17,
    // teams are in corresponding apertura
    // filter data by jornada

    const orderData = [];
    // get first apertura
    let round = [];
    let apertura = seasonData.matches[0].round;
    for (let i = 0; i < seasonData.matches.length; i++) {
      let curr = seasonData.matches[i].round;
      if (apertura === curr) {
        round.push(seasonData.matches[i]);
        if (i === seasonData.matches.length - 1) {
          orderData.push(round);
        }
      } else {
        orderData.push(round);
        // reset the round
        round = [];
        apertura = curr;
        round.push(seasonData.matches[i]);
      }
    }
    setSeason(orderData);
  }, []);

  return (
    <div className="App">
      <Header />
      <div id="content">
        <div
          style={{
            backgroundColor: "rgb(7, 33, 70)",
            height: "76px",
            marginBottom: "4px",
          }}
        ></div>
        <div jsName="sub-content">
          <div className="wide-screen-content">
            <div className="immersive-container tb-c">
              {season.map((bucket) => (
                <div className="game-block">
                  <div className="game-heading">
                    <div className="qJnhT">{`${bucket[0].stage} - Matchday ${bucket[0].round.split(' ')[1]} of 17`}</div>
                  </div>
                  <Round round={bucket} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
