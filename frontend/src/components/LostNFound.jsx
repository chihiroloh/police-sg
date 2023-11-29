import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";
import "./LostNFound.css";
import PIL1 from "../assets/LostNFound/LostItem/PIL1.png";
import PIL2 from "../assets/LostNFound/LostItem/PIL2.png";
import PIL3 from "../assets/LostNFound/LostItem/PIL3.png";
import PIL4 from "../assets/LostNFound/LostItem/PIL4.png";
import PIL5 from "../assets/LostNFound/LostItem/PIL5.png";
import tick from "../assets/ReportACrime/Tick.png";

const LostNFound = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  const [refId, setRefId] = useState();

  const userInfoCtx = useContext(UserContext);

  const lostNFoundRef = useRef();
  const lostItemRef = useRef("");
  const lostItemCostRef = useRef("");
  const whatHappenedLostRef = useRef("");
  //   const uploadedImageLostRef = useRef();
  const dateLostRef = useRef("");
  const timeLostRef = useRef("");
  const locationLostRef = useRef("");
  //   const additionalInfoLostRef = useRef();

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePage1Change = () => {
    lostNFoundRef.current = document.querySelector("#lostNFound").value;

    if (lostNFoundRef.current === "Lost Item") {
      setCurrentPage("page2-lostItem");
    }
    // else if (lostNFoundRef.current === "foundItem") {
    //   navigate("/Home");
    // }
    // else {
    //   alert("Please choose a category");
    // }
  };

  const handlePage2Change = () => {
    lostItemRef.current = document.querySelector("#lostItem").value;
    lostItemCostRef.current = document.querySelector("#lostItemCost").value;

    if (lostItemRef.current && lostItemCostRef.current) {
      setCurrentPage("page3-lostItem");
    }
    // else {
    //   alert("Please fill up all mandatory fields");
    // }
  };

  const handlePage4Change = () => {
    dateLostRef.current = document.querySelector("#dateLost").value;
    timeLostRef.current = document.querySelector("#timeLost").value;
    locationLostRef.current = document.querySelector("#locationLost").value;

    if (dateLostRef.current && timeLostRef.current && locationLostRef.current) {
      setCurrentPage("page5-lostItem");
    } else {
      alert("Please fill up all mandatory fields");
    }
  };

  const returnToHomepage = () => {
    navigate("/Home");
  };

  const primaryInfo = {
    "What was lost?": lostItemRef.current,
    "How much did the item cost?": lostItemCostRef.current,
    "What happened?": whatHappenedLostRef.current,
    // "Supporting Media": uploadedImageRef.current,
  };

  const addReport = async () => {
    const res = await fetch(
      import.meta.env.VITE_SERVER + `/api/reports/${userInfoCtx.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfoCtx.accessToken,
        },
        body: JSON.stringify({
          type: lostNFoundRef.current,
          primaryInfo: primaryInfo,
          addInfo: document.querySelector("#additionalInfoLost").value,
          dateOccurred: dateLostRef.current,
          timeOccurred: timeLostRef.current,
          locationOccurred: locationLostRef.current,
        }),
      }
    );
    if (res.ok) {
      lostNFoundRef.current = "";
      lostItemRef.current = "";
      lostItemCostRef.current = "";
      whatHappenedLostRef.current = "";
      //   uploadedImageRef.current = "";
      dateLostRef.current = "";
      timeLostRef.current = "";
      locationLostRef.current = "";
      //   additionalInfoRef.current = "";
      const data = await res.json();
      setRefId(data.refId);
    } else {
      alert(JSON.stringify(res.data));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container">
      <p className="LostNFoundHeader">Lost & Found</p>
      <hr></hr>
      <div className="container-lnf">
        {currentPage === "page1" && (
          <div className="row">
            <p className="incident-header">
              Nature of Incident<span className="i-star">*</span>
            </p>
            <br></br>
            <div className="input-lnf">
              <select
                id="lostNFound"
                name="type"
                defaultValue={""}
                className="select-lnf"
                // ref={lostNFoundRef}
              >
                <option
                  value=""
                  disabled>
                  Select Category
                </option>
                <option value="Lost Item">I lost an item</option>
                <option
                  value="Found Item"
                  disabled>
                  I found an item
                </option>
              </select>
              <br></br>
              <button
                className="confirm-lnf"
                onClick={handlePage1Change}>
                Confirm
              </button>
              <br></br>
              <div className="urgent-lnf">
                For urgent and time-sensitive matters that require immediate
                attention, please contact the Police directly using the
                emergency hotline at 999.
              </div>
            </div>
          </div>
        )}
      </div>

      {currentPage === "page2-lostItem" && (
        <div className="row">
          <h3 className="info">
            Item Information<span className="star">*</span>
          </h3>
          <img src={PIL1}></img>
          <br></br>

          <h3 className="info">
            What was lost?<span className="star">*</span>
          </h3>
          <div className="description">
            Provide details about the item (e.g. brand, colour, model, serial
            number, size, etc.) Be as clear and specific as possible.
          </div>
          <div className="input-description">
            <input
              id="lostItem"
              type="text"
              placeholder="Enter Description"
              // ref={lostItemRef}
              className="custom-input"
            />
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
              id="lostItemCost"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
              // ref={lostItemCostRef}
            ></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page1")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={handlePage2Change}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page3-lostItem" && (
        <div className="row">
          <h3 className="info">Incident Information</h3>
          <img src={PIL2}></img>
          <br></br>

          <h3 className="info">What happened?</h3>
          <div className="description">
            Provide details about the incident (e.g. people involved, sequence
            of activites, other relevant information). Be as clear and specific
            as possible.
          </div>
          <div className="input-description">
            <input
              id="whatHappened"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
              // ref={whatHappenedLostRef}
            ></input>
          </div>
          <br></br>

          <h3 className="info">Supporting Media</h3>
          <div className="description">
            Upload up to 3 images and/or videos.
          </div>
          <input
            id="uploadedImage"
            type="file"
            // ref={uploadedImageLostRef}
            multiple></input>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page2-lostItem")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => handlePageChange("page4-lostItem")}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page4-lostItem" && (
        <div className="row">
          <h3 className="info">
            Date, Time & Location<span className="star">*</span>
          </h3>
          <img src={PIL3}></img>
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
              id="dateLost"
              type="date"
              max={new Date().toISOString().split("T")[0]}
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
              id="timeLost"
              type="time"
              // ref={timeLostRef}
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
              id="locationLost"
              type="text"
              // ref={locationLostRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page3-lostItem")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={handlePage4Change}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page5-lostItem" && (
        <div className="row">
          <h3 className="info">Additional Information</h3>
          <img src={PIL4}></img>
          <br></br>

          <h3 className="info">Additional Information (Optional)</h3>
          <div>
            Additional information that would deepen our understanding of the
            situation so that we can help you better.
          </div>
          <div className="input-description">
            <input
              id="additionalInfoLost"
              type="text"
              // ref={additionalInfoLostRef}
              placeholder="Enter Description"
              className="custom-input"></input>
          </div>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page4-lostItem")}>
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => {
                handlePageChange("page6-lostItem");
                addReport();
              }}>
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage === "page6-lostItem" && (
        <div className="row lnf-complete">
          <h3>Complete</h3>
          <img src={PIL5}></img>
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

export default LostNFound;
