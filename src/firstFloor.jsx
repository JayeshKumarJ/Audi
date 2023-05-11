import { useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import {
  Html,
  Text3D,
  TransformControls,
  OrbitControls,
  MeshReflectorMaterial,
  useHelper,
  ContactShadows,
  Sky
} from "@react-three/drei";
import { useControls } from 'leva'
const Logo = (props) => {
  const { logoMap } = props;
  return (
    <group {...props}>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[7, 0.75, 16, 100, 6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0, 12]}>
        <torusGeometry args={[7, 0.75, 16, 100, 6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0, 24]}>
        <torusGeometry args={[7, 0.75, 16, 100, 6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0, 36]}>
        <torusGeometry args={[7, 0.75, 16, 100, 6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap} />
      </mesh>
    </group>
  );
};

// extend({ OrbitControls });
export default function FirstFloor(props) {
  // const three = useThree()
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  const groupRef = useRef();


  // console.log(three)                                           

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
  });
  const { position } = useControls({
    position:
    {
        value: - 2,
        min: - 10,
        max: 10,
        step: 0.01
    }
})
  return (
    <group  {...props}>
      <ambientLight intensity={0.5} />

      <OrbitControls args={[camera, gl.domElement]} makeDefault />
      <group ref={groupRef}>
        <mesh position={[449.4, 200  , 175]}>
          <boxGeometry args={[1.5, 100, 550]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[449.4, 75, -275]}>
          <boxGeometry args={[1.5, 350, 350]} />
          <meshStandardMaterial  color="red" />
        </mesh>
        <mesh position={[-450.4, 75, 0]}>
          <boxGeometry args={[1.55, 350, 900]} />
          <meshStandardMaterial  color="red"/>
        </mesh>
        <mesh position={[0, 75, -449.4]} rotation={[0, Math.PI * 0.5, 0]}>
          <boxGeometry args={[1.5, 350, 900]} />
          <meshStandardMaterial  color="red"/>
        </mesh>
      </group>

      <mesh position-y={-100} rotation-z={Math.PI * 0.5} scale={1}>
        <boxGeometry args={[1.5, 900, 900]} />
        <meshStandardMaterial  color="black"/>
      </mesh>

      

      {/* <TransformControls> */}
      <mesh position-y={250} rotation-z={Math.PI * 0.5} scale={1}>
        <boxGeometry args={[1.5, 900, 900]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* plane wall*/}

      {/* <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 75, -147]}>
        <planeGeometry args={[150, 400]} />
        <meshBasicMaterial side={THREE.FrontSide}  />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[-198, 75, 0]}>
        <planeGeometry args={[300, 150]} />
        <meshBasicMaterial side={THREE.FrontSide} color={"black"} />
        
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[198.5, 134.5, 0]}>
        <planeGeometry args={[300, 30]} />
        <meshBasicMaterial side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[198.5, 60, -90]}>
        <planeGeometry args={[120, 120]} />
        <meshBasicMaterial side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-1, 0, 0]} >
        <planeGeometry args={[400, 300]} />
        <meshStandardMaterial color="white"side={THREE.DoubleSide}  
    
    /> */}
      {/* </mesh> */}

      {/* Logo */}

      <group rotation={[0, Math.PI / 2, 0]} position={[450, 170, 350]}>
        <mesh scale={[25, 25, 10]} position={[-80, 0, 0]}>
          <Text3D font="./helvetiker_regular.typeface.json">
            Audi
            <meshBasicMaterial color="red" />
          </Text3D>
        </mesh>

        <mesh scale={[15, 15, 10]}>
          <Text3D font="./helvetiker_regular.typeface.json">
            Ahmedabad
            <meshBasicMaterial color="blue" />
          </Text3D>
        </mesh>
      </group>

     

      <ambientLight></ambientLight>
      {/* <TransformControls object={c1} /> */}
      {/* <ContactShadows  position={ [ 0, - 0.99, 0 ] }/> */}
{/* <Sky/> */}
    </group>
  );
}
