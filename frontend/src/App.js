import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/screens/landingpage/LandingPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <Footer />
    </React.Fragment>
  );
};

export default App;
