import React, { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import "./IncreaseInputDiv.css";

const IncreaseInputDiv = () => {
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

  useEffect(() => {
    console.log(inputBoxes);
  }, [inputBoxes]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <label>Add City :</label>
        <input type="text" placeHolder={"Enter City"} />
      </div>
      {inputBoxes.map((inputBox) => (
        <div
          key={inputBox.id}
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            placeholder={"Enter City"}
            value={inputBox.value}
            onChange={(e) => handleInputChange(inputBox.id, e.target.value)}
            style={{ width: "62%" }}
          />
          <CiCircleMinus
            onClick={() => handleRemoveInputBox(inputBox.id)}
            size={30}
            style={{ cursor: "pointer" }}
          />
        </div>
      ))}

      <CiCirclePlus
        onClick={handleAddInputBox}
        size={60}
        className="circleplus-button"
      />
    </div>
  );
};

export default IncreaseInputDiv;