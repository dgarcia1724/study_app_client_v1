// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import FoldersPage from "./components/FoldersPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/folders" element={<FoldersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const TopNav = () => (
  <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-10">
    <div className="flex justify-around py-2">
      <NavButton to="/" icon="home" label="Home" />
      <NavButton to="/folders" icon="folder" label="Folders" />
    </div>
  </div>
);

const NavButton = ({ to, icon, label }) => (
  <Link to={to} className="text-gray-600 flex flex-col items-center">
    <span className={`material-icons ${icon}`}>{icon}</span>
    <span className="text-xs">{label}</span>
  </Link>
);

export default App;
