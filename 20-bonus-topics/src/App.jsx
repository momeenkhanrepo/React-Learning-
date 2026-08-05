import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [theme, settheme] = useState("Light");

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} settheme={settheme} />
    </div>
  );
};

export default App;
