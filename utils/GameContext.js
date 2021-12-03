import React, { useContext, createContext, useReducer } from 'react'
import reducer from './reducer';

export const StateContext = createContext();
export const DispatchContext = createContext();

export const useDispatchContext = () => useContext(DispatchContext)
export const useStateContext = () => useContext(StateContext);

export const createCubeArray = (size) => {
    let array = [];
    let cellCount = 0;
    for (let side = 0; side < 6; side++) {
        array[side] = [];
        for (let row = 0; row < size; row++) {
            array[side][row] = [];
            for (let col = 0; col < size; col++) {
                let random = Math.random();
                if (random > 0.25) {
                    array[side][row][col] = { coordinate: [side, row, col], type: "o" }
                    cellCount++
                } else {
                    array[side][row][col] = { type: "x" };
                }
            }
        }
    }
    return [array, cellCount];
};

const [arr, count] = createCubeArray(4)
const initialState = {
    gameNumber: 0,
    gameStatus: 0,
    lives: 3,
    cellsToWin: count,
    cubeArr: arr,
    inPlay: false,
    time: 0
}

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider
                value={state}
            >
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}