import React, { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/user";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "./Notification.css";
import notificationImage from "../assets/noti.png";
import policeNotificationImage from "../assets/policenoti.png";

const Notification = () => {
  const userInfoCtx = useContext(UserContext);
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/reports/${userInfoCtx.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfoCtx.accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div>
      <p className="noti-header">Notifications</p>
      <hr />
      <div className="noti">
        <p className="noti-user">{userInfoCtx.userName}</p>
        <p className="ic">SXXXX567D</p>
        <img src={notificationImage} alt="Notification" />
        <img src={policeNotificationImage} alt="Police Notification" />
        <p className="notifications">Notifications</p>
        <div>
          <div className="noti-map">
            {notifications.map((notification, index) => (
              <Link to="/ViewUpdate" key={index}>
                <div className="noti-container">
                  There is a new update on your case{" "}
                  <p className="noti-ref">
                    (Police Report Ref: {notification.refId}).
                  </p>
                  Click here to view the latest update.
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Notification;
