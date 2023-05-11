import { useThree,useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import FirstFloor from "./firstFloor";
import Experience from "./Walls";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const Scene = () => {
  const { camera } = useThree();
  const colorMap = useLoader(TextureLoader, "texture.jpg");
  const granite = useLoader(TextureLoader, "granite1.jpg");


  useEffect(() => {
    camera.position.x = 18
    camera.position.y = 7
    camera.position.z = 17
  }, [])

  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <boxBufferGeometry args={[1000, 1000, 1]} />
        <meshStandardMaterial color={"lightgray"} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0,2,0]}>
        <boxBufferGeometry args={[20, 15, 3]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4,1.3,9]}>
          <boxBufferGeometry args={[8, 3, 3.4]} />
          <meshStandardMaterial map={granite} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4,1,11.248]}>
          <boxBufferGeometry args={[8, 1.5, 2.8]} />
          <meshStandardMaterial map={granite} />
        </mesh>
        
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4,1,12.75]}>
          <boxBufferGeometry args={[8, 1.5, 1.7]} />
          <meshStandardMaterial map={granite} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4,0.8,14.2]}>
          <boxBufferGeometry args={[8, 1.5, 0.9]} />
          <meshStandardMaterial map={granite} />
        </mesh>
    
    

      <mesh rotation={[Math.PI / -3.01, 0, 0]} position={[5,2,9.5]}>
        <boxBufferGeometry args={[4, 5.5, 0.5]} />
        <meshStandardMaterial map={granite} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4,10,9]}>
        <boxBufferGeometry args={[8, 3, 0.5]} />
        <meshStandardMaterial color={"white"} />
      </mesh>

      <Experience scale={0.05} position={[0, 3.6, 0]} />
      {/* <FirstFloor scale={0.05} position={[0, 3.6, 0]} /> */}

    </group>
  );
};

export default Scene;
