import React, { useState, useRef, useEffect, useContext } from "react";
import UserContext from "../contexts/user";

const AppealOne = () => {
  const userInfoCtx = useContext(UserContext);
  const nameRef = useRef("");
  const appealTypeRef = useRef("");
  const imageRef = useRef("");
  const contentsRef = useRef("");
  const createdateRef = useRef("");

  const addAppeal = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_SERVER + "/api/appeals/seed",
        {
          method: "PUT",
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
        }
      );

      if (res.ok) {
        nameRef.current.value = "";
        appealTypeRef.current.value = "";
        imageRef.current.value = "";
        contentsRef.current.value = "";
        createdateRef.current.value = "";
      } else {
        const data = await res.json();
        alert(data.message);
        console.error(data);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div>
      <p>Appeal Information</p>
      <hr />
      <div className="appeal-details">
        <h3 className="appeal-name">{appealData.name}</h3>
        <div className="appeal-info">
          <p className="appeal-type">Type: {appealData.type}</p>
          <p className="appeal-contents">{appealData.contents}</p>
          <p className="appeal-createdat">Created At: {appealData.createdAt}</p>
        </div>
      </div>
      <img
        className="appeal-image"
        src={appealData.imageURL}
        alt="Appeal Image"
      />
    </div>
  );
};

export default AppealOne;
