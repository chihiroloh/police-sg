import React, { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/user";

const AppealOne = () => {
  const userInfoCtx = useContext(UserContext);
  const [appealData, setAppealData] = useState(null);

  const fetchAppealData = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + "/api/appeals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfoCtx.accessToken,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setAppealData(data);
      } else {
        const errorData = await res.json();
        alert(errorData.message);
        console.error(errorData);
      }
    } catch (error) {
      console.error("Error fetching appeals:", error.message);
    }
  };

  useEffect(() => {
    fetchAppealData();
  }, []);

  return (
    <div>
      <p>Appeal Information</p>
      <hr />
      {appealData ? (
        <div className="appeal-details">
          {appealData.map((appeal, index) => (
            <div key={index} className="appeal-info">
              <h3 className="appeal-name">{appeal.name}</h3>
              <p className="appeal-type">Type: {appeal.type}</p>
              <p className="appeal-contents">{appeal.contents}</p>
              <p className="appeal-createdat">Created At: {appeal.createdAt}</p>
              <img
                className="appeal-image"
                src={appeal.imageURL}
                alt="Appeal"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading appeal data...</p>
      )}
    </div>
  );
};

export default AppealOne;
