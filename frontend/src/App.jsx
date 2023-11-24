import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import Singpass from "./components/Singpass";
import Tutorial from "./components/Tutorial";
import Home from "./components/Home";

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
