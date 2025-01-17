import React from "react";
import "../../styles/Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <h1 className="logo">Sustensive</h1>
      <div className="user-info">
        <span>Velkommen, Bruger!</span>
        <button className="logout-btn">Log ud</button>
      </div>
    </div>
  );
}

export default Topbar;
