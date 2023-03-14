import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/screens/landingpage/LandingPage";
import MyNotes from "./components/screens/myNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" Component={LandingPage} exact />
        <Route path="/mynotes" Component={MyNotes} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
