// components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const studyLists = ["Math", "Science", "History"];

  return (
    <div>
      <h1>Study Lists</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>
        {studyLists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <Link to="/folders">Go to Folders</Link>
    </div>
  );
};

export default HomePage;
