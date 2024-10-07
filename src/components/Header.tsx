// components/Header.js
import React from "react";

const Header = ({ title, onSearch, onNew, onFilter }) => (
  <div className="px-4 py-2 bg-white shadow-sm sticky top-0 z-10 space-y-2">
    {/* First Row: Title and New button */}
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <button onClick={onNew} className="p-2 bg-blue-500 text-white rounded">
        New +
      </button>
    </div>

    {/* Second Row: Filter and Search */}
    <div className="flex justify-between items-center">
      <button onClick={onFilter} className="p-2 border rounded">
        Filter
      </button>
      <input
        type="text"
        placeholder={`Search ${title.toLowerCase()}`}
        className="ml-4 px-2 py-1 border rounded w-2/3"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  </div>
);

export default Header;
