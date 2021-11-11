import React, { useState, useEffect } from "react";
import Cell from './Cell'
import styles from '../styles/game.module.css'

const Board = (props) => {
    let [board, setBoard] = useState([]);
    let [cellsToWin, setCellsToWin] = useState(0);
    let [renderedBoard, setRenderedBoard] = useState([]);
    // Runs anytime the game number changes
    useEffect(() => {
        init();
    }, [props.gameNum]);

    useEffect(() => {
        if (!board.length) return;
        if (cellsToWin === 0) didWin(true);
    }, [cellsToWin])

    const init = () => {
        let [mainBoard, numCells] = createStartingBoard()
        let newRenderedBoard = renderBoard(mainBoard);
        setCellsToWin(numCells);
        setBoard(mainBoard)
        setRenderedBoard(newRenderedBoard)
    }

    const createStartingBoard = () => {
        let mainBoard = [];
        let numCells = 0;
        // This is where we should start doing the random mines cells
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                const random = Math.random();
                if (random < 0.2) row.push("x");
                else {
                    numCells++
                    row.push("o")
                };
            }
            mainBoard.push(row);
        }
        return [mainBoard, numCells]
    };
    // I think that this is not running once the game ends
    const renderBoard = (boardArr) => {
        let newRenderedBoard = [];
        // Odds 0.1 that its a mine
        // 0.7 that its a number
        // 0.2 that its nothing
        for (let rowNum = 0; rowNum < boardArr.length; rowNum++) {
            let row = [];
            for (let colNum = 0; colNum < boardArr[rowNum].length; colNum++) {
                let cell = (
                    <Cell
                        key={`${rowNum}${colNum}`}
                        y={rowNum}
                        x={colNum}
                        board={boardArr}
                        didWin={didWin}
                        setCellsToWin={setCellsToWin}
                        gameNum={props.gameNum}
                        type={boardArr[rowNum][colNum]}
                    />
                );
                row.push(cell);
            }
            newRenderedBoard.push(
                <div className={styles.row} key={rowNum}>
                    {row}
                </div>
            );
        }
        return newRenderedBoard
    };

    const didWin = (didWinBool) => {
        if (didWinBool) {
            props.setGamesWon((prevState) => prevState + 1);
            props.setGameStatus(2);
        } else {
            props.setGameStatus(1);
            props.setGamesLost((prevState) => prevState + 1);
        }
    };

    return <div
        style={{ pointerEvents: props.gameStatus === 0 ? 'all' : 'none' }}
        id={styles.board}>
        {renderedBoard}
    </div>
};

// now using three.js

export default Board