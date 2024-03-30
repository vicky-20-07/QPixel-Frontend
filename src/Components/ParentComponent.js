// Parent component
import React from "react";
import Scroller from "./Scroller";

function ParentComponent() {
  const handleSearch = (input) => {
    // Perform search logic
    console.log("Searching for:", input);
  };

  return (
    <div>
      {/* Pass the onClick prop as handleSearch */}
      <Scroller onClick={handleSearch} />
    </div>
  );
}

export default ParentComponent;
