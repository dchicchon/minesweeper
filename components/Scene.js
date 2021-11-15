import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { OrbitControls, Plane, useCursor, Text, Box } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "../styles/game.module.css";
import { DoubleSide, Vector3 } from "three";

// 3d matrix
// https://www.haroldserrano.com/blog/2014/12/27/introduction-to-3d-mathematics

// could be used to add text maybe
// https://www.ilyameerovich.com/simple-3d-text-meshes-in-three-js/
// https://codesandbox.io/s/sparks-and-effects-sbf2i?from-embed=&file=/src/Text.js

// {/* Using Text */ }
// {/* https://github.com/protectwise/troika/blob/a2be90a573d69827a9d5abe47a4c53d083647239/packages/troika-three-text/src/Text.js#L91 */ }

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
    >
      <Text color="black" anchorX="center" anchorY="middle" depthOffset={-1}>
        {props.text}
      </Text>
      <meshPhongMaterial side={DoubleSide} color={colorStyle()} />
    </Plane>
  );
};

const Face = (props) => {
  const groupRef = useRef();
  const [renderedFace, setRenderedFace] = useState([]);

  // useEffect(() => {}, []);

  useLayoutEffect(() => {
    let face = createFace();
    setRenderedFace(face);
  }, []);

  const createFace = () => {
    let face = [];
    for (let row = 0; row < props.arr.length; row++) {
      let rowArr = [];
      for (let col = 0; col < props.arr.length; col++) {
        // press away from the center
        // side = 0 front, away from center by z axis
        // side = 1 right, away from center by x axis
        // side = 2 back,  away from center by z axis
        // side = 3 left,  away from center by x axis

        let position = [col - 1, row - 1, 0];
        let cell = (
          <Cell text={`${props.side}-${row}-${col}`} position={position} />
        );
        rowArr[col] = cell;
      }
      face[row] = <group>{rowArr}</group>;
    }
    return face;
  };

  // For some reason, this messes with the rotation for the face

  // maybe we will position the face on the group rather than the cells!
  return (
    <group rotation={props.rotation} position={props.position} ref={groupRef}>
      {renderedFace}
    </group>
  );
};

const Cube = (props) => {
  // useFrame((state, delta) => { });

  const [cubeArr, setCubeArr] = useState([]);
  const [renderCubeArr, setRenderCubeArr] = useState([]);

  useEffect(() => {
    init();
  }, []);

  // for now only take in odd values
  // maybe based on the size of our cube, we should change the groups position to
  // be in the center of the camera

  const init = () => {
    const newCubeArr = createCubeArray(props.size);
    const newRenderCubeArr = createCube(newCubeArr);
    setCubeArr(newCubeArr);
    setRenderCubeArr(newRenderCubeArr);
  };

  const createCubeArray = (size) => {
    let array = [];
    for (let side = 0; side < 6; side++) {
      array[side] = [];
      for (let row = 0; row < size; row++) {
        array[side][row] = [];
        for (let col = 0; col < size; col++) {
          let random = Math.random();
          array[side][row][col] = random > 0.2 ? "o" : "x";
        }
      }
    }
    return array;
  };

  const createCube = (arr) => {
    let cube = [];

    // Theres an axis that needs to be updated if we shrink/grow cube

    // formula looks like something based on size
    // if 3  => 0,0,1.5
    // if 4 => 0.5,0.5,2.0
    // if 5 =>  1,1,2.5
    // if 7 =>  2,2,3.5

    let getScalingFactor = () => (props.size - 3) / 2;

    // front,right,back,left;
    // add box to figure out stuff
    for (let side = 0; side <= 5; side++) {
      switch (side) {
        // Front
        case 0:
          cube[side] = (
            <Face
              rotation={[0, 0, 0]}
              position={[
                -getScalingFactor(),
                -getScalingFactor(),
                getScalingFactor() + 1.5,
              ]}
              side={side}
              arr={arr[side]}
            />
          );
          break;

        // Right
        case 1:
          cube[side] = (
            <Face
              rotation={[0, Math.PI / 2, 0]}
              position={[
                getScalingFactor() + 1.5,
                -getScalingFactor(),
                getScalingFactor(),
              ]}
              side={side}
              arr={arr[side]}
            />
          );
          break;
        // Back
        case 2:
          cube[side] = (
            <Face
              rotation={[0, Math.PI, 0]}
              position={[
                getScalingFactor(),
                -getScalingFactor(),
                -(getScalingFactor() + 1.5),
              ]}
              side={side}
              arr={arr[side]}
            />
          );
          break;
        // Left
        case 3:
          cube[side] = (
            <Face
              rotation={[0, -Math.PI / 2, 0]}
              position={[
                -(getScalingFactor() + 1.5),
                -getScalingFactor(),
                -getScalingFactor(),
              ]}
              side={side}
              arr={arr[side]}
            />
          );
          break;
        // Top
        case 4:
          cube[side] = (
            <Face
              rotation={[-Math.PI / 2, 0, 0]}
              position={[
                -getScalingFactor(),
                getScalingFactor() + 1.5,
                getScalingFactor(),
              ]}
              side={side}
              arr={arr[side]}
            />
          );
          break;
        // Bottom
        case 5:
          cube[side] = (
            <Face
              rotation={[Math.PI / 2, 0, 0]}
              position={[
                -getScalingFactor(),
                -(getScalingFactor() + 1.5),
                -getScalingFactor(),
              ]}
              side={side}
              arr={arr[side]}
            />
          );
          break;
      }
    }

    return cube;
  };

  return <group>{renderCubeArr}</group>;
};

const Scene = () => {
  return (
    <div id={styles.scene}>
      <Canvas>
        <OrbitControls minDistance={1} maxDistance={8} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Cube size={5} position={[0, 0, 0]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Scene;
