import React, { useState, useRef } from "react";
import "./ReportACrime.css";

const ReportACrime = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  //   const [input1, setInput1] = useState("");
  //   const [input2, setInput2] = useState("");

  const crimeTypeRef = useRef();
  const stolenRef = useRef("");
  const costRef = useRef("");
  const whatHappenedRef = useRef("");
  const uploadedImageRef = useRef();
  const dateRef = useRef("");
  const timeRef = useRef("");
  const locationRef = useRef("");
  const additionalInfoRef = useRef("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleInputChange = (event, inputRef) => {
    inputRef.current = event.target.value;
  };

  const handlePage2Change = (page) => {
    if (crimeTypeRef.current.value) {
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

  const handlePage5Change = (page) => {
    if (dateRef.current && timeRef.current && locationRef.current) {
      setCurrentPage(page);
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  return (
    <div className="container">
      {currentPage === "page1" && (
        <div className="row">
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
          <br></br>
          <button onClick={() => handlePageChange("page2")}>
            I acknowledge and wish to proceed
          </button>
        </div>
      )}

      {currentPage === "page2" && (
        <div className="row">
          <h3>Nature of Incident*</h3>
          <select name="type" id="type" defaultValue={""} ref={crimeTypeRef}>
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
          <br></br>
          <button
            onClick={() => handlePage2Change("page3-theft")}
            // disabled={!crimeTypeRef.current}
          >
            Confirm
          </button>
          <br></br>
          <div>
            For urgent and time-sensitive matters that require immediate
            attention, please contact the Police directly using the emergency
            hotline at 999.
          </div>
        </div>
      )}

      {currentPage === "page3-theft" && (
        <div className="row">
          <h3>Item Information*</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>What was stolen?*</h3>
          <div>
            Provide details about the item (e.g. brand, colour, model, serial
            number, size, etc.) Be as clear and specific as possible.
          </div>
          <input
            type="text"
            placeholder="Enter Description"
            ref={stolenRef}
            // onChange={(event) => handleInputChange(event, stolenRef)}
          ></input>
          <br></br>

          <h3>How much did the item cost?*</h3>
          <div>If you are unsure, please provide an estimated amount.</div>
          <input
            type="text"
            placeholder="Enter Description"
            ref={costRef}
            // onChange={(event) => handleInputChange(event, costRef)}
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page2")}>Back</button>
          <button
            onClick={() => handlePage3Change("page4")}
            // disabled={!stolenRef.current || !costRef.current}
          >
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page4" && (
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
          <br></br>
          <input
            type="text"
            placeholder="Enter Description"
            ref={whatHappenedRef}
          ></input>
          <br></br>

          <h3>Supporting Media</h3>
          <div>Upload up to 3 images and/or videos</div>
          <input type="file" ref={uploadedImageRef}></input>
          <br></br>

          <button onClick={() => handlePageChange("page3-theft")}>Back</button>
          <button onClick={() => handlePageChange("page5")}>Confirm</button>
        </div>
      )}

      {currentPage === "page5" && (
        <div className="row">
          <h3>Date, Time & Location*</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>Date*</h3>
          <div>
            If the incident happened over a period of time, please indicate the
            full range of dates. (Format: DD/MM/YYYY, e.g. 26/05/2021)
          </div>
          <input
            type="text"
            ref={dateRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Time*</h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”. (Format: 24 hour, e.g. 14:36)
          </div>
          <input
            type="text"
            ref={timeRef}
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
            ref={locationRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page4")}>Back</button>
          <button onClick={() => handlePage5Change("page6")}>Confirm</button>
        </div>
      )}

      {currentPage === "page6" && (
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
            ref={additionalInfoRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page5")}>Back</button>
          <button onClick={() => handlePageChange("page7")}>Submit</button>
        </div>
      )}

      {currentPage === "page7" && (
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

          <button onClick={() => handlePageChange("homepage")}>
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportACrime;
