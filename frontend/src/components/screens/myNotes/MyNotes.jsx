import React from "react";
import MainScreen from "../../reusables/MainScreen";
import Button from "../../reusables/Button";
import { Link } from "react-router-dom";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome back Ankit Ojha...">
      <Link to="createnote" className="mt-10">
        <Button>Create New Note</Button>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
