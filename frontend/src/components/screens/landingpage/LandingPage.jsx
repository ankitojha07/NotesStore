import React from "react";
import "./landingpage.css";

import Notes from "../../../img/notes.jpg";

const LandingPage = () => {
  return (
    <div
      className="main flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${Notes})`,
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center md:text-9xl text-5xl font-bold text-pink-500 bg-white p-4">
        Welcome to NotesStore
      </h1>
      <blockquote class="text-2xl font-semibold italic text-center text-slate-900 mt-10">
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block p-4">
          <span class="relative text-white p-5">
            One Safe place for all your Notes.
          </span>
        </span>
      </blockquote>
      <div className="flex flex-row mt-10">
        <button class="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded-full">
          Sign up
        </button>

        <button class="bg-pink-500 hover:bg-pink-700 ml-10 text-white font-bold py-2 px-4 rounded-full">
          Log in
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
