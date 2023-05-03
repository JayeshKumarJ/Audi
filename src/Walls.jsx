import { useFrame, extend, useThree,useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CusomObject";
import * as THREE from "three";
import { BackSide, MeshMatcapMaterial } from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Text3D} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

extend({ OrbitControls });
export default function Experience() {
  // const three = useThree()
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  const groupRef = useRef();
  const colorMap = useLoader(TextureLoader, 'wallTexture1.png')
  const logoMap = useLoader(TextureLoader, 'logoTexture.jpg')
  const floorMap = useLoader(TextureLoader, 'tile.jpg')
  const wallMap = useLoader(TextureLoader, 'wallTexture.jpg')
  const car1 = useLoader(GLTFLoader, './audi_r8_3d_model.glb')
  const car2 = useLoader(GLTFLoader, './audi_r8.glb')
  const car3 = useLoader(GLTFLoader, './audi_a4_b5.glb')
  const car4 = useLoader(GLTFLoader, './audi_-_r8_gt3_lms.glb')
  const receptionDesk = useLoader(GLTFLoader, './reception_desk_01.glb')





  // console.log(three)

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
  });

  return (
    <group scale={0.5}>
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} /> */}
      <ambientLight intensity={0.5} />

      <orbitControls args={[camera, gl.domElement]} />
      <group ref={groupRef}>
        <mesh position={[199.4, 134.5, 0]}>
          <boxGeometry args={[1.5, 30, 300]} />
          <meshStandardMaterial map={colorMap} />
        </mesh>
        <mesh position={[199.4, 60, -90]}>
          <boxGeometry args={[1.5, 120, 120]} />
          <meshStandardMaterial map={colorMap} />
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

      <mesh position-y={150} rotation-z={Math.PI * 0.5} scale={1}>
        <boxGeometry args={[1.5, 400, 300]} />
        <meshStandardMaterial color="black"/>
      </mesh>

      {/* <mesh rotation={[0,  Math.PI / 2, 0]}>
        <ringBufferGeometry args={[10, 20, 8, 8, 0, 1.5]} />
        <meshStandardMaterial color={"grey"} />
      </mesh> */}
        


{/* plane wall*/}

    <mesh rotation={[0,0,Math.PI/2]} position={[0,75,-148]} >
          <planeBufferGeometry args={[150,400]}/>
          <meshBasicMaterial side= {THREE.FrontSide} map={wallMap}/>
    </mesh>

    <mesh rotation={[0,Math.PI/2,0]} position={[-198,75,0]} >
          <planeBufferGeometry args={[300,150]}/>
          <meshBasicMaterial side= {THREE.FrontSide}/>
    </mesh>

    <mesh rotation={[0,Math.PI/2,0]} position={[198.5,134.5,0]} >
          <planeBufferGeometry args={[300,30]}/>
          <meshBasicMaterial side= {THREE.DoubleSide}/>
    </mesh>
    
    <mesh rotation={[0,Math.PI/2,0]} position={[198.5, 60, -90]} >
          <planeBufferGeometry args={[120,120]}/>
          <meshBasicMaterial side= {THREE.DoubleSide}/>
    </mesh>

    <mesh rotation={[Math.PI/2,0,0]} position={[-1,0,0]} >
          <planeBufferGeometry args={[400,300]}/>
          <meshBasicMaterial side= {THREE.BackSide} map={floorMap}/>
    </mesh>

    

{/* Logo */}

      <group  position={[201,135,-108]}>
      <mesh rotation={[0,  Math.PI / 2, 0]}>
      <torusGeometry args={[7,0.75,16,100,6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap}/>
      </mesh>
      <mesh rotation={[0,  Math.PI / 2, 0]} position={[0,0,12]}>
        <torusGeometry args={[7,0.75,16,100,6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap}/>      
      </mesh>
      <mesh rotation={[0,  Math.PI / 2, 0]} position={[0,0,24]}>
        <torusGeometry args={[7,0.75,16,100,6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap}/>      
      </mesh>
      <mesh rotation={[0,  Math.PI / 2, 0]} position={[0,0,36]}>
        <torusGeometry args={[7,0.75,16,100,6.28]} />
        <meshMatcapMaterial metalness={0.5} matcap={logoMap}/>
      
      </mesh>
      </group>

    <group rotation={[0,Math.PI/2,0]} position={[200,125,90]}>
      <mesh scale={[12,11,4]} position={[-40,0,0]}>
        <Text3D font="./helvetiker_regular.typeface.json">
          Audi
          <meshBasicMaterial color="red"/>
        </Text3D>
      </mesh>
      
      <mesh scale={[8,6,3]}>
        <Text3D font="./helvetiker_regular.typeface.json">
          Ahmedabad
          <meshBasicMaterial color="blue"/>
        </Text3D>
      </mesh>

    </group>

    <primitive object={ car1.scene } scale={20} position={[-150,15.5,0]} rotation={[0,Math.PI/4.9,0]}/>
    <primitive object={ car2.scene } scale={32} position={[-130,0,-70]} rotation={[0,Math.PI/6.9,0]}/>
    <primitive object={ car3.scene } scale={25} position={[-40,18.5,-50]} rotation={[0,Math.PI/7.9,0]}/>
    <primitive object={ car4.scene } scale={30} position={[100,0,120]} rotation={[0,0,0]}/>
    <primitive object={ receptionDesk.scene } scale={[0.6,1,0.5]} position={[130,41,-90]} rotation={[0,0,0]}/>

    <ambientLight></ambientLight>
    </group>
  );
}
