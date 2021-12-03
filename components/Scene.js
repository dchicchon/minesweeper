import React, { useEffect, useRef, useState } from "react";
import {
  OrbitControls,
  useCursor,
  Text,
  useContextBridge,
} from "@react-three/drei";
import { useSpring, a } from '@react-spring/three'
import { Canvas } from "@react-three/fiber";
import styles from "../styles/game.module.css";
import { evilRotate } from "../utils/helper";
import { DECREASE_CELL_NUMBER, SET_LOSE, SET_WIN } from "../utils/actions";
import {
  DispatchContext,
  StateContext,
  useDispatchContext,
  useStateContext,
} from "../utils/GameContext";


const map = {
  // top, right, bottom, left
  0: [4, 1, 5, 3],
  1: [4, 2, 5, 0],
  2: [4, 3, 5, 1],
  3: [4, 0, 5, 2],
  4: [2, 1, 0, 3],
  5: [0, 1, 2, 3],
};


const Cell = (props) => {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const cellRef = useRef(null);
  const [hovered, hover] = useState(false);
  const [checked, setChecked] = useState(false);
  const [flag, setFlag] = useState(false);
  const [mainText, setMainText] = useState("");

  const springs = useSpring({ color: hovered ? 0 : 150 })

  // reset cell
  useEffect(() => {
    setChecked(false);
    setFlag(false);
    setMainText("");
  }, [state.gameNumber]);

  // set flag
  useEffect(() => {
    if (flag) setMainText("?");
    else setMainText("");
  }, [flag]);

  useCursor(hovered);


  const colorStyle = () => {
    if (checked && props.cell.type === "x") return "red";
    if (checked) return "lightblue";
    if (hovered) return "hotpink";
    return "orange";
  };

  const placeFlag = (event) => {
    event.stopPropagation();
    setFlag(!flag);
  };

  // look for mines surrounding the current cell and
  // label the number of mines for mainText
  const checkMines = (event, memo = {}) => {
    event.stopPropagation();
    if (checked || flag) return;
    setChecked(true);
    if (props.cell.type === "x") {
      setMainText("x");
      return dispatch({ type: SET_LOSE });
    }
    let mineNum = 0;
    let validCells = [];
    let [side, y, x] = props.cell.coordinate;
    let size = state.cubeArr[0].length;

    // might be unnecessary to do this in particular. We should just set it inside of our original cubeArr

    // Assume we're looking for cells in this face for now
    // ===========================
    // Check edges
    // ===========================

    // Check top
    if (y === 0) {
      // check top
      let checkSide = map[side][0]; // top
      // we rotate the top and bottom array to compensate for our cube structure
      let sideArr = state.cubeArr[checkSide]; // Copy 2D array

      if (side === 4) sideArr = evilRotate(sideArr, 2);
      else if (side === 5) sideArr = evilRotate(sideArr, 0);
      else sideArr = evilRotate(sideArr, side);
      // If not at the top left corner
      if (x > 0) {
        let topLeftCell = sideArr[size - 1][x - 1];
        if (topLeftCell.type === "x") mineNum++;
        // if (!mineNum) memo[topLeftCell.coordinate] = topLeftCell.coordinate
        if (!mineNum) validCells.push(topLeftCell.coordinate);
      }
      // if not at the top right corner
      if (x < size - 1) {
        let topRightCell = sideArr[size - 1][x + 1];
        if (topRightCell.type === "x") mineNum++;
        if (!mineNum) memo[topRightCell.coordinate] = topRightCell.coordinate;
        if (!mineNum) validCells.push(topRightCell.coordinate);
        // get top right
      }
      // get center
      let topCenterCell = sideArr[size - 1][x];
      if (topCenterCell.type === "x") mineNum++;
      if (!mineNum) validCells.push(topCenterCell.coordinate);
      // if (!mineNum) memo[topCenterCell.coordinate] = topCenterCell.coordinate
    }
    // check bottom
    if (y + 1 === size) {
      let checkSide = map[side][2]; // bottom
      let sideArr = state.cubeArr[checkSide]; // Copy 2D array

      // we know its the top row
      if (side === 4) sideArr = evilRotate(sideArr, 0);
      else if (side === 5) sideArr = evilRotate(sideArr, 2);
      else if (side !== 0) sideArr = evilRotate(sideArr, 4 - side);
      else sideArr = evilRotate(sideArr, 0);

      if (x > 0) {
        let bottomLeftCell = sideArr[0][x - 1];
        // console.log(bottomLeftCell)
        if (bottomLeftCell.type === "x") mineNum++;
        // if (!mineNum) memo[bottomLeftCell.coordinate] = bottomLeftCell.coordinate
        if (!mineNum) validCells.push(bottomLeftCell.coordinate);
      }

      if (x < size - 1) {
        let bottomRightCell = sideArr[0][x + 1];
        if (bottomRightCell.type === "x") mineNum++;
        if (!mineNum) validCells.push(bottomRightCell.coordinate);
        // if (!mineNum) memo[bottomRightCell.coordinate] - bottomRightCell.coordinate
      }

      let bottomCenterCell = sideArr[0][x];
      if (bottomCenterCell.type === "x") mineNum++;
      if (!mineNum) validCells.push(bottomCenterCell.coordinate);
      // if (!mineNum) memo[bottomCenterCell.coordinate] = bottomCenterCell.coordinate
    }

    // check left
    if (x === 0) {
      let checkSide = map[side][3]; // 3 === left
      let sideArr = state.cubeArr[checkSide];

      if (side === 4) sideArr = evilRotate(sideArr, 1);
      // top
      else if (side === 5) sideArr = evilRotate(sideArr, 3);
      // bottom
      else sideArr = evilRotate(sideArr, 0);

      if (y > 0) {
        // leftTop
        let leftTopCell = sideArr[y - 1][size - 1];
        if (leftTopCell.type === "x") mineNum++;
        // if (!mineNum) memo[leftTopCell.coordinate] = leftTopCell.coordinate
        if (!mineNum) validCells.push(leftTopCell.coordinate);
      }
      if (y < size - 1) {
        let leftBottomCell = sideArr[y + 1][size - 1];
        if (leftBottomCell.type === "x") mineNum++;
        if (!mineNum) validCells.push(leftBottomCell.coordinate);
        // if (!mineNum) memo[leftBottomCell.coordinate] = leftBottomCell.coordinate
      }

      let leftCenterCell = sideArr[y][size - 1];
      if (leftCenterCell.type === "x") mineNum++;
      if (!mineNum) validCells.push(leftCenterCell.coordinate);
      // if (!mineNum) memo[leftCenterCell.coordinate] = leftCenterCell.coordinate
    }
    // check right
    if (x + 1 === size) {
      let checkSide = map[side][1];
      let sideArr = state.cubeArr[checkSide];

      if (side === 4) sideArr = evilRotate(sideArr, 3);
      else if (side === 5) sideArr = evilRotate(sideArr, 1);
      else sideArr = evilRotate(sideArr, 0);
      if (y > 0) {
        let rightTopCell = sideArr[y - 1][0];
        if (rightTopCell.type === "x") mineNum++;
        if (!mineNum) validCells.push(rightTopCell.coordinate);
        // if (!mineNum) memo[rightTopCell.coordinate] = rightTopCell.coordinate
      }

      if (y < size - 1) {
        let rightBottomCell = sideArr[y + 1][0];
        if (rightBottomCell.type === "x") mineNum++;
        if (!mineNum) validCells.push(rightBottomCell.coordinate);
        // if (!mineNum) memo[rightBottomCell.coordinate] = rightBottomCell.coordinate
      }

      let rightCenterCell = sideArr[y][0];
      if (rightCenterCell.type === "x") mineNum++;
      if (!mineNum) validCells.push(rightCenterCell.coordinate);
      // if (!mineNum) memo[rightCenterCell.coordinate] = rightCenterCell.coordinate
    }
    // ===========================

    // Check surrounding cells on main face
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        let cellY = y + row;
        let cellX = x + col;
        if (cellY < 0 || cellY >= size) continue; // dont check out of bounds top and bottom
        if (cellX < 0 || cellX >= size) continue; // dont check out of bounds right and left
        if (row === 0 && col === 0) continue; /// dont check same cell
        let surroundingCell = state.cubeArr[side][cellY][cellX];
        if (surroundingCell.type === "x") mineNum++;
        // else if (!mineNum) memo[surroundingCell.coordinate] = surroundingCell.coordinate
        else if (!mineNum) validCells.push(surroundingCell.coordinate);
      }
    }

    if (mineNum === 0) {
      setMainText("-");
      clickSurroundingCells(event, validCells);
    } else {
      setMainText(mineNum);
    }

    // decrease the number of cells to win
    return dispatch({
      type: DECREASE_CELL_NUMBER,
    });
  };

  const clickSurroundingCells = (event, cellsToCheck, memo) => {
    // click on all of the cells nearby
    let cubeObject = cellRef.current.parent.parent.parent;
    let elm = 0;
    for (let cell of cellsToCheck) {
      let [cellSide, cellY, cellX] = cell;
      let cellToClick =
        cubeObject.children[cellSide].children[cellY].children[cellX]; // cell to click
      let time = Math.floor(Math.random() * 500) + 100 * elm + 250;
      setTimeout(() => cellToClick.__r3f.handlers.onClick(event), time);
      elm++;
    }
  };


  return (
    <a.mesh
      ref={cellRef}
      scale={0.95}
      onClick={checkMines}
      onContextMenu={placeFlag}
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
      <planeGeometry attach='geometry' args={[1, 1, 1]} />
      <meshPhongMaterial attach='material' color={colorStyle()} />
      <Text
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
        depthOffset={-1}
      >
        {mainText}
      </Text>
    </a.mesh>
  );
};

const Face = (props) => {
  let state = useStateContext();
  const createFace = () => {
    let face = [];
    let size = state.cubeArr[0].length;
    for (let row = 0; row < size; row++) {
      let rowArr = [];
      for (let col = 0; col < size; col++) {
        let position = [col - 1, size - 2 - row, 0];
        rowArr[col] = (
          <Cell
            key={`${props.side}-${row}-${col}`}
            cell={state.cubeArr[props.side][row][col]}
            setCellsToWin={props.setCellsToWin}
            position={position}
          />
        );
      }
      face[row] = (
        <group userData={{ row }} key={`${props.side}-${row}`}>
          {rowArr}
        </group>
      );
    }
    return face;
  };
  // For some reason, this messes with the rotation for the face

  // maybe we will position the face on the group rather than the cells!
  return (
    <group
      userData={{ side: props.side }}
      rotation={props.rotation}
      position={props.position}
    >
      {createFace()}
    </group>
  );
};

const Cube = (props) => {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const [renderCubeArr, setRenderCubeArr] = useState([]);

  useEffect(() => {
    init();
  }, [state.gameNumber]);

  useEffect(() => {
    if (state.cellsToWin === 0) return dispatch({ type: SET_WIN });
  }, [state.cellsToWin]);

  // for now only take in odd values
  // maybe based on the size of our cube, we should change the groups position to
  // be in the center of the camera

  const init = () => {
    const newRenderCubeArr = createCube();
    setRenderCubeArr(newRenderCubeArr);
  };

  const createCube = () => {
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
      // do if statements here
      // let rotation = [0, 0, 0];
      // let position = [0, 0, 0];

      switch (side) {
        // Front
        case 0:
          cube[side] = (
            <Face
              key={side}
              side={side}
              rotation={[0, 0, 0]}
              position={[
                -getScalingFactor(),
                -getScalingFactor(),
                getScalingFactor() + 1.5,
              ]}
            />
          );
          break;

        // Right
        case 1:
          cube[side] = (
            <Face
              key={side}
              side={side}
              rotation={[0, Math.PI / 2, 0]}
              position={[
                getScalingFactor() + 1.5,
                -getScalingFactor(),
                getScalingFactor(),
              ]}
            />
          );
          break;
        // Back
        case 2:
          cube[side] = (
            <Face
              key={side}
              side={side}
              rotation={[0, Math.PI, 0]}
              position={[
                getScalingFactor(),
                -getScalingFactor(),
                -(getScalingFactor() + 1.5),
              ]}
            />
          );
          break;
        // Left
        case 3:
          cube[side] = (
            <Face
              key={side}
              rotation={[0, -Math.PI / 2, 0]}
              position={[
                -(getScalingFactor() + 1.5),
                -getScalingFactor(),
                -getScalingFactor(),
              ]}
              side={side}
            />
          );
          break;
        // Top
        case 4:
          cube[side] = (
            <Face
              key={side}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[
                -getScalingFactor(),
                getScalingFactor() + 1.5,
                getScalingFactor(),
              ]}
              side={side}
            />
          );
          break;
        // Bottom
        case 5:
          cube[side] = (
            <Face
              key={side}
              rotation={[Math.PI / 2, 0, 0]}
              position={[
                -getScalingFactor(),
                -(getScalingFactor() + 1.5),
                -getScalingFactor(),
              ]}
              side={side}
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
  const state = useStateContext()
  const ContextBridge = useContextBridge(StateContext, DispatchContext)
  return (
    <div id={state.gameStatus ? styles.stop_scene : styles.scene}>
      <Canvas frameloop="demand">
        <OrbitControls minDistance={9} maxDistance={9} />
        <ambientLight intensity={1} />
        {/* <directionalLight /> */}
        <ContextBridge>
          <Cube size={4} position={[0, 0, 0]} />
        </ContextBridge>
      </Canvas>
    </div>
  );
};

export default Scene;
