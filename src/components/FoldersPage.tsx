// components/FoldersPage.js
import React from "react";

const FoldersPage = () => {
  const folders = [
    { name: "Math Folder", pages: ["Algebra", "Geometry"] },
    { name: "Science Folder", pages: ["Physics", "Chemistry"] },
  ];

  return (
    <div>
      <h1>Folders</h1>
      {folders.map((folder, index) => (
        <div key={index}>
          <h2>{folder.name}</h2>
          <ul>
            {folder.pages.map((page, pageIndex) => (
              <li key={pageIndex}>{page}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FoldersPage;
