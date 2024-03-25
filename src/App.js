import React from "react";
import Essenkarte from "./components/Essenkarte";

function App() {
  return (
    <div>
      <div className="welcome">
        <img className="logo" src="/img/logo.png" alt="Logo" />
        <h1>Essenplanner</h1>
      </div>
      <div className="wrapper">
        <div className="header">
          <h2>März 2024</h2>
        </div>

        <div className="content">

          <Essenkarte />

        </div>

        <div className="footer">

        </div>

      </div>
    </div>
  );
}

export default App;
