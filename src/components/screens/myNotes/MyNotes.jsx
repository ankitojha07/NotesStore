import React from "react";
import MainScreen from "../../reusables/MainScreen";
import Button from "../../reusables/Button";
import { Link } from "react-router-dom";

import notes from "../../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };

  return (
    <MainScreen title="Welcome back Ankit Ojha...">
      <Link to="createnote" className="mt-10">
        <Button>Create New Note</Button>
      </Link>
      {notes.map((note) => (
        <div class="max-w-full rounded overflow-hidden shadow-lg mt-10">
          <div class="px-6 py-4">
            <div className="flex flex-row justify-between">
              <div class="font-bold text-xl mb-2">{note.title}</div>
              <div className="buttons">
                <Button>
                  <Link to={`/note/${note._id}`}>Edit</Link>
                </Button>
                <Button>
                  <Link onClick={() => deleteHandler(note._id)}>Delete</Link>{" "}
                </Button>
              </div>
            </div>
            <h4 className="bg-green-500 w-min px-3 py-1 text-white">
              {note.category}
            </h4>
            <p class="text-gray-700 text-base mt-5">{note.content}</p>
          </div>
          <div class="px-6 pt-2 pb-2">
            <span class="inline-block text-sm font-medium text-black mr-2 mb-2">
              - Created on date
            </span>
          </div>
        </div>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
