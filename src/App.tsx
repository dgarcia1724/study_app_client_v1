// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import HomePage from "./components/HomePage";
import FoldersPage from "./components/FoldersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/folders" element={<FoldersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
