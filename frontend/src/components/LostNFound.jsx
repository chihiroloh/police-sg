import React, { useState, useRef, useEffect } from "react";
import "./LostNFound.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const LostNFound = () => {
  const [currentPage, setCurrentPage] = useState("page1");

  const LostNFoundRef = useRef();
  const lostItemRef = useRef();
  const lostItemCostRef = useRef();
  const whatHappenedLostRef = useRef();
  const uploadedImageLostRef = useRef();
  const dateLostRef = useRef();
  const timeLostRef = useRef();
  const locationLostRef = useRef();
  const additionalInfoLostRef = useRef();

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePage1Change = () => {
    if (LostNFoundRef.current.value === "lostItem") {
      setCurrentPage("page2-lostItem");
    } else if (LostNFoundRef.current.value === "foundItem") {
      setCurrentPage("page2-foundItem");
    } else {
      alert("Please choose a category");
    }
  };

  const handlePage2Change = () => {
    if (lostItemRef.current.value && lostItemCostRef.current.value) {
      setCurrentPage("page3-lostItem");
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const handlePage4Change = () => {
    if (
      dateLostRef.current.value &&
      timeLostRef.current.value &&
      locationLostRef.current.value
    ) {
      setCurrentPage("page5-lostItem");
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const returnToHomepage = () => {
    navigate("/Home");
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
          <button onClick={handlePage1Change}>Confirm</button>
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
          <br></br>
          <img></img>
          <br></br>

          <h3>What was lost?*</h3>
          <div>
            Provide details about the item (e.g. brand, colour, model, serial
            number, size, etc.) Be as clear and specific as possible.
          </div>
          <input
            type="text"
            placeholder="Enter Description"
            ref={lostItemRef}
          ></input>
          <br></br>

          <h3>How much did the item cost?*</h3>
          <div>If you are unsure, please provide an estimated amount.</div>
          <input
            type="text"
            placeholder="Enter Description"
            ref={lostItemCostRef}
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page1")}>Back</button>
          <button onClick={handlePage2Change}>Confirm</button>
        </div>
      )}

      {currentPage === "page3-lostItem" && (
        <div className="row">
          <h3>Incident Information</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>What happened?</h3>
          <div>
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <input
            type="text"
            placeholder="Enter Description"
            ref={whatHappenedLostRef}
          ></input>
          <br></br>

          <h3>Supporting Media</h3>
          <div>Upload up to 3 images and/or videos.</div>
          <input type="file" ref={uploadedImageLostRef} multiple></input>
          <br></br>

          <button onClick={() => handlePageChange("page2-lostItem")}>
            Back
          </button>
          <button onClick={() => handlePageChange("page4-lostItem")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page4-lostItem" && (
        <div className="row">
          <h3>Date, Time & Location*</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>Date*</h3>
          <div>
            If the incident happened over a period of time, please indicate the
            full range of dates.
          </div>
          <input
            type="date"
            ref={dateLostRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Time*</h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <input
            type="time"
            ref={timeLostRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Location*</h3>
          <div>
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <input
            type="text"
            ref={locationLostRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page3-lostItem")}>
            Back
          </button>
          <button onClick={handlePage4Change}>Confirm</button>
        </div>
      )}

      {currentPage === "page5-lostItem" && (
        <div className="row">
          <h3>Additional Information</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>Additional Information (Optional)</h3>
          <div>
            Additional information that would deepen our understanding of the
            situation so that we can help you better.
          </div>
          <input
            type="text"
            ref={additionalInfoLostRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page4-lostItem")}>
            Back
          </button>
          <button onClick={() => handlePageChange("page6-lostItem")}>
            Submit
          </button>
        </div>
      )}

      {currentPage === "page6-lostItem" && (
        <div className="row">
          <h3>Complete</h3>
          <br></br>
          <img></img>
          <br></br>
          <img></img>
          <br></br>

          <div>Police Report Ref:</div>
          <br></br>

          <h3>Thank you for submitting a report.</h3>
          <div>
            Police will review your report and assess if investigations will be
            initiated. If investigations are initiated, a preliminary update
            will be provided to you within 7 working days. An official copy of
            your report and details about your assigned Investigation Officer
            will be sent to your email soon. If you require immediate Police
            assistance, please call the Police Emergency number (999) or the
            Police Hotline (6255 0000) .
          </div>
          <br></br>

          <button onClick={returnToHomepage}>Return to Home</button>
        </div>
      )}

      <NavBar />
    </div>
  );
};

export default LostNFound;
