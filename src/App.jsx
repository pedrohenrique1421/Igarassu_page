import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Importando Routes e Link
import "./App.css";

import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
