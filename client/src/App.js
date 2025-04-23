import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Forecast from "./Forecast";
import About from "./About";

function App() {
  return (
    <Router>
      <header style={{ padding: "1rem", background: "#0e4d92", color: "#fff" }}>
        <h1>Treasure Coast Weather</h1>
        <nav>
          <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Forecast</Link>
          <Link to="/about" style={{ color: "#fff" }}>About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Forecast />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer style={{ padding: "1rem", textAlign: "center" }}>
        © 2025 Treasure Coast Weather |{" "}
        <a
          href="https://www.patreon.com/YOURPATREON"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0e4d92" }}
        >
          Support us on Patreon
        </a>
      </footer>
    </Router>
  );
}

export default App;
