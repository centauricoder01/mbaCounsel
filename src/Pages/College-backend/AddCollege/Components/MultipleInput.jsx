import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const MultipleInput = ({ getfaqvalue, faqvalue }) => {
  // Here we handle multiple input tags
  const [inputBoxes, setInputBoxes] = useState([
    { id: 1, question: "", answer: "" },
  ]);

  // Now we will handle singel input tag
  const [samplefaqInputBox, setsamplefaqInputBox] = useState({
    id: 0,
    question: "",
    answer: "",
  });
  const handlesampleInputChange = (e) => {
    setsamplefaqInputBox({
      ...samplefaqInputBox,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddInputBox = () => {
    setInputBoxes((prevInputBoxes) => [
      ...prevInputBoxes,
      { id: inputBoxes.length + 1, question: "", answer: "" },
    ]);
  };

  const handleInputChange = (id, feild, value) => {
    setInputBoxes((prevInputBoxes) =>
      prevInputBoxes.map((box) =>
        box.id === id ? { ...box, [feild]: value } : box
      )
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <label>Enter Question </label>
          <input
            type="text"
            placeholder={"Enter Question"}
            name="question"
            value={samplefaqInputBox.question}
            onChange={handlesampleInputChange}
            style={{
              width: "100%",
              height: "3rem",
              fontSize: "1rem",
              borderRadius: "5px",
              backgroundColor: "#d8d8d8",
              border: "none",
              paddingLeft: " 5px",
            }}
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            name="answer"
            value={samplefaqInputBox.answer}
            onChange={handlesampleInputChange}
            placeholder="Enter Answer"
            style={{
              width: "100%",
              fontSize: "1rem",
              borderRadius: "5px",
              backgroundColor: "#d8d8d8",
              border: "none",
              paddingLeft: " 5px",
            }}
          ></textarea>
        </div>
        {inputBoxes.map((inputBox) => (
          <div
            key={inputBox.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                width: "95%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <input
                type="text"
                placeholder={"Enter Question"}
                value={inputBox.question}
                onChange={(e) =>
                  handleInputChange(inputBox.id, "question", e.target.value)
                }
                style={{
                  width: "100%",
                  height: "3rem",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  backgroundColor: "#d8d8d8",
                  border: "none",
                  paddingLeft: " 5px",
                }}
              />
              <textarea
                name="something"
                placeholder="Enter Answer"
                id=""
                cols="30"
                rows="10"
                value={inputBox.answer}
                onChange={(e) =>
                  handleInputChange(inputBox.id, "answer", e.target.value)
                }
                style={{
                  width: "100%",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  backgroundColor: "#d8d8d8",
                  border: "none",
                  paddingLeft: " 5px",
                }}
              ></textarea>
            </div>
            <CiCircleMinus
              onClick={() => handleRemoveInputBox(inputBox.id)}
              size={50}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0rem",
          }}
        >
          <CiCirclePlus
            onClick={handleAddInputBox}
            size={60}
            className="circleplus-button"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            getfaqvalue([...inputBoxes, samplefaqInputBox]);
          }}
          type="button"
          style={{
            fontSize: "1rem",
            padding: "1rem",
            border: "none",
            marginBottom: "1rem",
            borderRadius: "1rem",
            cursor: "pointer",
          }}
        >
          SAVE ME BEFORE SUBMIT
        </button>
      </div>
    </>
  );
};

export default MultipleInput;
