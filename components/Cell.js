import React, { useState, useEffect } from "react";
import styles from '../styles/game.module.css'

const colors = ["gold", "violet", "springgreen", "tomato", "lightskyblue"];

const Cell = (props) => {
    let [checked, setChecked] = useState(false);
    let [type, setType] = useState("");
    let [flag, setFlag] = useState(false);
    let [hiddenStyle, setHiddenStyle] = useState({});
    let [checkedStyle, setCheckedStyle] = useState({});
    // When the game num changes, go ahead and rerender this cell
    useEffect(() => {
        console.log('update cell')
        // based on props.gameNum, we do things diff
        // let index = props.gameNum % 5; // if i want to change the color
        let index = 0;
        let hStyle = {
            border: `1px solid ${colors[index]}`,
            color: colors[index],
        };
        let cStyle = {
            border: `1px solid ${colors[index]}`,
            color: colors[index],
            background: props.type === "x" ? "red" : "rgba(255, 217, 0, 0.171)",
        };
        setType(props.type);
        setChecked(false);
        setFlag(false);
        setHiddenStyle(hStyle);
        setCheckedStyle(cStyle);
    }, [props.gameNum]);

    let cellClick = () => {
        if (checked) return;
        else if (type === "x") {
            setChecked(true)
            props.didWin(false) // false means that I lost the game
        }
        else {
            let mineNum = checkSurroundingCells();
            updateCell(mineNum);
        }
    }

    let checkSurroundingCells = () => {
        // console.log('=============')
        // console.log("Check cells")
        // console.log('=============')
        let mineNum = 0;
        let validCells = []
        let { x, y } = props;
        // let iter = 0
        for (let row = -1; row <= 1; row++) {
            for (let col = -1; col <= 1; col++) {
                let cellY = y + row
                let cellX = x + col
                // iter++
                // console.log('Cell Y:', cellY)
                // console.log('Cell X:', cellX)
                if (row === 0 && col === 0) continue; // dont check current cell
                if (y + row < 0 || y + row >= props.board.length) continue; // dont check y out of bounds
                if (x + col < 0 || x + col >= props.board[0].length) continue; // dont check x out of bounds
                let cellId = `${cellY}-${cellX}`
                // console.log("Valid cell")
                // console.log('Cell Y:', cellY)
                // console.log('Cell X:', cellX)
                let thisCell = props.board[cellY][cellX];   // get the value at this coordinate on the board
                if (thisCell === "x") mineNum++;            // if this cell has a mine, add to num
                if (mineNum === 0) validCells.push(cellId)  // if no mines yet, add it to our validCells array
            }
        }
        // console.log('iter', iter)

        if (mineNum === 0) clickSurroundingCells(validCells)
        return mineNum
    }

    let clickSurroundingCells = (cellsToClick) => {
        // console.log('=============')
        // console.log("Click surrounding cells")
        // console.log('=============')
        for (let cellId of cellsToClick) {
            // console.log('Cell to click', cellId)
            let surroundingCell = document.getElementById(cellId); // we have the cell, now get reference from board
            let time = Math.floor(Math.random() * 150) + 100;
            setTimeout(() => surroundingCell.click(), time);
        }
    }

    let updateCell = (mineNumber) => {
        props.setCellsToWin(prevNum => prevNum - 1)
        if (mineNumber === 0) {
            setType("");
        } else {
            setType(mineNumber);
        }
        setChecked(true);

    }

    let putFlagDown = (event) => {
        event.preventDefault();
        if (!checked) setFlag(!flag);
    };
    return (
        <>
            {flag ? (
                <div
                    id={`${props.y}- ${props.x}`}
                    className={styles.cell}
                    style={hiddenStyle}
                    onContextMenu={(e) => putFlagDown(e)}
                >
                    ?
                </div>
            ) : (
                <div
                    id={`${props.y}-${props.x}`}
                    className={styles.cell}
                    onClick={cellClick}
                    onContextMenu={(e) => putFlagDown(e)}
                    style={checked ? checkedStyle : hiddenStyle}
                >
                    {checked ? type : " "}
                </div>
            )}
        </>
    );
};

export default Cell