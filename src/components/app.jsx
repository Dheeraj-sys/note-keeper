import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notetext, setNotes] = useState([]);

  function addNote(note) {
    console.log(note);
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log("delete called");
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notetext.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
