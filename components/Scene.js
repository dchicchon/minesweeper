import React, { useEffect, useState } from "react";
import { OrbitControls, Plane, useCursor, Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "../styles/game.module.css";
import { DoubleSide } from "three";

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
            rotation={props.rotation}
        >
            <Text color='black' anchorX='center' anchorY='middle' depthOffset={-1}>
                {props.text}
            </Text>
            <meshPhongMaterial side={DoubleSide} color={colorStyle()} />
        </Plane>
    );
};
// maybe cube should be a bunch of planes made togther?
// x,y,z plane
const Cube = (props) => {
    // useFrame((state, delta) => { });

    const [cubeArr, setCubeArr] = useState([])
    const [renderCubeArr, setRenderCubeArr] = useState([])

    useEffect(() => {
        init();
    }, [])

    // for now only take in odd values
    // maybe based on the size of our cube, we should change the groups position to
    // be in the center of the camera 

    const init = () => {
        const newCubeArr = createCubeArray(props.size)
        // console.log(newCubeArr)
        const newRenderCubeArr = createCube(newCubeArr);
        // console.log(newRenderCubeArr)
        setCubeArr(newCubeArr)
        setRenderCubeArr(newRenderCubeArr)

    }

    const createCubeArray = (size) => {
        let array = []
        for (let side = 0; side < 6; side++) {
            array[side] = []
            for (let row = 0; row < size; row++) {
                array[side][row] = []
                for (let col = 0; col < size; col++) {
                    let random = Math.random();
                    array[side][row][col] = random > 0.2 ? 'o' : 'x'
                }
            }
        }
        return array;
    }
    /**
         * 
         * Turn [0,1,2] size 3
         * to  [-1,0,-1]
         * 
         * input of 5
         * from [ 0, 1, 2, 3, 4]
         * to   [-2,-1, 0, 1, 2] 
    */
    const createCube = (arr) => {
        let cube = []
        for (let side = 0; side < arr.length; side++) {
            let rotation = [0, 0, 0]
            let colPos = 0;
            let rowPos = 1;
            let sidePos = 2;

            // USE THIS TO HIDE THE FRONT PANEL
            // if (side === 0) continue;

            // top and bottom
            if (side === 1 || side === 4) {
                colPos = 0;
                rowPos = 2;
                sidePos = 1;
                // Rotation about the xAxis
                rotation[0] = Math.PI /2
                // rotation[0] = side === 1 ? /*Top 270*/ -Math.PI / 2 : /* Bottom 90 */ Math.PI / 2
            }

            // Back
            if (side === 3) {
                // Rotate about the yAxis
                rotation[1] = Math.PI; // Back 360
            }

            // right and left
            if (side === 2 || side === 5) {
                colPos = 2;
                rowPos = 1;
                sidePos = 0;
                // Rotate about the yAxis
                rotation[1] = side === 2 ? /* Right 90 */ Math.PI / 2 : /* Left -270 */ -Math.PI / 2
            }

            let face = []
            for (let row = 0; row < arr[side].length; row++) {

                // Make it even! starting from 0 outwards
                let rowArr = []
                if (side === 1 || side === 4) rowPos = 2; // which spot row is going to take
                if (side === 2 || side === 5) rowPos = 1; // which spot row is going to take

                for (let col = 0; col < arr[side].length; col++) {
                    let position = [0, 0, 0]
                    position[sidePos] = side < 3 ? 1.5 : -1.5
                    // depending on the size, we change the - number e.g 3 ? set to -1, 5? set to -2, except we need to figure out how to center stuff
                    position[rowPos] = row - 1;
                    position[colPos] = col - 1;
                    rowArr[col] = <Cell
                        key={`${side}-${row}-${col}`}
                        // text={`Face ${side + 1}`}
                        // text={`Face ${side + 1} [${position[0]}, ${position[1]}, ${position[2]}]`}
                        // text={arr[side][row][col]}
                        text={`[ ${side} ][ ${row} ][ ${col} ]`}
                        position={position}
                        rotation={rotation}
                    />;
                }
                face[row] = <group key={`${side}-${row}`}>{rowArr}</group>;
            }
            cube[side] = <group key={`${side}`}>{face}</group>;
        }
        return cube
    }

    return (
        <group
            position={[0, 0, 0]}
        // position={[Math.floor(props.size / 2), Math.floor(props.size / 2), Math.floor(props.size / 2)]}
        >
            {renderCubeArr}
        </group>
    );
};

const Scene = () => {
    return (
        <div id={styles.scene}>
            <Canvas>
                <OrbitControls minDistance={4} maxDistance={8} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Cube size={3} position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
};

export default Scene;
