import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import Experience from "./Walls";

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.x = 18
    camera.position.y = 5
    camera.position.z = 20
  }, [])

  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <boxBufferGeometry args={[100, 100, 1]} />
        <meshStandardMaterial color={"lightgray"} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0,2,0]}>
        <boxBufferGeometry args={[20, 15, 3]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4,1,8.5]}>
        <boxBufferGeometry args={[8, 2, 3]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-4,0.8,10.5]}>
        <boxBufferGeometry args={[8, 2, 1.5]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>

      <mesh rotation={[Math.PI / -3.01, 0, 0]} position={[5,2,9.5]}>
        <boxBufferGeometry args={[6, 5.5, 0.5]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>

      <Experience scale={0.05} position={[0, 3.6, 0]} />

    </group>
  );
};

export default Scene;
