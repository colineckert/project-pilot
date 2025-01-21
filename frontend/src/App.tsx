import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/App.css";

const Home = React.lazy(() => import("@/pages/Home"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
