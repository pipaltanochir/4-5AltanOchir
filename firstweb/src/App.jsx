import React from "react";
import Dasgal1 from "./components/Dasgal1.jsx";

import "./App.css";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden ">
      <div className="absolute -top-28 w-full ">
        <div className="overflow-hidden">
          <Dasgal1/>
        </div>
      </div>
    </main>
  );
};

export default App;
