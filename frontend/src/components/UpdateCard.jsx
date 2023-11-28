import React, { useEffect, useState } from "react";
import ms from "ms";
import "./UpdateCard.css";

const UpdateCard = (props) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const generateDateTime = () => {
    const date = new Date(props.update.createdAt);
    const localeDateString = date.toLocaleDateString();
    const localeTimeString = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setDate(localeDateString);
    setTime(localeTimeString);
  };

  const generateElapsedTime = () => {
    const date = Date.now();
    const createdAtDate = new Date(props.update.createdAt);
    const elapsedTime = ms(date - createdAtDate);
    return elapsedTime;
  };

  useEffect(() => {
    generateDateTime();
  }, []);

  return (
    <>
      {props.update.type === "receipt" && (
        <div>
          <p>
            Police@SG has received your report. (Report Ref: {props.refId}).
            Your police report has been assigned to Investigation Officer{" "}
            {props.update.io} of {props.update.branch}.
          </p>
          <div className="submission-info">
            <p className="elapsed-time">{generateElapsedTime()} ago</p>
            <p className="submission-time">{time}</p>
            <p className="interpunct">&#183;</p>
            <p className="submission-date">{date}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateCard;
