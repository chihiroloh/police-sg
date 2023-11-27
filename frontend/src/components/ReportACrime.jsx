import React, { useState, useRef, useEffect, useContext } from "react";
import "./ReportACrime.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";

const ReportACrime = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  //   const [reportTypes, setReportTypes] = useState();
  //   const [input1, setInput1] = useState("");
  //   const [input2, setInput2] = useState("");

  const userInfoCtx = useContext(UserContext);

  const crimeTypeRef = useRef();
  const stolenRef = useRef("");
  const costRef = useRef("");
  const moneyRef = useRef("");
  const transferredRef = useRef("");
  const accountsRef = useRef("");
  const perpetratorRef = useRef("");
  const witnessRef = useRef("");
  const otherIncidentRef = useRef("");
  const whatHappenedRef = useRef("");
  const scammerRef = useRef("");
  //   const uploadedImageRef = useRef();
  const dateRef = useRef("");
  const timeRef = useRef("");
  const locationRef = useRef("");
  const additionalInfoRef = useRef("");

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //   const handleInputChange = (event, inputRef) => {
  //     inputRef.current = event.target.value;
  //   };

  const handlePage2Change = () => {
    crimeTypeRef.current = document.querySelector("#crimeType").value;

    if (crimeTypeRef.current === "theft") {
      setCurrentPage("page3-theft");
    } else if (crimeTypeRef.current === "scams") {
      setCurrentPage("page3-scams");
    } else if (crimeTypeRef.current === "voyeurism") {
      setCurrentPage("page3-voyeurism");
    } else if (crimeTypeRef.current === "other") {
      setCurrentPage("page3-other");
    } else {
      alert("Please choose the type of crime you wish to report");
    }
  };

  const handlePage3ChangeTheft = () => {
    stolenRef.current = document.querySelector("#stolen").value;
    costRef.current = document.querySelector("#cost").value;

    if (stolenRef.current && costRef.current) {
      setCurrentPage("page4-theft");
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const handlePage3ChangeScams = () => {
    moneyRef.current = document.querySelector("#money").value;
    accountsRef.current = document.querySelector("#accounts").value;
    transferredRef.current = document.querySelector("#transferred").value;

    if (moneyRef.current && accountsRef.current && transferredRef.current) {
      setCurrentPage("page4-scams");
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const handlePage3ChangeVoyeurism = () => {
    perpetratorRef.current = document.querySelector("#perpetrator").value;

    if (perpetratorRef.current) {
      setCurrentPage("page4-voyeurism");
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const handlePage3ChangeOther = () => {
    otherIncidentRef.current = document.querySelector("#otherIncident").value;

    if (otherIncidentRef.current) {
      setCurrentPage("page4-other");
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const handlePage5Change = (page) => {
    dateRef.current = document.querySelector("#date").value;
    timeRef.current = document.querySelector("#time").value;
    locationRef.current = document.querySelector("#location").value;

    if (dateRef.current && timeRef.current && locationRef.current) {
      setCurrentPage(page);
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const returnToHomepage = () => {
    navigate("/Home");
  };

  //   const getReport = async () => {
  //     try {
  //       const res = await fetch(import.meta.env.VITE_SERVER + "/report_types");
  //       const data = await res.json();
  //       setReportTypes(data);
  //       console.log(data);
  //     } catch (error) {
  //       alert("error");
  //     }
  //   };

  const primaryInfo = {
    "What was stolen?": stolenRef.current,
    "How much did the item cost?": costRef.current,
    "How much money was involved?": moneyRef.current,
    "How was the money transferred?": transferredRef.current,
    "What accounts are affected?": accountsRef.current,
    "Who was the perpetrator?": perpetratorRef.current,
    "Were there any witnesses?": witnessRef.current,
    "What type of incident was it?": otherIncidentRef.current,
    "What happened?": whatHappenedRef.current,
    // "Supporting Media": uploadedImageRef.current,
    "Who was the scammer?": scammerRef.current,
  };

  const secondaryInfo = {
    "What happened?": whatHappenedRef.current,
    // "Supporting Media": uploadedImageRef.current,
    "Who was the scammer?": scammerRef.current,
  };

  const addReport = async () => {
    console.log(userInfoCtx.accessToken);
    console.log(userInfoCtx.userId);
    const res = await fetch(
      import.meta.env.VITE_SERVER + `/api/reports/${userInfoCtx.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfoCtx.accessToken,
        },
        body: JSON.stringify({
          type: crimeTypeRef.current,
          primaryInfo: primaryInfo,
          secondaryInfo: secondaryInfo,
          dateOccurred: dateRef.current,
          timeOccurred: timeRef.current,
          locationOccurred: locationRef.current,
          addInfo: additionalInfoRef.current,
        }),
      }
    );

    if (res.ok) {
      crimeTypeRef.current = "";
      stolenRef.current = "";
      costRef.current = "";
      whatHappenedRef.current = "";
      //   uploadedImageRef.current = "";
      moneyRef.current = "";
      transferredRef.current = "";
      accountsRef.current = "";
      scammerRef.current = "";
      perpetratorRef.current = "";
      witnessRef.current = "";
      otherIncidentRef.current = "";
      dateRef.current = "";
      timeRef.current = "";
      locationRef.current = "";
      additionalInfoRef.current = "";
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // getReport();
  });

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
          <select
            id="crimeType"
            name="type"
            defaultValue={""} /*ref={crimeTypeRef}*/
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="theft">
              Dishonest Misappropriation of Property (Theft)
            </option>
            <option value="scams">Scams</option>
            <option value="voyeurism">Voyeurism</option>
            <option value="other">Other</option>
          </select>
          <br></br>
          <button
            onClick={handlePage2Change}
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
            id="stolen"
            type="text"
            placeholder="Enter Description"
            // ref={stolenRef}
            // value={stolenRef.current}
            // onChange={(event) => handleInputChange(event, stolenRef)}
          ></input>
          <br></br>

          <h3>How much did the item cost?*</h3>
          <div>If you are unsure, please provide an estimated amount.</div>
          <input
            id="cost"
            type="text"
            placeholder="Enter Description"
            // ref={costRef}
            // value={costRef.current}
            // onChange={(event) => handleInputChange(event, costRef)}
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page2")}>Back</button>
          <button
            onClick={handlePage3ChangeTheft}
            // disabled={!stolenRef.current || !costRef.current}
          >
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page3-scams" && (
        <div className="row">
          <h3>Financial Information*</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>How much money was involved?*</h3>
          <div>If you are uncertain, please provide an estimated amount.</div>
          <input
            id="money"
            type="text"
            placeholder="Enter Description"
            // ref={moneyRef}
            // onChange={(event) => handleInputChange(event, stolenRef)}
          ></input>
          <br></br>

          <h3>How was the money transferred?*</h3>
          <div>
            E.g. bank transfer, credit card, PayNow, PayLah!, etc. Please
            include transaction numbers, if relevant.
          </div>
          <input
            id="transferred"
            type="text"
            placeholder="Enter Description"
            // ref={transferredRef}
            // onChange={(event) => handleInputChange(event, costRef)}
          ></input>
          <br></br>

          <h3>What accounts are affected?*</h3>
          <div>E.g. bank, account number, etc. </div>
          <input
            id="accounts"
            type="text"
            placeholder="Enter Description"
            // ref={accountsRef}
            // onChange={(event) => handleInputChange(event, costRef)}
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page2")}>Back</button>
          <button
            onClick={handlePage3ChangeScams}
            // disabled={!stolenRef.current || !costRef.current}
          >
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page3-voyeurism" && (
        <div className="row">
          <h3>Perpetrator & Witness Information</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>Who was the perpetrator?* </h3>
          <div>
            Provide any information about the perpetrator (e.g. physical
            appearance, clothing, other identifying features). Be as clear and
            specific as possible.
          </div>
          <input
            id="perpetrator"
            type="text"
            placeholder="Enter Description"
            // ref={perpetratorRef}
            // onChange={(event) => handleInputChange(event, stolenRef)}
          ></input>
          <br></br>

          <h3>Were there any witnesses?</h3>
          <div>
            Include details of anywitnesses who were present during the
            incident, if applicable.
          </div>
          <input
            id="witness"
            type="text"
            placeholder="Enter Description"
            // ref={witnessRef}
            // onChange={(event) => handleInputChange(event, costRef)}
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page2")}>Back</button>
          <button
            onClick={handlePage3ChangeVoyeurism}
            // disabled={!stolenRef.current || !costRef.current}
          >
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page3-other" && (
        <div className="row">
          <h3>Nature of Incident*</h3>
          <select name="type" id="type" defaultValue="other" ref={crimeTypeRef}>
            <option value="" disabled>
              Select Category
            </option>
            <option value="theft">
              Dishonest Misappropriation of Property (Theft)
            </option>
            <option value="scams">Scams</option>
            <option value="voyeurism">Voyeurism</option>
            <option value="other">Other</option>
          </select>
          <br></br>

          <h3>What type of incident was it?*</h3>
          <div>
            Provide any information about what happened. Be as clear and
            specific as possible.
          </div>
          <input
            id="otherIncident"
            type="text"
            placeholder="Enter Description"
            // ref={otherIncidentRef}
            // onChange={(event) => handleInputChange(event, stolenRef)}
          ></input>
          <br></br>

          <button
            onClick={handlePage3ChangeOther}
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

      {currentPage === "page4-theft" && (
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
            id="whatHappened"
            type="text"
            placeholder="Enter Description"
            // ref={whatHappenedRef}
          ></input>
          <br></br>

          <h3>Supporting Media</h3>
          <div>Upload up to 3 images and/or videos</div>
          <input
            id="uploadedImage"
            type="file"
            /*ref={uploadedImageRef}*/ multiple
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page3-theft")}>Back</button>
          <button onClick={() => handlePageChange("page5-theft")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page4-scams" && (
        <div className="row">
          <h3>Incident Information</h3>
          <br></br>
          <img></img>
          <br></br>

          <h3>Who was the scammer?</h3>
          <div>
            Provide details (e.g. name, email address, phone number, other
            identifying information).
          </div>
          <br></br>
          <input
            id="scammer"
            type="text"
            placeholder="Enter Description"
            // ref={scammerRef}
          ></input>
          <br></br>

          <h3>What happened?</h3>
          <div>
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <br></br>
          <input
            id="whatHappened"
            type="text"
            placeholder="Enter Description"
            // ref={whatHappenedRef}
          ></input>
          <br></br>

          <h3>Supporting Media</h3>
          <div>Upload up to 3 images and/or videos</div>
          <input
            id="uploadedImage"
            type="file" /*ref={uploadedImageRef}*/
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page3-scams")}>Back</button>
          <button onClick={() => handlePageChange("page5-scams")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page4-voyeurism" && (
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
            id="whatHappened"
            type="text"
            placeholder="Enter Description"
            // ref={whatHappenedRef}
          ></input>
          <br></br>

          <h3>Supporting Media</h3>
          <div>Upload up to 3 images and/or videos</div>
          <input
            id="uploadedImage"
            type="file" /*ref={uploadedImageRef}*/
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page3-voyeurism")}>
            Back
          </button>
          <button onClick={() => handlePageChange("page5-voyeurism")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page4-other" && (
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
            id="whatHappened"
            type="text"
            placeholder="Enter Description"
            ref={whatHappenedRef}
          ></input>
          <br></br>

          <h3>Supporting Media</h3>
          <div>Upload up to 3 images and/or videos</div>
          <input
            id="uploadedImage"
            type="file" /*ref={uploadedImageRef}*/
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page3-other")}>Back</button>
          <button onClick={() => handlePageChange("page5-other")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page5-theft" && (
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
            id="date"
            type="date"
            // ref={dateRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Time*</h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <input
            id="time"
            type="time"
            // ref={timeRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Location*</h3>
          <div>
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <input
            id="location"
            type="text"
            // ref={locationRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page4-theft")}>Back</button>
          <button onClick={() => handlePage5Change("page6-theft")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page5-scams" && (
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
            id="date"
            type="date"
            // ref={dateRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Time*</h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <input
            id="time"
            type="time"
            // ref={timeRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Location*</h3>
          <div>
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <input
            id="location"
            type="text"
            // ref={locationRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page4-scams")}>Back</button>
          <button onClick={() => handlePage5Change("page6-scams")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page5-voyeurism" && (
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
            id="date"
            type="date"
            // ref={dateRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Time*</h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <input
            id="time"
            type="time"
            // ref={timeRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Location*</h3>
          <div>
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <input
            id="location"
            type="text"
            // ref={locationRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page4-voyeurism")}>
            Back
          </button>
          <button onClick={() => handlePage5Change("page6-voyeurism")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page5-other" && (
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
            id="date"
            type="date"
            // ref={dateRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Time*</h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <input
            id="time"
            type="time"
            // ref={timeRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Location*</h3>
          <div>
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <input
            id="location"
            type="text"
            // ref={locationRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page4-other")}>Back</button>
          <button onClick={() => handlePage5Change("page6-other")}>
            Confirm
          </button>
        </div>
      )}

      {currentPage === "page6-theft" && (
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
            id="additionalInfo"
            type="text"
            // ref={additionalInfoRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page5-theft")}>Back</button>
          <button
            onClick={() => {
              handlePageChange("page7");
              addReport();
            }}
          >
            Submit
          </button>
        </div>
      )}

      {currentPage === "page6-scams" && (
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
            id="additionalInfo"
            type="text"
            // ref={additionalInfoRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page5-scams")}>Back</button>
          <button
            onClick={() => {
              handlePageChange("page7");
              addReport();
            }}
          >
            Submit
          </button>
        </div>
      )}

      {currentPage === "page6-voyeurism" && (
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
            id="additionalInfo"
            type="text"
            // ref={additionalInfoRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page5-voyeurism")}>
            Back
          </button>
          <button
            onClick={() => {
              handlePageChange("page7");
              addReport();
            }}
          >
            Submit
          </button>
        </div>
      )}

      {currentPage === "page6-other" && (
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
            id="additionalInfo"
            type="text"
            // ref={additionalInfoRef}
            placeholder="Enter Description"
          ></input>
          <br></br>

          <button onClick={() => handlePageChange("page5-other")}>Back</button>
          <button
            onClick={() => {
              handlePageChange("page7");
              addReport();
            }}
          >
            Submit
          </button>
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

          <div>Police Report Ref: {userInfoCtx.refId}</div>
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

export default ReportACrime;
