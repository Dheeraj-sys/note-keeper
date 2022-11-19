import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";
import {Zoom} from "@material-ui/core";

function CreateArea(props) {
  const [currText, setText] = useState({ title: "", content: "" });

  const [isExpanded, setExpanded] = useState(false);

  function addNew(event) {
    const { name, value } = event.target;

    setText((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function sendNote(event) {
    props.onAdd(currText);
    setText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expansion() {
  setExpanded(true);
  }

  return (
    <div>
    <form className="create-note">
      {isExpanded && (
        <input
          onChange={addNew}
          value={currText.title}
          name="title"
          placeholder="Title"
        />
      )}
        <textarea
          onChange={addNew}
          onClick={expansion}
          value={currText.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {
        //<button onClick={sendNote}>Add</button
        <Zoom in={isExpanded}>
          <Fab onClick={sendNote}>
            <NoteAddIcon />
          </Fab>
        </Zoom>
      }
      </form>
    </div>
  );
}

export default CreateArea;
