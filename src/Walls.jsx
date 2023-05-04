import { useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CusomObject";
import * as THREE from "three";
import {MeshMatcapMaterial } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
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
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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
export default function Experience(props) {
  // const three = useThree()
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  const groupRef = useRef();
  const colorMap = useLoader(TextureLoader, "wallTexture1.png");
  const logoMap = useLoader(TextureLoader, "logoTexture.jpg");
  const floorMap = useLoader(TextureLoader, "tile.jpg");
  const wallMap = useLoader(TextureLoader, "wallTexture.jpg");
  const car1 = useLoader(GLTFLoader, "./audi_r8_3d_model.glb");
  const car2 = useLoader(GLTFLoader, "./audi_r8.glb");
  const car3 = useLoader(GLTFLoader, "./audi_a4_b5.glb");
  const car4 = useLoader(GLTFLoader, "./audi_-_r8_gt3_lms.glb");
  const receptionDesk = useLoader(GLTFLoader, "./reception_desk_01.glb");

  const c1 = useRef();
  const c2 = useRef();
  const c3 = useRef();
  const c4 = useRef();
  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
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
      <directionalLight ref={directionalLight} position={[-50, 50, -10]} intensity={1.5}  />
      <ambientLight intensity={0.5} />

      <OrbitControls args={[camera, gl.domElement]} makeDefault />
      <group ref={groupRef}>
        <mesh position={[199.4, 134.5, 0]}>
          <boxGeometry args={[1.5, 30, 300]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[199.4, 60, -90]}>
          <boxGeometry args={[1.5, 120, 120]} />
          <meshStandardMaterial map={colorMap} color="gray" />
        </mesh>
        <mesh position={[-199.4, 75, 0]}>
          <boxGeometry args={[1.5, 150, 300]} />
          <meshStandardMaterial map={colorMap} />
        </mesh>
        <mesh position={[0, 75, -149.4]} rotation={[0, Math.PI * 0.5, 0]}>
          <boxGeometry args={[1.5, 150, 400]} />
          <meshStandardMaterial map={colorMap} />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-z={Math.PI * 0.5} scale={1}>
        <boxGeometry args={[1.5, 400, 300]} />
        <meshStandardMaterial />
      </mesh>

      

      {/* <TransformControls> */}
      <mesh position-y={150} rotation-z={Math.PI * 0.5} scale={1}>
        <boxGeometry args={[1.5, 400, 300]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* </TransformControls> */}

      {/* <mesh rotation={[0,  Math.PI / 2, 0]}>
        <ringBufferGeometry args={[10, 20, 8, 8, 0, 1.5]} />
        <meshStandardMaterial color={"grey"} />
      </mesh> */}

      {/* plane wall*/}

      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 75, -147]}>
        <planeGeometry args={[150, 400]} />
        <meshBasicMaterial side={THREE.FrontSide} map={wallMap} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[-198, 75, 0]}>
        <planeGeometry args={[300, 150]} />
        <meshBasicMaterial side={THREE.FrontSide} color={"black"} />
        <Html wrapperClass="htmlScreen" position={[4, 2, -3]}  transform >
        <iframe src="https://mumbaiya-ecommerce.vercel.app/" />
        </Html>
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
    
    />
      </mesh>

      {/* Logo */}

      <Logo position={[201, 135, -108]} logoMap={logoMap} />

      <Logo position={[-198, 100, 0]} logoMap={logoMap} />


      <group rotation={[0, Math.PI / 2, 0]} position={[200, 125, 90]}>
        <mesh scale={[12, 11, 4]} position={[-40, 0, 0]}>
          <Text3D font="./helvetiker_regular.typeface.json">
            Audi
            <meshBasicMaterial color="red" />
          </Text3D>
        </mesh>

        <mesh scale={[8, 6, 3]}>
          <Text3D font="./helvetiker_regular.typeface.json">
            Ahmedabad
            <meshBasicMaterial color="blue" />
          </Text3D>
        </mesh>
      </group>

      <primitive
        object={car1.scene}
        scale={20}
        position={[-150, 15.5, 0]}
        rotation={[0, Math.PI / 4.9, 0]}
        ref={c1}
      >
        <Html wrapperClass="label" position={[0, 2, 0]} center>
          Q1
        </Html>
      </primitive>
      <primitive
        object={car2.scene}
        scale={32}
        position={[-130, 0, -70]}
        rotation={[0, Math.PI / 6.9, 0]}
        ref={c2}
      >
        <Html wrapperClass="label" position={[0, 2, 0]} center>
          Q2
        </Html>
      </primitive>
      <primitive 
        object={car3.scene}
        scale={25}
        position={[-40, 18.5, -50]}
        rotation={[0, Math.PI / 7.9, 0]}
        ref={c3}
      >
        <Html wrapperClass="label" position={[0, 2, 0]} center>
          Q3
        </Html>
      </primitive>
      <primitive
        object={car4.scene}
        scale={30}
        position={[100, 0, 120]}
        rotation={[0, 0, 0]}
        ref={c4}
      >
        <Html wrapperClass="label" position={[0, 2, -3]} center>
          Q4
        </Html>
      </primitive>
      <primitive
        object={receptionDesk.scene}
        scale={[0.6, 1, 0.5]}
        position={[position+100, 41, -90]}

        rotation={[0, 0, 0]}
      ></primitive>

      <ambientLight></ambientLight>
      <TransformControls object={c1} />
      {/* <ContactShadows  position={ [ 0, - 0.99, 0 ] }/> */}
{/* <Sky/> */}
    </group>
  );
}
