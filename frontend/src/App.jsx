import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import Singpass from "./components/Singpass";
import Tutorial from "./components/Tutorial";
import Home from "./components/Home";
import ReportACrime from "./components/ReportACrime";
import LostNFound from "./components/LostNFound";
import CaseStatus from "./components/CaseStatus";
import Cop from "./components/Cop";
import About from "./components/About";
import Toc from "./components/Toc";
import Privacy from "./components/Privacy";
import ContactUs from "./components/ContactUs";
import Appeals from "./components/Appeals";
import News from "./components/News";
import NewsContent from "./components/NewsContent";
import AppealOne from "./components/AppealOne";
import UserContext from "./contexts/user";
import ViewUpdate from "./components/ViewUpdate";
import IWitness from "./components/IWitness";
import NearestCentres from "./components/NearestCentres";
import Notification from "./components/Notification";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{
          accessToken,
          setAccessToken,
          userId,
          setUserId,
          userName,
          setUserName,
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <LoginPage />
                </Layout>
              }
            />
            <Route
              path="/singpass"
              element={
                <Layout>
                  <Singpass />
                </Layout>
              }
            />
            <Route
              path="/tutorial"
              element={
                <Layout>
                  <Tutorial />
                </Layout>
              }
            />
            <Route
              path="/home"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/Notification"
              element={
                <Layout>
                  <Notification />
                </Layout>
              }
            />
            <Route
              path="/reportacrime"
              element={
                <Layout>
                  <ReportACrime />
                </Layout>
              }
            />
            <Route
              path="/lostnfound"
              element={
                <Layout>
                  <LostNFound />
                </Layout>
              }
            />
            <Route
              path="/casestatus"
              element={
                <Layout>
                  <CaseStatus />
                </Layout>
              }
            />
            <Route
              path="/cop"
              element={
                <Layout>
                  <Cop />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/toc"
              element={
                <Layout>
                  <Toc />
                </Layout>
              }
            />
            <Route
              path="/privacy"
              element={
                <Layout>
                  <Privacy />
                </Layout>
              }
            />
            <Route
              path="/contactus"
              element={
                <Layout>
                  <ContactUs />
                </Layout>
              }
            />
            <Route
              path="/appeals"
              element={
                <Layout>
                  <Appeals />
                </Layout>
              }
            />
            <Route
              path="/AppealOne"
              element={
                <Layout>
                  <AppealOne />
                </Layout>
              }
            />
            <Route
              path="/News"
              element={
                <Layout>
                  <News />
                </Layout>
              }
            />
            <Route
              path="/NewsContent"
              element={
                <Layout>
                  <NewsContent />
                </Layout>
              }
            />
            <Route
              path="/ViewUpdate"
              element={
                <Layout>
                  <ViewUpdate />
                </Layout>
              }
            />
            <Route
              path="/IWitness"
              element={
                <Layout>
                  <IWitness />
                </Layout>
              }
            />
            <Route
              path="/NearestCentres"
              element={
                <Layout>
                  <NearestCentres />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
