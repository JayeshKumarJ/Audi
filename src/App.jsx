import { useState,StrictMode } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Experience1 from "./Experience1";
import * as THREE from "three";
import Walls from "./Walls";
import Scene from "./Scene";


// const created=({scene})=>{
// scene.background = new THREE.Color("#ff0000 ")
// }
function App() {
  const [count, setCount] = useState(0);
  const cameraSettings = {
    fov: 45,
    zoom: 100,
    near: 0.1,
    far: 200,
    position: [3, 2, 6],
  };
  return (
    <>  
      <Canvas shadows
      >
        <Scene/>
      </Canvas>

    </>
  );
}

export default App;
