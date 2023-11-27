// About Police@SG
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import "./About.css";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <p className="about-header">About Police@SG</p>
      <hr />
      <p className="about-text">
        Police@SG is an initiative by the Singapore Police Force, which allows
        you to report crimes on top of having access to useful information and
        e-services. With Police@SG, you will have the following services at your
        fingertips: Report crimes that you have encountered or been involved
        with File a Lost & Found report Check for updates regarding cases you
        have reported Keep up to date on the latest crime news as well as police
        appeals for information and missing persons Submit information or
        respond to police appeals Quick access to all our hotlines Locate the
        nearest police station from your current location Information on COP
        volunteers and application information for citizens who are keen on
        signing up
      </p>
      <NavBar />
    </div>
  );
};

export default About;
