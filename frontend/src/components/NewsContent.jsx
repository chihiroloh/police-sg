import React, { useEffect } from "react";
import NavBar from "./NavBar";
import newsimg from "../assets/newsimg.png";
const NewsContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <p>News</p>
      <hr />
      <h2>
        124 persons investigated in unlicensed moneylending suppression
        operation
      </h2>
      <img src={newsimg} />
      <p>
        Some of the suspects allegedly opened bank accounts and provided their
        ATM cards, PINs or Internet banking tokens to unlicensed moneylenders.
        PHOTO: ST
      </p>
      <p>20/10/2023 12:32PM</p>
      <p>
        The Police are investigating 124 persons, aged between 17 and 69, for
        their suspected involvement in unlicensed moneylending activities,
        following an unlicensed moneylending suppression operation conducted
        between 19 and 23 October 2023.
      </p>
      <p>
        Officers from the Criminal Investigation Department and seven police
        land divisions conducted simultaneous raids islandwide from Oct 19 to
        25.
      </p>
      <p>
        Preliminary investigations revealed that eight of the suspects had
        allegedly harassed debtors at their homes, while another 41 are believed
        to be runners who had allegedly carried out ATM transfers for the
        illegal moneylending businesses.
      </p>
      <p>
        The remaining 75 suspects had allegedly opened bank accounts and
        provided their ATM cards, personal identification numbers or Internet
        banking tokens to unlicensed moneylenders to facilitate their unlicensed
        moneylending businesses.
      </p>
      <p>
        The police said that a person is presumed to have assisted in an
        unlicensed moneylending business if his bank account, ATM card or
        Internet banking token is used to facilitate moneylending by an
        unlicensed moneylender.
      </p>
      <p>
        Members of the public are advised to stay away from credit loan or
        moneylending operations. The public can call the Police at ‘999’ if they
        suspect or know of anyone who could be involved in illegal moneylending
        activities.
      </p>
      <NavBar />
    </div>
  );
};

export default NewsContent;
