// import React, { useState } from "react";

// function SearchBox({ searchChange }) {
//   return (
//     <div className="pa2">
//       <input
//         className="pa3 ba b--green bg-lightest-blue"
//         type="search"
//         placeholder="Search Robots"
//         onChange={searchChange}
//         style={{ borderRadius: "15px", width: "300px" }}
//       ></input>
//     </div>
//   );
// }

// export default SearchBox;

// **** for use State hook***///

function SearchBox({ handleChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={handleChange}
        style={{ borderRadius: "15px", width: "400px" }}
      ></input>
    </div>
  );
}

export default SearchBox;
