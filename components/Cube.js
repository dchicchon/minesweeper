import React, { useState, useRef } from "react";
import { OrbitControls, Plane } from "@react-three/drei";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import styles from "../styles/game.module.css";
import { DoubleSide } from "three";
// extend({ OrbitControls })

// const Plane = () => {
//   return (
//     <mesh>
//       <planeBufferGeometry args={[1, 1, 1]} />
//       <meshLambertMaterial color="orange" />
//     </mesh>
//   );
// };

const Cell = (props) => {
  const [hovered, hover] = useState(false);
  return (
    <Plane
      onPointerEnter={() => hover(true)}
      onPointerLeave={() => hover(false)}
      position={props.position}
      rotation={props.rotation}
    >
      <meshPhongMaterial
        side={DoubleSide}
        color={hovered ? "hotpink" : "orange"}
      />
    </Plane>
  );
};

const CubeFace = () => {};

// maybe cube should be a bunch of planes made togther?
const Cube = () => {
  useFrame((state, delta) => {
    // ref.current.rotation.x += 0.01
    // ref.current.rotation.y += 0.01
  });

  //   Make everything centered!
  //   Position (x, y, z)
  return (
    <>
      <Cell position={[0, 0, -0.5]} rotation={[0, 0, 0]} />
      <Cell position={[0, 0, 0.5]} rotation={[0, 0, 0]} />
      <Cell position={[-0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </>
  );
};

const SceneItems = () => {
  return (
    <>
      <OrbitControls minDistance={2} maxDistance={2.75} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Cube position={[1, 1, 1]} />
    </>
  );
};

const CompleteScene = () => {
  return (
    <div id={styles.scene}>
      <Canvas>
        <SceneItems />
      </Canvas>
    </div>
  );
};

export default CompleteScene;
