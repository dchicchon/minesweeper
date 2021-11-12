import React, { useState } from "react";
import { OrbitControls, Plane, useCursor } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "../styles/game.module.css";
import { DoubleSide } from "three";

const Cell = (props) => {
  const [hovered, hover] = useState(false);
  const [checked, setChecked] = useState(false);

  useCursor(hovered);

  const colorStyle = () => {
    if (hovered) return "hotpink";
    if (checked) return "lightblue";
    return "orange";
  };
  return (
    <Plane
      scale={1}
      onClick={(e) => {
        e.stopPropagation();
        setChecked(!checked);
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
        hover(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        hover(false);
      }}
      position={props.position}
      rotation={props.rotation}
    >
      <meshPhongMaterial side={DoubleSide} color={colorStyle()} />
    </Plane>
  );
};
// maybe cube should be a bunch of planes made togther?
const Cube = () => {
  useFrame((state, delta) => {});

  return (
    <>
      {/* Back Face */}
      <Cell position={[-1, 1, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[-1, 0, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[-1, -1, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[0, 1, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[0, 0, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[0, -1, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[1, 1, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[1, 0, -1.5]} rotation={[0, 0, 0]} />
      <Cell position={[1, -1, -1.5]} rotation={[0, 0, 0]} />

      {/* Front Face */}
      <Cell position={[-1, 1, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[-1, 0, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[-1, -1, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[0, 1, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[0, 0, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[0, -1, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[1, 1, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[1, 0, 1.5]} rotation={[0, 0, 0]} />
      <Cell position={[1, -1, 1.5]} rotation={[0, 0, 0]} />

      {/* Left Face */}
      <Cell position={[-1.5, 1, 1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, 0, 1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, -1, 1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, 1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, -1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, 1, -1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, 0, -1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[-1.5, -1, -1]} rotation={[0, Math.PI / 2, 0]} />

      {/* Right Face */}
      <Cell position={[1.5, 1, 1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, 0, 1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, -1, 1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, 1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, -1, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, 1, -1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, 0, -1]} rotation={[0, Math.PI / 2, 0]} />
      <Cell position={[1.5, -1, -1]} rotation={[0, Math.PI / 2, 0]} />

      {/* Bottom Face */}
      <Cell position={[1, -1.5, 1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[0, -1.5, 1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[-1, -1.5, 1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[1, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[0, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[-1, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[1, -1.5, -1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[0, -1.5, -1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[-1, -1.5, -1]} rotation={[Math.PI / 2, 0, 0]} />

      {/* Top */}
      <Cell position={[1, 1.5, 1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[0, 1.5, 1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[-1, 1.5, 1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[1, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[-1, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[1, 1.5, -1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[0, 1.5, -1]} rotation={[Math.PI / 2, 0, 0]} />
      <Cell position={[-1, 1.5, -1]} rotation={[Math.PI / 2, 0, 0]} />
    </>
  );
};

const SceneItems = () => {
  return (
    <>
      <OrbitControls minDistance={5} maxDistance={7} />
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
