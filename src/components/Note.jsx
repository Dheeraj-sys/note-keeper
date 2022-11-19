import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function getUpdate(id) {
    props.delete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={getUpdate}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
