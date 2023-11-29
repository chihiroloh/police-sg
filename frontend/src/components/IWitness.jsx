import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";
import PIN1 from "../assets/IWitness/Next-of-kin/PIN1.png";
import PIN2 from "../assets/IWitness/Next-of-kin/PIN2.png";
import PIN3 from "../assets/IWitness/Next-of-kin/PIN3.png";
import PIN4 from "../assets/IWitness/Next-of-kin/PIN4.png";
import tick from "../assets/ReportACrime/Tick.png";

const IWitness = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  const [refId, setRefId] = useState("");
  const navigate = useNavigate();

  const userInfoCtx = useContext(UserContext);

  const witnessTypeRef = useRef("");
  const deceasedRelatedRef = useRef("");
  const dateIRef = useRef("");
  const timeIRef = useRef("");
  const locationIRef = useRef("");
  // const primaryInfoRef = useRef("");
  // const mediaURL1Ref = useRef("");
  // const mediaURL2Ref = useRef("");
  // const mediaURL3Ref = useRef("");
  // const addInfoRef = useRef("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePage1Change = () => {
    witnessTypeRef.current = document.querySelector("#iWitnessType").value;

    if (witnessTypeRef.current === "nextofkin") {
      handlePageChange("page2-nextofkin");
    } else {
      alert("Please select a category of appeals");
    }
  };

  const handlePage2Change = () => {
    deceasedRelatedRef.current =
      document.querySelector("#deceasedRelated").value;

    if (deceasedRelatedRef.current) {
      handlePageChange("page3-nextofkin");
    } else {
      alert("Please tell us how you are related to the deceased.");
    }
  };

  const handlePage3Change = () => {
    dateIRef.current = document.querySelector("#dateI").value;
    timeIRef.current = document.querySelector("#timeI").value;
    locationIRef.current = document.querySelector("#locationI").value;

    if (dateIRef.current && timeIRef.current && locationIRef.current) {
      handlePageChange("page4-nextofkin");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const returnToHomepage = () => {
    navigate("/Home");
  };

  const primaryInfo = {
    "How are you related to the deceased?": deceasedRelatedRef.current,
    // "Supporting Media": uploadedImageRef.current,
  };

  const addIWitness = async () => {
    console.log(userInfoCtx.accessToken);
    console.log(userInfoCtx.userId);
    const res = await fetch(
      `${import.meta.env.VITE_SERVER}/api/iWitness/${userInfoCtx.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfoCtx.accessToken}`,
        },
        body: JSON.stringify({
          type: witnessTypeRef.current,
          primaryInfo: primaryInfo,
          // media: {
          //   mediaURL1: mediaURL1Ref.current.value,
          //   mediaURL2: mediaURL2Ref.current.value,
          //   mediaURL3: mediaURL3Ref.current.value,
          // },
          addInfo: document.querySelector("#additionalInfoI").value,
          dateOccurred: dateIRef.current,
          timeOccurred: timeIRef.current,
          locationOccurred: locationIRef.current,
        }),
      }
    );
    if (res.ok) {
      witnessTypeRef.current = "";
      deceasedRelatedRef.current = "";
      dateIRef.current = "";
      timeIRef.current = "";
      locationIRef.current = "";
      const data = await res.json();
      console.log(data);
      setRefId(data.refId);
    } else {
      alert("There was an error submitting your report.");
      console.log(res.json());
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container">
      <div className="header">i-Witness Report</div>
      <hr></hr>

      {currentPage === "page1" && (
        <div className="row">
          <h3 className="info">
            <p className="incident">Respond to Appeals</p>
            <span className="star">*</span>
          </h3>
          <br />
          <div className="input-description">
            <select
              id="iWitnessType"
              name="type"
              className="large-select"
              defaultValue={""}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="missing">For Missing Persons</option>
              <option value="nextofkin">For Next-of-Kin</option>
              <option value="witnesses">For Witnesses</option>
            </select>
          </div>

          <br />

          <div className="handle-container">
            <button className="confirmbutton" onClick={handlePage1Change}>
              Confirm
            </button>
          </div>

          <br />
          <div className="urgent">
            For urgent and time-sensitive matters that require immediate
            attention, please contact the Police directly using the emergency
            hotline at 999.
          </div>
        </div>
      )}

      {currentPage === "page2-nextofkin" && (
        <div className="row">
          <h3 className="info">
            Appeal Information<span className="star">*</span>
          </h3>
          <img src={PIN1}></img>
          <br></br>

          <h3 className="info">
            How are you related to the deceased?<span className="star">*</span>
          </h3>
          <div className="description">
            Provide details about your relationship with the deceased. Be as
            clear and specific as possible.
          </div>
          <div className="input-description">
            <input
              id="deceasedRelated"
              type="text"
              placeholder="Enter Description"
              className="custom-input"
            ></input>
          </div>

          <br></br>

          <h3 className="info">Supporting Media</h3>
          <div className="description">
            Upload up to 3 images and/or videos.
          </div>
          <input id="uploadedImage" type="file" multiple></input>
          <br></br>

          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page1")}
            >
              Back
            </button>
            <button className="confirmbutton" onClick={handlePage2Change}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page3-nextofkin" && (
        <div className="row">
          <h3 className="info">
            Date, Time & Location<span className="star">*</span>
          </h3>
          <img src={PIN2}></img>
          <br></br>

          <h3 className="info">
            Date<span className="star">*</span>
          </h3>
          <div>
            If the incident happened over a period of time, please indicate the
            full range of dates.
          </div>
          <input id="dateI" type="date" placeholder="Enter Description"></input>
          <br></br>

          <h3 className="info">
            Time<span className="star">*</span>
          </h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <input id="timeI" type="time" placeholder="Enter Description"></input>
          <br></br>

          <h3 className="info">
            Location<span className="star">*</span>
          </h3>
          <div>
            Provide details about where it happened (e.g. building, floor, unit
            number, vehicle information ,etc.). Be as specific as possible.
          </div>
          <input
            id="locationI"
            type="text"
            placeholder="Enter Description"
          ></input>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page2-nextofkin")}
            >
              Back
            </button>
            <button className="confirmbutton" onClick={handlePage3Change}>
              Confirm
            </button>
          </div>
        </div>
      )}

      {currentPage === "page4-nextofkin" && (
        <div className="row">
          <h3 className="info">Additional Information</h3>
          <img src={PIN3}></img>
          <br></br>

          <h3 className="info">Additional Information (Optional)</h3>
          <div>
            Additional information that would deepen our understanding of the
            situation so that we can help you better.
          </div>
          <input
            id="additionalInfoI"
            type="text"
            placeholder="Enter Description"
          ></input>
          <br></br>
          <div className="handle-container">
            <button
              className="backbutton"
              onClick={() => handlePageChange("page4-nextofkin")}
            >
              Back
            </button>
            <button
              className="confirmbutton"
              onClick={() => {
                handlePageChange("page5-nextofkin");
                addIWitness();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {currentPage === "page5-nextofkin" && (
        <div className="row lnf-complete">
          <h3>Complete</h3>
          <img src={PIO4}></img>
          <br></br>
          <img className="tick" src={tick}></img>
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
            <button className="return" onClick={returnToHomepage}>
              Return to Home
            </button>
          </div>
        </div>
      )}
      <NavBar />
    </div>
  );
};

export default IWitness;
