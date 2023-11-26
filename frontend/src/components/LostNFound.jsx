import React, { useState, useRef } from "react";
import "./LostNFound.css";

const LostNFound = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  const LostNFoundRef = useRef();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePage2Change = () => {
    if (LostNFoundRef.current.value === "lostItem") {
      setCurrentPage("page2-lostItem");
    } else {
      setCurrentPage("page2-foundItem");
    }
  };

  return (
    <div className="container">
      {currentPage === "page1" && (
        <div className="row">
          <h3>Nature of Incident*</h3>
          <br></br>
          <select name="type" id="type" defaultValue={""} ref={LostNFoundRef}>
            <option value="" disabled>
              Select Category
            </option>
            <option value="lostItem">I lost an item</option>
            <option value="foundItem">I found an item</option>
          </select>
          <br></br>
          <button onClick={handlePage2Change}>Confirm</button>
          <br></br>
          <div>
            For urgent and time-sensitive matters that require immediate
            attention, please contact the Police directly using the emergency
            hotline at 999.
          </div>
        </div>
      )}
    </div>
  );
};

export default LostNFound;
