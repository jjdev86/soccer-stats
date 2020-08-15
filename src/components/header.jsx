import React from "react";

function Header() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        zIndex: "1",
      }}
      className="header"
    >
      <div style={{ backgroundColor: "#072146", height: "20px" }}>
        <div
          className="a-white-text a-logo"
          style={{ fontSize: "16px", lineHeight: "20px" }}
        >
          Liga MX
        </div>
      </div>
      <ol className="header">
        <li className="GSkImd">
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
    </div>
  );
}
export default Header;
