import React, { useState } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import MindARViewer from "./mindar-viewer";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className='App'>
      <MindARViewer />
    </div>
  );
}

export default App;
