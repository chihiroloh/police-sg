import React, { useState, useRef, useEffect, useContext } from "react";
import "./ReportACrime.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";
import warningsign from "../assets/ReportACrime/Warning-Sign.png";
import tick from "../assets/ReportACrime/Tick.png";
import PIS1 from "../assets/ReportACrime/Scams/PIS1.png";
import PIS2 from "../assets/ReportACrime/Scams/PIS2.png";
import PIS3 from "../assets/ReportACrime/Scams/PIS3.png";
import PIS4 from "../assets/ReportACrime/Scams/PIS4.png";
import PIS5 from "../assets/ReportACrime/Scams/PIS5.png";
import PIT1 from "../assets/ReportACrime/Theft/PIT1.png";
import PIT2 from "../assets/ReportACrime/Theft/PIT2.png";
import PIT3 from "../assets/ReportACrime/Theft/PIT3.png";
import PIT4 from "../assets/ReportACrime/Theft/PIT4.png";
import PIT5 from "../assets/ReportACrime/Theft/PIT5.png";
import PIV1 from "../assets/ReportACrime/Voyeurism/PIV1.png";
import PIV2 from "../assets/ReportACrime/Voyeurism/PIV2.png";
import PIV3 from "../assets/ReportACrime/Voyeurism/PIV3.png";
import PIV4 from "../assets/ReportACrime/Voyeurism/PIV4.png";
import PIV5 from "../assets/ReportACrime/Voyeurism/PIV5.png";
import PIO1 from "../assets/ReportACrime/Other/PIO1.png";
import PIO2 from "../assets/ReportACrime/Other/PIO2.png";
import PIO3 from "../assets/ReportACrime/Other/PIO3.png";
import PIO4 from "../assets/ReportACrime/Other/PIO4.png";
import back from "../assets/back.png";

const ReportACrime = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  const [refId, setRefId] = useState();
  const [file, setFile] = useState();
  const [filePath, setFilePath] = useState("");

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
  //   const additionalInfoRef = useRef("");

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePage2Change = () => {
    crimeTypeRef.current = document.querySelector("#crimeType").value;

    if (
      crimeTypeRef.current === "Dishonest Misappropriation of Property (Theft)"
    ) {
      setCurrentPage("page3-theft");
    } else if (crimeTypeRef.current === "Scams") {
      setCurrentPage("page3-scams");
    } else if (crimeTypeRef.current === "Voyeurism") {
      setCurrentPage("page3-voyeurism");
    } else if (crimeTypeRef.current === "Other") {
      setCurrentPage("page3-other");
    }
    // else {
    //   alert("Please choose the type of crime you wish to report");
    // }
  };

  const handlePage3ChangeTheft = () => {
    stolenRef.current = document.querySelector("#stolen").value;
    costRef.current = document.querySelector("#cost").value;

    if (stolenRef.current && costRef.current) {
      setCurrentPage("page4-theft");
    }
    // else {
    //   alert("Please fill up all mandatory fields");
    // }
  };

  const handlePage3ChangeScams = () => {
    moneyRef.current = document.querySelector("#money").value;
    accountsRef.current = document.querySelector("#accounts").value;
    transferredRef.current = document.querySelector("#transferred").value;

    if (moneyRef.current && accountsRef.current && transferredRef.current) {
      setCurrentPage("page4-scams");
    }
    // else {
    //   alert("Please fill up all mandatory fields");
    // }
  };

  const handlePage3ChangeVoyeurism = () => {
    perpetratorRef.current = document.querySelector("#perpetrator").value;

    if (perpetratorRef.current) {
      setCurrentPage("page4-voyeurism");
    }
    // else {
    //   alert("Please fill up all mandatory fields");
    // }
  };

  const handlePage3ChangeOther = () => {
    otherIncidentRef.current = document.querySelector("#otherIncident").value;

    if (otherIncidentRef.current) {
      setCurrentPage("page4-other");
    }
    // else {
    //   alert("Please fill up all mandatory fields");
    // }
  };

  const handlePage5Change = (page) => {
    dateRef.current = document.querySelector("#date").value;
    timeRef.current = document.querySelector("#time").value;
    locationRef.current = document.querySelector("#location").value;

    if (dateRef.current && timeRef.current && locationRef.current) {
      setCurrentPage(page);
    }
    // else {
    //   alert("Please fill up all mandatory fields");
    // }
  };

  const returnToHomepage = () => {
    navigate("/Home");
  };

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
    "Who was the scammer?": scammerRef.current,
  };

  const addReport = async () => {
    const reportData = {
      type: crimeTypeRef.current,
      primaryInfo,
      addInfo: document.querySelector("#additionalInfo").value,
      dateOccurred: dateRef.current,
      timeOccurred: timeRef.current,
      locationOccurred: locationRef.current,
    };
    if (filePath) {
      reportData.media = { mediaURL1: filePath };
    }
    const res = await fetch(
      import.meta.env.VITE_SERVER + `/api/reports/${userInfoCtx.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfoCtx.accessToken,
        },
        body: JSON.stringify(reportData),
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
      //   additionalInfoRef.current = "";
      const data = await res.json();
      // console.log(data);
      setRefId(data.refId);
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("images", file);
      const res = await fetch(import.meta.env.VITE_SERVER + "/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setFilePath(data.path);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filePath]);

  return (
    <div className="container">
      <div className="header">
        <img
          src={back}
          onClick={() => handlePageChange("page1")}></img>
        <p className="ReportACrimeHeader">Report a Crime</p>
        <div></div>
      </div>
      <hr />

      {currentPage === "page1" && (
        <div className="row page1-container">
          <img
            className="warningsign"
            src={warningsign}
          />
          <div className="roc-important">
            <p className="sub">Important Notice: Making False Reports</p>
            <div className="roc-paragraph">
              <p>
                Before proceeding with your report, please be aware that making
                a false report is considered a serious offence.
              </p>
              <p>
                Under Section 182 of the Penal Code 1871, convicted individuals
                will face an imprisonment term of up to 2 years, a fine, or
                both.
              </p>
              <p>
                The Police takes a serious view of any person who engages in
                fraudulent or dishonest conducts.
              </p>
              <b>
                Offenders will be dealt with severely in accordance with the
                law.
              </b>
            </div>
          </div>
          <br></br>
          <div className="button-container">
            <button
              className="acknowledge"
              onClick={() => handlePageChange("page2")}>
              I acknowledge and wish to proceed
            </button>
          </div>
        </div>
      )}

      {currentPage === "page2" && (
        <div className="row-two">
          <p className="incident">
            Nature of Incident<span className="star">*</span>
          </p>
          <div className="crime-container">
            <div className="select">
              <select
                id="crimeType"
                name="type"
                defaultValue={""}
                className="large-select"
                // ref={crimeTypeRef}
              >
                <option
                  value=""
                  disabled
                  className="large-select-option">
                  Select Category
                </option>
                <option
                  value="Dishonest Misappropriation of Property (Theft)"
                  className="large-select-option">
                  Dishonest Misappropriation of Property (Theft)
                </option>
                <option
                  value="Scams"
                  className="large-select-option">
                  Scams
                </option>
                <option
                  value="Voyeurism"
                  className="large-select-option">
                  Voyeurism
                </option>
                <option
                  value="Other"
                  className="large-select-option">
                  Other
                </option>
              </select>
              <br></br>
            </div>
            <button
              className="confirm"
              onClick={handlePage2Change}>
              Confirm
            </button>
            <br></br>
            <div className="urgent">
              For urgent and time-sensitive matters that require immediate
              attention, please contact the Police directly using the emergency
              hotline at 999.
            </div>
          </div>
        </div>
      )}

      {currentPage === "page3-theft" && (
        <div className="row">
          <h3 className="info">
            Item Information<span className="star">*</span>
          </h3>
          <img src={PIT1}></img>
          <br></br>
          <h3 className="info">
            What was stolen?<span className="star">*</span>
          </h3>
          <div className="description">
            Provide details about the item (e.g. brand, colour, model, serial
            number, size, etc.) Be as clear and specific as possible.
          </div>
          <div className="input-description">
            <input
              id="stolen"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={stolenRef}
              // value={stolenRef.current}
              // onChange={(event) => handleInputChange(event, stolenRef)}
            ></input>
          </div>
          <br></br>
          <h3 className="info">
            How much did the item cost?<span className="star">*</span>
          </h3>
          <div className="description">
            If you are unsure, please provide an estimated amount.
          </div>
          <div className="input-description">
            <input
              id="cost"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={costRef}
              // value={costRef.current}
              // onChange={(event) => handleInputChange(event, costRef)}
            ></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page2")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={handlePage3ChangeTheft}
              // disabled={!stolenRef.current || !costRef.current}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page4-theft" && (
        <div className="row">
          <h3 className="info">Incident Information</h3>
          <img src={PIT2}></img>
          <br></br>

          <h3 className="info">What happened?</h3>
          <div className="description">
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <br></br>
          <div className="input-description">
            <input
              id="whatHappened"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={whatHappenedRef}
            ></input>
            <br></br>
          </div>
          <h3 className="info">Supporting Media</h3>
          <div className="description">Upload up to 3 images and/or videos</div>
          <div className="input-description">
            <input
              id="uploadedImage"
              name="images"
              type="file"
              /*ref={uploadedImageRef}*/ multiple
              onChange={handleFileChange}></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page3-theft")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePageChange("page5-theft")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page5-theft" && (
        <div className="row">
          <h3 className="info">
            Date, Time & Location<span className="star">*</span>
          </h3>
          <img src={PIT3}></img>
          <br></br>

          <h3 className="info">
            Date<span className="star">*</span>
          </h3>
          <div className="description">
            If the incident happened over a period of time, please indicate the
            full range of dates.
          </div>
          <div className="input-description">
            <input
              id="date"
              type="date"
              max={new Date().toISOString().split("T")[0]}
              // ref={dateRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Time<span className="star">*</span>
          </h3>
          <div className="description">
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <div className="input-description">
            <input
              id="time"
              type="time"
              // ref={timeRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Location<span className="star">*</span>
          </h3>
          <div className="description">
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <div className="input-description">
            <input
              id="location"
              type="text"
              // ref={locationRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page4-theft")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePage5Change("page6-theft")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page6-theft" && (
        <div className="row">
          <h3 className="info">Additional Information</h3>
          <img src={PIT4}></img>
          <br></br>

          <h3 className="info">Additional Information (Optional)</h3>
          <div className="description">
            Additional information that would deepen our understanding of the
            situation so that we can help you better.
          </div>

          <div className="input-description">
            <input
              id="additionalInfo"
              type="text"
              // ref={additionalInfoRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page5-theft")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => {
                handlePageChange("page7-theft");
                if (file) handleUpload();
                addReport();
              }}>
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage === "page7-theft" && (
        <div className="row lnf-complete">
          <h3>Complete</h3>
          <img src={PIT5}></img>
          <br></br>
          <img
            className="tick"
            src={tick}></img>
          <br></br>

          <div>Police Report Ref: {refId}</div>
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
          <div className="return-container">
            <button
              className="return"
              onClick={returnToHomepage}>
              Return to Home
            </button>
          </div>
        </div>
      )}

      {currentPage === "page3-scams" && (
        <div className="row">
          <h3 className="info">
            Financial Information<span className="star">*</span>
          </h3>
          <img
            src={PIS1}
            alt="progress-indicator-1"></img>
          <br></br>

          <h3 className="info">
            How much money was involved?<span className="star">*</span>
          </h3>
          <div className="description">
            If you are uncertain, please provide an estimated amount.
          </div>
          <div className="input-description">
            <input
              id="money"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={moneyRef}
              // onChange={(event) => handleInputChange(event, stolenRef)}
            ></input>
          </div>
          <br></br>

          <h3 className="info">
            How was the money transferred?<span className="star">*</span>
          </h3>
          <div className="description">
            E.g. bank transfer, credit card, PayNow, PayLah!, etc. Please
            include transaction numbers, if relevant.
          </div>
          <div className="input-description">
            <input
              id="transferred"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={transferredRef}
              // onChange={(event) => handleInputChange(event, costRef)}
            ></input>
          </div>

          <br></br>

          <h3 className="info">
            What accounts are affected?<span className="star">*</span>
          </h3>
          <div className="description">E.g. bank, account number, etc. </div>
          <div className="input-description">
            <input
              id="accounts"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={accountsRef}
              // onChange={(event) => handleInputChange(event, costRef)}
            ></input>
          </div>
          <br></br>

          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page2")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={handlePage3ChangeScams}
              // disabled={!stolenRef.current || !costRef.current}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page4-scams" && (
        <div className="row">
          <h3 className="info">Incident Information</h3>
          <img
            src={PIS2}
            alt="progress-indicator-2"></img>
          <br></br>

          <h3 className="info">Who was the scammer?</h3>
          <div className="description">
            Provide details (e.g. name, email address, phone number, other
            identifying information).
          </div>
          <br></br>
          <div className="input-description">
            <input
              id="scammer"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={scammerRef}
            ></input>
          </div>
          <br></br>

          <h3 className="info">What happened?</h3>
          <div className="description">
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <br></br>

          <div className="input-description">
            <input
              id="whatHappened"
              type="text"
              placeholder="Enter Description"
              className="custom-input"

              // ref={whatHappenedRef}
            ></input>
          </div>
          <br></br>

          <h3 className="info">Supporting Media</h3>
          <div className="description">Upload up to 3 images and/or videos</div>
          <div className="input-description">
            <input
              id="uploadedImage"
              name="images"
              type="file" /*ref={uploadedImageRef}*/
              onChange={handleFileChange}></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page3-scams")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePageChange("page5-scams")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page5-scams" && (
        <div className="row">
          <h3 className="info">
            Date, Time & Location<span className="star">*</span>
          </h3>
          <img
            src={PIS3}
            alt="progress-indicator-3"></img>
          <br></br>

          <h3 className="info">
            Date<span className="star">*</span>
          </h3>
          <div className="description">
            If the incident happened over a period of time, please indicate the
            full range of dates.
          </div>

          <div className="input-description">
            <input
              id="date"
              type="date"
              max={new Date().toISOString().split("T")[0]}
              // ref={dateRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Time<span className="star">*</span>
          </h3>
          <div className="description">
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>

          <div className="input-description">
            <input
              id="time"
              type="time"
              // ref={timeRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Location<span className="star">*</span>
          </h3>
          <div className="description">
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>

          <div className="input-description">
            <input
              id="location"
              type="text"
              // ref={locationRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page4-scams")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePage5Change("page6-scams")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page6-scams" && (
        <div className="row">
          <h3 className="info">Additional Information</h3>
          <br></br>
          <img
            src={PIS4}
            alt="progress-indicator-4"></img>
          <br></br>

          <h3 className="info">Additional Information (Optional)</h3>
          <div className="description">
            Additional information that would deepen our understanding of the
            situation so that we can help you better.
          </div>
          <div className="input-description">
            <input
              id="additionalInfo"
              type="text"
              // ref={additionalInfoRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page5-scams")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => {
                handlePageChange("page7-scams");
                if (file) handleUpload();
                addReport();
              }}>
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage === "page7-scams" && (
        <div className="row lnf-complete">
          <h3>Complete</h3>
          <img src={PIS5}></img>
          <br></br>
          <img
            className="tick"
            src={tick}></img>
          <br></br>

          <div>Police Report Ref: {refId}</div>
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
          <div className="return-container">
            <button
              className="return"
              onClick={returnToHomepage}>
              Return to Home
            </button>
          </div>
        </div>
      )}

      {currentPage === "page3-voyeurism" && (
        <div className="row">
          <h3 className="info">Perpetrator & Witness Information</h3>
          <img src={PIV1}></img>
          <br></br>

          <h3 className="info">
            Who was the perpetrator?<span className="star">*</span>{" "}
          </h3>
          <div className="description">
            Provide any information about the perpetrator (e.g. physical
            appearance, clothing, other identifying features). Be as clear and
            specific as possible.
          </div>
          <div className="input-description">
            <input
              id="perpetrator"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
              // ref={perpetratorRef}
              // onChange={(event) => handleInputChange(event, stolenRef)}
            ></input>
          </div>
          <br></br>

          <h3 className="info">Were there any witnesses?</h3>
          <div className="description">
            Include details of anywitnesses who were present during the
            incident, if applicable.
          </div>

          <div className="input-description">
            <input
              id="witness"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
              // ref={witnessRef}
              // onChange={(event) => handleInputChange(event, costRef)}
            ></input>
          </div>
          <br></br>

          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page2")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={handlePage3ChangeVoyeurism}
              // disabled={!stolenRef.current || !costRef.current}
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page4-voyeurism" && (
        <div className="row">
          <h3 className="info">Incident Information</h3>
          <img src={PIV2}></img>
          <br></br>

          <h3 className="info">What happened?</h3>
          <div className="description">
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <br></br>
          <div className="input-description">
            <input
              id="whatHappened"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
              // ref={whatHappenedRef}
            ></input>
          </div>
          <br></br>

          <h3 className="info">Supporting Media</h3>
          <div className="description">Upload up to 3 images and/or videos</div>

          <div className="input-description">
            <input
              id="uploadedImage"
              name="images"
              type="file" /*ref={uploadedImageRef}*/
              className="custom-input"
              onChange={handleFileChange}></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page3-voyeurism")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePageChange("page5-voyeurism")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page5-voyeurism" && (
        <div className="row">
          <h3 className="info">
            Date, Time & Location<span className="star">*</span>
          </h3>
          <img src={PIV3}></img>
          <br></br>

          <h3 className="info">
            Date<span className="star">*</span>
          </h3>
          <div className="description">
            If the incident happened over a period of time, please indicate the
            full range of dates.
          </div>
          <div className="input-description">
            <input
              id="date"
              type="date"
              max={new Date().toISOString().split("T")[0]}
              // ref={dateRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Time<span className="star">*</span>
          </h3>
          <div className="description">
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <div className="input-description">
            <input
              id="time"
              type="time"
              // ref={timeRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Location<span className="star">*</span>
          </h3>
          <div className="description">
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <div className="input-description">
            <input
              id="location"
              type="text"
              // ref={locationRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page4-voyeurism")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePage5Change("page6-voyeurism")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page6-voyeurism" && (
        <div className="row">
          <h3 className="info">Additional Information</h3>
          <img src={PIV4}></img>
          <br></br>

          <h3 className="info">Additional Information (Optional)</h3>
          <div className="description">
            Additional information that would deepen our understanding of the
            situation so that we can help you better.
          </div>
          <div className="input-description">
            <input
              id="additionalInfo"
              type="text"
              // ref={additionalInfoRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page5-voyeurism")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => {
                handlePageChange("page7-voyeurism");
                if (file) handleUpload();
                addReport();
              }}>
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage === "page7-voyeurism" && (
        <div className="row lnf-complete">
          <h3>Complete</h3>
          <img src={PIV5}></img>
          <br></br>
          <img
            className="tick"
            src={tick}></img>
          <br></br>

          <div>Police Report Ref: {refId}</div>
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
          <div className="return-container">
            <button
              className="return"
              onClick={returnToHomepage}>
              Return to Home
            </button>
          </div>
        </div>
      )}

      {currentPage === "page3-other" && (
        <div className="row">
          <br />
          <h3 className="incident-header">
            Nature of Incident<span className="i-star">*</span>
          </h3>
          <div className="input-description">
            <select
              className="custom-input"
              name="type"
              id="type"
              defaultValue="other" /*ref={crimeTypeRef}*/
              disabled>
              <option
                value=""
                disabled>
                Select Category
              </option>
              <option value="Dishonest Misappropriation of Property (Theft)">
                Dishonest Misappropriation of Property (Theft)
              </option>
              <option value="scams">Scams</option>
              <option value="voyeurism">Voyeurism</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br></br>

          <h3 className="info">
            What type of incident was it?<span className="star">*</span>
          </h3>
          <div className="description">
            Provide any information about what happened. Be as clear and
            specific as possible.
          </div>

          <div className="input-description">
            <input
              id="otherIncident"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
              // ref={otherIncidentRef}
              // onChange={(event) => handleInputChange(event, stolenRef)}
            ></input>
          </div>
          <br></br>
          <div className="other-confirm">
            <button
              className="confirm-button"
              onClick={handlePage3ChangeOther}
              // disabled={!crimeTypeRef.current}
            >
              Confirm
            </button>
          </div>
          <br></br>
          <div className="urgent">
            For urgent and time-sensitive matters that require immediate
            attention, please contact the Police directly using the emergency
            hotline at 999.
          </div>
        </div>
      )}

      {currentPage === "page4-other" && (
        <div className="row">
          <h3 className="info">Incident Information</h3>
          <img src={PIO1}></img>
          <br></br>

          <h3 className="info">What happened?</h3>
          <div className="description">
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <br></br>
          <div className="input-description">
            <input
              id="whatHappened"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
              ref={whatHappenedRef}></input>
          </div>
          <br></br>

          <h3 className="info">Supporting Media</h3>
          <div>Upload up to 3 images and/or videos</div>

          <div className="input-description">
            <input
              id="uploadedImage"
              name="images"
              type="file" /*ref={uploadedImageRef}*/
              onChange={handleFileChange}></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page3-other")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePageChange("page5-other")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page5-other" && (
        <div className="row">
          <h3 className="info">
            Date, Time & Location<span className="star">*</span>
          </h3>
          <img src={PIO2}></img>
          <br></br>

          <h3 className="info">
            Date<span className="star">*</span>
          </h3>
          <div className="description">
            If the incident happened over a period of time, please indicate the
            full range of dates.
          </div>
          <div className="input-description">
            <input
              id="date"
              type="date"
              max={new Date().toISOString().split("T")[0]}
              // ref={dateRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Time<span className="star">*</span>
          </h3>
          <div className="description">
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <div className="input-description">
            <input
              id="time"
              type="time"
              // ref={timeRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <h3 className="info">
            Location<span className="star">*</span>
          </h3>
          <div className="description">
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <div className="input-description">
            <input
              id="location"
              type="text"
              // ref={locationRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>

          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page4-other")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePage5Change("page6-other")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page6-other" && (
        <div className="row">
          <h3 className="info">Additional Information</h3>
          <img src={PIO3}></img>
          <br></br>

          <h3 className="info">Additional Information (Optional)</h3>
          <div className="description">
            Additional information that would deepen our understanding of the
            situation so that we can help you better.
          </div>
          <div className="input-description">
            <input
              id="additionalInfo"
              type="text"
              // ref={additionalInfoRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page5-other")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => {
                handlePageChange("page7-other");
                if (file) handleUpload();
                addReport();
              }}>
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage === "page7-other" && (
        <div className="row lnf-complete">
          <h3>Complete</h3>
          <img src={PIO4}></img>
          <br></br>
          <img
            className="tick"
            src={tick}></img>
          <br></br>

          <div>Police Report Ref: {refId}</div>
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
          <div className="return-container">
            <button
              className="return"
              onClick={returnToHomepage}>
              Return to Home
            </button>
          </div>
        </div>
      )}
      <NavBar />
    </div>
  );
};

export default ReportACrime;
