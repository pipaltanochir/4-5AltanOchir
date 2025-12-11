import React from "react";
import Portfolio from "./components/Portfolio.jsx";
import "./App.css";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden ">
      <div className="absolute -top-28 w-full ">
        <div className="overflow-hidden">
          <Portfolio/>
         
        </div>
      </div>
    </main>
  );
};

export default App;
