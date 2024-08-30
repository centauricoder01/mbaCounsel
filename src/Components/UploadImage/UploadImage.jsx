import React from "react";

const UploadImage = ({ handleUpload, value }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "1px solid black",
          position: "relative",
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          style={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
        <span style={{ fontSize: "30px", marginBottom: "10px" }}>+</span>
        <span>Upload</span>
      </div>
      {value && <img src={value} width={200} alt="Uploaded" />}
    </div>
  );
};

export default UploadImage;
