import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

function Notes() {
  const [noteCollection, setNoteCollection] = useState([]);

  const handleAddNote = function () {
    console.log("click");
    setNoteCollection([...noteCollection, 1]);
    console.log(noteCollection);
  };

  return (
    <div className="notes_component ">
      <div className="wrapper_grid">
        <div className="container createwrapper " onClick={handleAddNote}>
          <div className="create">
            <h1>+</h1>
          </div>
        </div>
        {noteCollection.map((i, index) => (
          <div key={index} className="container">
            <h4>{index + 1}</h4>
            <Form.Control className="note_text_area" as="textarea" rows={10} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
