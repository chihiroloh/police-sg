import React, { useState, useRef, useEffect, useContext } from "react";
import UserContext from "../contexts/user";

const AppealOne = () => {
  const userInfoCtx = useContext(UserContext);
  const nameRef = useRef("");
  const appealTypeRef = useRef("");
  const imageRef = useRef("");
  const contentsRef = useRef("");
  const createdateRef = useRef("");

  const [appealData, setAppealData] = useState(null);

  const addAppeal = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + "/api/appeals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfoCtx.accessToken,
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          type: appealTypeRef.current.value,
          imageURL: imageRef.current.value,
          contents: contentsRef.current.value,
          createdAt: createdateRef.current.value,
        }),
      });

      if (res.ok) {
        nameRef.current.value = "";
        appealTypeRef.current.value = "";
        imageRef.current.value = "";
        contentsRef.current.value = "";
        createdateRef.current.value = "";

        // Fetch and update appeal data after adding
        fetchAppealData();
      } else {
        const data = await res.json();
        alert(data.message);
        console.error(data);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Fetch appeal data function
  const fetchAppealData = async () => {
    try {
      const res = await fetch(
        // Replace with the correct API endpoint to fetch appeal data
        import.meta.env.VITE_SERVER + "/api/appeals"
      );

      if (res.ok) {
        const data = await res.json();
        // Assuming you want to display the first appeal data
        if (data.length > 0) {
          setAppealData(data[0]);
        }
      } else {
        console.error("Failed to fetch appeal data");
      }
    } catch (error) {
      console.error("Error fetching appeal data:", error);
    }
  };

  useEffect(() => {
    fetchAppealData(); // Fetch initial appeal data when the component mounts
  }, []);

  return (
    <div>
      <p>Appeal Information</p>
      <hr />
      {appealData ? (
        <div className="appeal-details">
          <h3 className="appeal-name">{appealData.name}</h3>
          <div className="appeal-info">
            <p className="appeal-type">Type: {appealData.type}</p>
            <p className="appeal-contents">{appealData.contents}</p>
            <p className="appeal-createdat">
              Created At: {appealData.createdAt}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading appeal data...</p>
      )}
      <img
        className="appeal-image"
        src={appealData?.imageURL}
        alt="Appeal Image"
      />
    </div>
  );
};

export default AppealOne;
