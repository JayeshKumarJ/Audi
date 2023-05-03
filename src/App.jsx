import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Experience1 from "./Experience1";
import * as THREE from "three";
import Walls from "./Walls";

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
      <Canvas
        // flat
        // linear
        // orthographic
        camera={{
          fov: 80,
          far: 1000,
          position: [500, 500, 500]
        }}
      >
        <Walls />
      </Canvas>
    </>
  );
}

export default App;
