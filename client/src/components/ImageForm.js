import React, { useState } from "react";

import { uploadAction } from "./uploadAction";

const ImageForm = ({ handleNewImage }) => {
  const [image, setImage] = useState([]);
  const [preview, setPreview] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setPreview(true);
  };

  const clearImage = () => {
    setPreview(false);
    setImage("");
  };

  const handleSubmit = () => {
    uploadAction(image);
    setPreview(false);
    setImage(false);
    handleNewImage();
  };

  ////

  return (
    <div>
      {preview ? (
        <>
          <button onClick={clearImage}>X</button>
          <h5>Image Preview</h5>
          <img src={URL.createObjectURL(image)} alt="Preview of upload"></img>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <input
            type="file"
            onChange={handleImageUpload}
            accept="png jpg jpeg"
          />
        </>
      )}
    </div>
  );
};

export default ImageForm;
