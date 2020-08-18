import React from "react";

function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        zIndex: "1",
      }}
      className="header"
    >
      <div style={{ backgroundColor: "#072146", height: "30px"}}>
        <div
          className="a-white-text a-logo"
          style={{ fontSize: "16px", lineHeight: "20px" }}
        >
          Liga MX
        </div>
        <div className="a-logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/8f/Liga_MX.svg" height="40px" alt="liga_MX logo"></img>
        </div>
      </div>
      <ol className="header">
        <li className="GSkImd a-focus-li">
          <a href="/">MATCHES</a>
        </li>
        <li className="GSkImd">
          <a href="/stuff">NEWS</a>
        </li>
        <li className="GSkImd">
          <a href="/standings">STANDINGS</a>
        </li>
        <li className="GSkImd">
          <a href="/stats">STATS</a>
        </li>
        <li className="GSkImd">
          <a href="/players">PLAYERS</a>
        </li>
      </ol>
    </header>

  );
}
export default Header;
