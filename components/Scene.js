import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, Plane, useCursor, Text } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import styles from "../styles/game.module.css";
import { evilRotate } from "../helpers/helper";

// map for checking the out of bounds items
const map = {
  // top, right, bottom, left
  0: [4, 1, 5, 3],
  1: [4, 2, 5, 1],
  2: [4, 3, 5, 1],
  3: [4, 0, 5, 2],
  4: [2, 1, 0, 3],
  5: [0, 1, 2, 3],
};

// 3d matrix
// https://www.haroldserrano.com/blog/2014/12/27/introduction-to-3d-mathematics

// could be used to add text maybe
// https://www.ilyameerovich.com/simple-3d-text-meshes-in-three-js/
// https://codesandbox.io/s/sparks-and-effects-sbf2i?from-embed=&file=/src/Text.js

// /* Using Text */ 
// {/* https://github.com/protectwise/troika/blob/a2be90a573d69827a9d5abe47a4c53d083647239/packages/troika-three-text/src/Text.js#L91 */ }

const Cell = (props) => {
  const cellRef = useRef(null);
  const [hovered, hover] = useState(false);
  const [checked, setChecked] = useState(false);
  const [flag, setFlag] = useState(false);
  const [mainText, setMainText] = useState("");

  // reset cell
  useEffect(() => {
    setChecked(false);
    setFlag(false);
    setMainText("");
  }, [props.gameNum]);

  // set flag
  useEffect(() => {
    if (flag) setMainText("?");
    else setMainText("");
  }, [flag]);

  useCursor(hovered);

  // look for mines surrounding the current cell and
  // label the number of mines for mainText
  const checkMines = (event,) => {
    event.stopPropagation();
    if (checked || flag) return;
    if (props.cell.type === 'x') {
      setMainText("x");
      setChecked(true);
      props.didWin(false)
      return
    }
    setChecked(true);
    let mineNum = 0;
    let validCells = [];
    let [side, y, x] = props.cell.coordinate;
    // memo[props.cell.coordinate] = true;
    // console.log(memo)

    let size = props.cubeArr[0].length;
    // let threeCube = cellRef.current.parent.parent.parent

    // might be unnecessary to do this in particular. We should just set it inside of our original cubeArr
    // let face = threeCube.children[side].children.map(group => {
    //   let row = group.children.map(col => {
    //     return col.userData
    //   })
    //   return row
    // })

    // Assume we're looking for cells in this face for now
    // ===========================
    // Check edges
    // ===========================

    // side 1 is throwing errors on mines so far
    if (side === 1) {
      // console.log()
    }

    // Check top
    if (y === 0) {
      // check top
      let checkSide = map[side][0] // top
      // we rotate the top and bottom array to compensate for our cube structure
      let sideArr = props.cubeArr[checkSide] // Copy 2D array
      // let threeFace = threeCube.children[checkSide]
      // let threeRows = threeFace.children;

      // let threeFaceArray = threeRows.map(group => {
      //   // what to return 
      //   let row = group.children.map(col => {
      //     // return an array of userData here
      //     return col.userData
      //   });

      //   return row;
      // })

      if (side === 4) sideArr = evilRotate(sideArr, 2)
      else if (side === 5) sideArr = evilRotate(sideArr, 0)
      else sideArr = evilRotate(sideArr, side)
      // If not at the top left corner
      if (x > 0) {
        // get top left
        let topLeftCell = sideArr[size - 1][x - 1]
        if (topLeftCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(topLeftCell.coordinate)

      }
      // if not at the top right corner
      if (x < size - 1) {
        let topRightCell = sideArr[size - 1][x + 1]
        if (topRightCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(topRightCell.coordinate)
        // get top right
      }
      // get center
      let topCenterCell = sideArr[size - 1][x]
      if (topCenterCell.type === 'x') mineNum++
      if (!mineNum) validCells.push(topCenterCell.coordinate)

    }
    // check bottom
    if (y + 1 === size) {
      let checkSide = map[side][2]; // bottom
      let sideArr = props.cubeArr[checkSide] // Copy 2D array
      // let threeFace = threeCube.children[checkSide]
      // let threeRows = threeFace.children;

      // let threeFaceArray = threeRows.map(group => {
      //   // what to return 
      //   let row = group.children.map(col => {
      //     // return an array of userData here
      //     return col.userData
      //   });

      //   return row;
      // })


      // we know its the top row
      if (side === 4) sideArr = evilRotate(sideArr, 0)
      else if (side === 5) sideArr = evilRotate(sideArr, 2)
      else if (side !== 0) sideArr = evilRotate(sideArr, 4 - side)
      else sideArr = evilRotate(sideArr, 0)

      if (x > 0) {
        let bottomLeftCell = sideArr[0][x - 1]
        // console.log(bottomLeftCell)
        if (bottomLeftCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(bottomLeftCell.coordinate)
      }

      if (x < size - 1) {
        let bottomRightCell = sideArr[0][x + 1]
        if (bottomRightCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(bottomRightCell.coordinate)
      }

      let bottomCenterCell = sideArr[0][x]
      if (bottomCenterCell.type === 'x') mineNum++
      if (!mineNum) validCells.push(bottomCenterCell.coordinate)
    }

    // check left
    if (x === 0) {
      let checkSide = map[side][3] // 3 === left
      let sideArr = props.cubeArr[checkSide]

      if (side === 4) sideArr = evilRotate(sideArr, 1) // top
      else if (side === 5) sideArr = evilRotate(sideArr, 3) // bottom
      else sideArr = evilRotate(sideArr, 0)
      if (y > 0) {
        // leftTop
        let leftTopCell = sideArr[y - 1][size - 1]
        if (leftTopCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(leftTopCell.coordinate)
      }
      if (y < size - 1) {
        let leftBottomCell = sideArr[y + 1][size - 1]
        if (leftBottomCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(leftBottomCell.coordinate)

      }

      let leftCenterCell = sideArr[y][size - 1]
      if (leftCenterCell.type === 'x') mineNum++
      if (!mineNum) validCells.push(leftCenterCell.coordinate)
    }
    // check right
    if (x + 1 === size) {
      let checkSide = map[side][1];
      let sideArr = props.cubeArr[checkSide]

      if (side === 4) sideArr = evilRotate(sideArr, 3)
      else if (side === 5) sideArr = evilRotate(sideArr, 1)
      else sideArr = evilRotate(sideArr, 0)
      if (y > 0) {
        let rightTopCell = sideArr[y - 1][0]
        if (rightTopCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(rightTopCell.coordinate)
      }

      if (y < size - 1) {
        let rightBottomCell = sideArr[y + 1][0]
        if (rightBottomCell.type === 'x') mineNum++
        if (!mineNum) validCells.push(rightBottomCell.coordinate)
      }

      let rightCenterCell = sideArr[y][0]
      if (rightCenterCell.type === 'x') mineNum++
      if (!mineNum) validCells.push(rightCenterCell.coordinate)
    }
    // ===========================

    // Check surrounding cells on main face
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        let cellY = y + row;
        let cellX = x + col;
        if (cellY < 0 || cellY >= size) continue       // dont check out of bounds top and bottom
        if (cellX < 0 || cellX >= size) continue       // dont check out of bounds right and left
        if (row === 0 && col === 0) continue;          /// dont check same cell
        let surroundingCell = props.cubeArr[side][cellY][cellX];
        if (surroundingCell.type === "x") mineNum++;
        else if (!mineNum) validCells.push(surroundingCell.coordinate)
      }
    }

    props.setCellsToWin(prevState => prevState - 1)

    if (mineNum === 0) {
      setMainText("-");
      clickSurroundingCells(event, validCells)
    } else {
      setMainText(mineNum);
    }

  };

  const clickSurroundingCells = (event, cellsToCheck,) => {
    // click on all of the cells nearby
    let cubeObject = cellRef.current.parent.parent.parent
    // maybe we can pass a memo here of the cells we already checked
    // cellsToCheck = cellsToCheck.filter(cell => !memo[cell])
    for (let elm = 0; elm < cellsToCheck.length; elm++) {
      let [cellSide, cellY, cellX] = cellsToCheck[elm]
      let cellToClick = cubeObject.children[cellSide].children[cellY].children[cellX] // clicking on the cell reference here
      let time = Math.floor(Math.random() * 500) + 250;
      setTimeout(() => cellToClick.__r3f.handlers.onClick(event), time);
    }
  }

  const colorStyle = () => {
    if (hovered) return "hotpink";
    if (checked && props.type === "x") return "red";
    if (checked) return "lightblue";
    return "orange";
  };

  const placeFlag = (event) => {
    event.stopPropagation();
    setFlag(!flag);
  }

  return (
    <Plane
      ref={cellRef}
      scale={1}
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
      <Text
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
        depthOffset={-1}
      >
        {/* {mainText} */}
        {mainText ? mainText : props.cell.type}
      </Text>
      <meshPhongMaterial color={colorStyle()} />
    </Plane>
  );
};

const Face = (props) => {
  const [renderedFace, setRenderedFace] = useState([]);

  useEffect(() => {
    let face = createFace();
    setRenderedFace(face);
  }, [props.gameNum]);

  const createFace = () => {
    let face = [];
    let size = props.cubeArr[0].length;
    // console.log(props.cubeArr);
    for (let row = 0; row < size; row++) {
      let rowArr = [];
      for (let col = 0; col < size; col++) {
        let position = [col - 1, size - 2 - row, 0];
        rowArr[col] = (
          <Cell
            key={`${props.side}-${row}-${col}`}
            // name={`${props.side}-${row}-${col}`}
            cell={props.cubeArr[props.side][row][col]}
            setCellsToWin={props.setCellsToWin}
            coordinate={[props.side, row, col]}
            gameNum={props.gameNum}
            didWin={props.didWin}
            cubeArr={props.cubeArr}
            type={props.cubeArr[props.side][row][col].type}
            position={position}
          />
        );
      }
      face[row] = <group userData={{ row }} key={`${props.side}-${row}`}>{rowArr}</group>;
    }
    return face;
  };

  // For some reason, this messes with the rotation for the face

  // maybe we will position the face on the group rather than the cells!
  return (
    <group userData={{ side: props.side }} rotation={props.rotation} position={props.position}>
      {renderedFace}
    </group>
  );
};

const Cube = (props) => {

  const [cubeArr, setCubeArr] = useState([]);
  const [renderCubeArr, setRenderCubeArr] = useState([]);
  const [cellsToWin, setCellsToWin] = useState(0)

  useEffect(() => {
    console.log("new game:", props.gameNum);
    init();
  }, [props.gameNum]);

  useEffect(() => {
    if (!cubeArr.length) return;
    if (cellsToWin === 0) props.didWin(true)
  }, [cellsToWin])

  // for now only take in odd values
  // maybe based on the size of our cube, we should change the groups position to
  // be in the center of the camera

  const init = () => {
    const [newCubeArr, cellCount] = createCubeArray(props.size);
    const newRenderCubeArr = createCube(newCubeArr);
    setCellsToWin(cellCount)
    setCubeArr(newCubeArr);
    setRenderCubeArr(newRenderCubeArr);
  };

  const createCubeArray = (size) => {
    let array = [];
    let cellCount = 0;
    for (let side = 0; side < 6; side++) {
      array[side] = [];
      for (let row = 0; row < size; row++) {
        array[side][row] = [];
        for (let col = 0; col < size; col++) {
          let random = Math.random();
          if (random > 0.2) {
            array[side][row][col] = { coordinate: [side, row, col], type: "o" }
            cellCount++
          } else {
            array[side][row][col] = { coordinate: [side, row, col], type: "x" };
          }
        }
      }
    }
    return [array, cellCount];
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
      // do if statements here
      // let rotation = [0, 0, 0];
      // let position = [0, 0, 0];

      switch (side) {
        // Front
        case 0:
          cube[side] = (
            <Face
              setCellsToWin={setCellsToWin}
              key={side}
              side={side}
              gameNum={props.gameNum}
              didWin={props.didWin}
              cubeArr={arr}
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
              setCellsToWin={setCellsToWin}
              key={side}
              side={side}
              cubeArr={arr}
              gameNum={props.gameNum}
              didWin={props.didWin}
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
              setCellsToWin={setCellsToWin}
              gameNum={props.gameNum}
              didWin={props.didWin}
              cubeArr={arr}
              key={side}
              rotation={[0, Math.PI, 0]}
              position={[
                getScalingFactor(),
                -getScalingFactor(),
                -(getScalingFactor() + 1.5),
              ]}
              side={side}
            />
          );
          break;
        // Left
        case 3:
          cube[side] = (
            <Face
              setCellsToWin={setCellsToWin}
              key={side}
              gameNum={props.gameNum}
              didWin={props.didWin}

              cubeArr={arr}
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
              setCellsToWin={setCellsToWin}
              gameNum={props.gameNum}
              didWin={props.didWin}
              cubeArr={arr}
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
              setCellsToWin={setCellsToWin}
              gameNum={props.gameNum}
              didWin={props.didWin}
              cubeArr={arr}
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

const Scene = (props) => {
  const didWin = (didWinBool) => {
    if (didWinBool) {
      props.setGamesWon((prevState) => prevState + 1)
      props.setGameStatus(2)
    } else {
      props.setGamesLost((prevState) => prevState + 1)
      props.setGameStatus(1)
    }
  }
  return (
    <div id={styles.scene}>
      <Canvas >
        <OrbitControls minDistance={9} maxDistance={9} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Cube
          didWin={didWin}
          gameNum={props.gameNum}
          size={5}
          position={[0, 0, 0]}
        />
        {/* <Box position={[0, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
