import React, { useContext, createContext, useReducer } from 'react'
import reducer from './reducer';

export const StateContext = createContext();
export const DispatchContext = createContext();

export const useDispatchContext = () => useContext(DispatchContext)
export const useStateContext = () => useContext(StateContext);

const initialState = {
    gamesWon: 0,
    gamesLost: 0,
    gameNumber: 0,
    gameStatus: 0,
    lives: 3,
    inPlay: false
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