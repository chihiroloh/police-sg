import React from "react";
import Navbar from "./Navbar";

const Privacy = () => {
  return (
    <div>
      <h1>POLICE@SG APP PRIVACY POLICY</h1>
      <ol>
        <li>
          <p>
            For the purposes of this privacy statement, the terms “we”, “us”,
            “our” and “Police@SG” refer to the Singapore Police Force (“SPF”).
            The terms “you” and “end-user” refer to You as a user of this App.
          </p>
        </li>
        <li>
          <p>
            This App may collect and store certain information automatically.
            This information will not be shared with anyone beyond the website
            support staff, except when required by law enforcement and
            prosecution, and will be used only as a source of anonymous
            statistical information. This information may include:
          </p>
          <ol type="i">
            <li>
              Internet Protocol (IP) address of the domain from which you access
              the Internet, either your individual address or the proxy provided
              by your Internet Service Provider (ISP).
            </li>
            <li>Date and time you access our App.</li>
            <li>
              Screens you viewed (recorded by the text and graphics files that
              compose that page).
            </li>
            <li>
              Web address of the site from which you linked directly to our App.
            </li>
            <li>Operating system of the mobile devices you are using.</li>
          </ol>
        </li>
        <li>
          <p>
            SPF is the sole owner of the information collected on this App. The
            App collects personally identifiable information from our users at
            several different points on our App.
          </p>
        </li>
        <li>
          <p>
            We may use the summary statistics to help us make our App more
            useful to visitors, such as assessing what information is of most
            and least interest to visitors, and for other purposes such as
            determining the App's technical design specifications and
            identifying system performance or problem areas.
          </p>
        </li>
        <li>
          <p>
            The App does not create individual profiles with the information you
            provide. If information is collected, it will be used solely in
            connection with Police@SG, or for such other purposes as are
            described at the point of collection. SPF does not give, sell, or
            transfer any personal information to any third party.
          </p>
        </li>
        <li>
          <p>
            If you choose to submit your personally identifiable data through
            the App, we may share necessary data with other Government agencies,
            so as to provide Whole of Government services to you in an efficient
            and effective way, unless such sharing is prohibited by law. We will
            NOT share your personal data with non-Government entities, except
            where such entities have been authorised to carry out specific
            Government services.
          </p>
        </li>
        <li>
          <p>
            For your convenience, we may also display your data which you have
            previously supplied us or other Government agencies. This will speed
            up the transaction and save you the trouble of repeating previous
            submissions. Should the data be out-of-date, please provide us with
            updated and accurate data. We will retain your personal data only to
            the extent necessary for the effective delivery of public services
            to you.
          </p>
        </li>
        <li>
          <p>
            To safeguard your personal data, all electronic storage and
            transmission of personal data is secured with appropriate security
            technologies.
          </p>
        </li>
        <li>
          <p>
            This App may contain links to non-Government sites whose data
            protection and privacy practices may differ from ours. SPF is not
            responsible for the content and privacy practices of these other
            websites and encourages you to read the privacy notices of those
            sites.
          </p>
        </li>
        <li>
          <p>
            Please note that all information, and / or materials (including
            graphics, design, acoustics & accompaniments) in this website may
            not be used or reproduced, in part or whole, without the written
            consent of the Singapore Police Force, Public Affairs Department.
          </p>
        </li>
      </ol>
      <Navbar />
    </div>
  );
};

export default Privacy;
