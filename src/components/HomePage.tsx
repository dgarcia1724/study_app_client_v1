// components/HomePage.js
import React from "react";
import Header from "./Header";

const HomePage = () => {
  const studyLists = ["Math", "Science", "History", "English"];

  const handleSearch = (query) => {
    console.log(`Search for: ${query}`);
  };

  const handleNew = () => {
    console.log("Create new study list");
  };

  const handleFilter = () => {
    console.log("Filter by: recent or title");
  };

  return (
    <div className="flex-grow">
      <Header
        title="Lists"
        onSearch={handleSearch}
        onNew={handleNew}
        onFilter={handleFilter}
      />
      <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-3">
        {studyLists.map((list, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 shadow">
            {list}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
