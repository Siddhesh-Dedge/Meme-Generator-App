import React, { useState } from "react";
import Draggable from "react-draggable";

function Text() {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double Click to Edit");

  return (
    <Draggable>
      {editMode ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onDoubleClick={(e) => setEditMode(false)}
        />
      ) : (
        <h1 onDoubleClick={(e) => setEditMode(true)}>{value}</h1>
      )}
    </Draggable>
  );
}
export default Text;
