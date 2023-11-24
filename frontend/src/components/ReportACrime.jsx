import React, { useState, useRef } from "react";

const ReportACrime = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  //   const [input1, setInput1] = useState("");
  //   const [input2, setInput2] = useState("");

  const crimeTypeRef = useRef();
  const stolenRef = useRef("");
  const costRef = useRef("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (event, inputRef) => {
    inputRef.current = event.target.value;
  };

  const handlePage2Change = (page) => {
    if (crimeTypeRef.current) {
      setCurrentPage(page);
    } else {
      alert("Please choose the type of crime you wish to report");
    }
  };

  const handlePage3Change = (page) => {
    if (stolenRef.current && costRef.current) {
      setCurrentPage(page);
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  return (
    <>
      {/* <nav>
        <div></div>
        <button onClick={() => handlePageChange("page1")}>Next</button>
      </nav> */}

      {currentPage === "page1" && (
        <div>
          <img></img>
          <h5>Important Notice: Making False Reports</h5>
          <div>
            Before proceeding with your report, please be aware that making a
            false report is considered a serious offence. Under Section 182 of
            the Penal Code 1871, convicted individuals will face an imprisonment
            term of up to 2 years, a fine, or both. The Police takes a serious
            view of any person who engages in fraudulent or dishonest conducts.
            Offenders will be dealt with severely in accordance with the law.
          </div>
          <button onClick={() => handlePageChange("page2")}>
            I acknowledge and wish to proceed
          </button>
        </div>
      )}

      {currentPage === "page2" && (
        <div>
          <h3>Nature of Incident*</h3>
          <select defaultValue={""} ref={crimeTypeRef}>
            <option value="" disabled>
              Select Category
            </option>
            <option value="Theft">
              Dishonest Misappropriation of Property (Theft)
            </option>
            <option value="Scams">Scams</option>
            <option value="Voyeurism">Voyeurism</option>
            <option value="Others">Other</option>
          </select>
          <button onClick={() => handlePage2Change("page3")}>Confirm</button>
          <div>
            For urgent and time-sensitive matters that require immediate
            attention, please contact the Police directly using the emergency
            hotline at 999.
          </div>
        </div>
      )}

      {currentPage === "page3" && (
        <div>
          <h3>Item Information*</h3>
          <img></img>
          <h3>What was stolen?</h3>
          <div>
            Provide details about the item (e.g. brand, colour, model, serial
            number, size, etc.) Be as clear and specific as possible. Enter
            Description
          </div>
          <h3>How much did the item cost?*</h3>
          <input
            type="text"
            placeholder="Enter Description"
            ref={stolenRef}
            onChange={(event) => handleInputChange(event, stolenRef)}
          ></input>
          <div>If you are unsure, please provide an estimated amount.</div>
          <input
            type="text"
            placeholder="Enter Description"
            ref={costRef}
            onChange={(event) => handleInputChange(event, costRef)}
          ></input>
          <button
            onClick={() => handlePage3Change("page2")}
            diasbled={!stolenRef || !costRef}
          >
            Back
          </button>
          <button
            onClick={() => handlePage3Change("page4")}
            diasbled={!stolenRef || !costRef}
          >
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page4" && (
        <div>
          <h3>Incident Information</h3>
          <img></img>
          <h3>What happened?</h3>
          <div>
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <input></input>
          <h3>Supporting media</h3>
          <div>Upload up to 3 images and/or videos</div>
          <input type="file"></input>
          <button onClick={() => handlePageChange("page3")}>Back</button>
          <button onClick={() => handlePageChange("page5")}>Confirm</button>
        </div>
      )}

      {currentPage === "page5" && (
        <div>
          <h3>Incident Information</h3>
          <img></img>
          <h3>What happened?</h3>
          <div>
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <input></input>
          <h3>Supporting media</h3>
          <div>Upload up to 3 images and/or videos</div>
          <input type="file"></input>
          <button onClick={() => handlePageChange("page3")}>Back</button>
          <button onClick={() => handlePageChange("page5")}>Confirm</button>
        </div>
      )}
    </>
  );
};

export default ReportACrime;
