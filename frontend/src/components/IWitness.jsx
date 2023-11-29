import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import UserContext from "../contexts/user";

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
  const mediaURL1Ref = useRef("");
  const mediaURL2Ref = useRef("");
  const mediaURL3Ref = useRef("");
  const addInfoRef = useRef("");
  const dateOccurredRef = useRef("");
  const timeOccurredRef = useRef("");
  const locationOccurredRef = useRef("");

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
          <h3>Respond to Appeals*</h3>
          <br />
          <select id="iWitnessType" name="type" defaultValue={""}>
            <option value="" disabled>
              Select Category
            </option>
            <option value="missing">For Missing Persons</option>
            <option value="nextofkin">For Next-of-Kin</option>
            <option value="witnesses">For Witnesses</option>
          </select>
          <br />
          <button onClick={handlePage1Change}>Confirm</button>
          <br />
          <div>
            For urgent and time-sensitive matters that require immediate
            attention, please contact the Police directly using the emergency
            hotline at 999.
          </div>
        </div>
      )}

      {currentPage === "page2-nextofkin" && (
        <div className="row">
          <h3>Appeal Information*</h3>
          <img></img>
          <br></br>

          <h3>How are you related to the deceased?*</h3>
          <div>
            Provide details about your relationship with the deceased. Be as
            clear and specific as possible.
          </div>
          <input
            id="deceasedRelated"
            type="text"
            placeholder="Enter Description"
          ></input>
          <br></br>

          <h3>Supporting Media</h3>
          <div>Upload up to 3 images and/or videos.</div>
          <input id="uploadedImage" type="file" multiple></input>
          <br></br>

          <button onClick={() => handlePageChange("page1")}>Back</button>
          <button onClick={handlePage2Change}>Confirm</button>
        </div>
      )}

      {currentPage === "page3-nextofkin" && (
        <div className="row">
          <h3>Date, Time & Location*</h3>
          <img></img>
          <br></br>

          <h3>Date*</h3>
          <div>
            If the incident happened over a period of time, please indicate the
            full range of dates.
          </div>
          <input id="dateI" type="date" placeholder="Enter Description"></input>
          <br></br>

          <h3>Time*</h3>
          <div>
            If uncertain about the exact time, please provide an estimate or
            indicate as “unsure”.
          </div>
          <input id="timeI" type="time" placeholder="Enter Description"></input>
          <br></br>

          <h3>Location*</h3>
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

          <button onClick={() => handlePageChange("page2-nextofkin")}>
            Back
          </button>
          <button onClick={handlePage3Change}>Confirm</button>
        </div>
      )}

      {currentPage === "page4-nextofkin" && (
        <div className="row">
          <h3>Additional Information</h3>
          <img></img>
          <br></br>

          <h3>Additional Information (Optional)</h3>
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

          <button onClick={() => handlePageChange("page4-nextofkin")}>
            Back
          </button>
          <button
            onClick={() => {
              handlePageChange("page5-nextofkin");
              addIWitness();
            }}
          >
            Submit
          </button>
        </div>
      )}

      {currentPage === "page5-nextofkin" && (
        <div className="row">
          <h3>Complete</h3>
          <img></img>
          <br></br>
          <img></img>
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

          <button onClick={returnToHomepage}>Return to Home</button>
        </div>
      )}

      <NavBar />
    </div>
  );
};

export default IWitness;
