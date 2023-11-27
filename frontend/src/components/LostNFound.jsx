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
    } else if (LostNFoundRef.current.value === "foundItem") {
      setCurrentPage("page2-foundItem");
    } else {
      alert("Please choose a category");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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

      {currentPage === "page2-lostItem" && (
        <div className="row">
          <h3>Item Information*</h3>
        </div>
      )}
    </div>
  );
};

export default LostNFound;
