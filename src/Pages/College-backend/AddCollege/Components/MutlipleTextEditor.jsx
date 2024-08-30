import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import TextEditor from "./TextEditor";

const MutlipleTextEditor = ({ editorValue, value, onChange }) => {
  const [inputBoxes, setInputBoxes] = useState([]);

  const handleAddInputBox = () => {
    setInputBoxes((prevInputBoxes) => [
      ...prevInputBoxes,
      { id: inputBoxes.length + 1, value: "" },
    ]);
  };

  const handleInputChange = (id, value) => {
    setInputBoxes((prevInputBoxes) =>
      prevInputBoxes.map((box) => (box.id === id ? { ...box, value } : box))
    );
  };

  const handleRemoveInputBox = (id) => {
    setInputBoxes((prevInputBoxes) =>
      prevInputBoxes.filter((box) => box.id !== id)
    );
  };

  return (
    <>
      <div>
        <div className="course-specialization-div">
          <TextEditor
            editorValue={editorValue}
            EditorValue={value}
            EditorOnChange={onChange}
          />
          {/* <div>
            <CiCirclePlus
              onClick={handleAddInputBox}
              size={60}
              className="circleplus-button"
            />
          </div> */}
        </div>
        {/* {inputBoxes.map((inputBox) => (
          <div
            key={inputBox.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              marginTop: "2rem",
              justifyContent: "space-between",
            }}
          >
            <TextEditor editorValue={editorValue} />
            <CiCircleMinus
              onClick={() => handleRemoveInputBox(inputBox.id)}
              size={50}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))} */}
      </div>
    </>
  );
};

export default MutlipleTextEditor;
