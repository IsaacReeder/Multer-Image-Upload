import React, { useState } from "react";
import "./App.css";

import ImageContainer from "./components/ImageContainer";
import ImageForm from "./components/ImageForm";

function App() {
  const [newImage, setNewImage] = useState([]);

  const handleNewImage = () => {
    setNewImage(...newImage, "New image!");
  };

  return (
    <div className="App">
      <ImageContainer newImage={newImage} />
      <ImageForm handleNewImage={handleNewImage} />
    </div>
  );
}

export default App;
