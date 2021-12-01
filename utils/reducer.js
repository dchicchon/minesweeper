import { CHANGE_IN_PLAY, DECREASE_LIVES, NEW_GAME, SET_LOSE, SET_WIN, EXIT_GAME, DECREASE_CELL_NUMBER } from "./actions";
import { createCubeArray } from "./GameContext";


export default function reducer(state, action) {
    switch (action.type) {
        case CHANGE_IN_PLAY: {
            let { inPlay } = state;

            // Exit Game
            if (inPlay) {
                let newState = {
                    ...state,
                    inPlay: false
                }
                return newState
            }
            // Enter Game
            else {
                let newState = {
                    ...state,
                    inPlay: true
                }
                return newState
            }

        }
        case DECREASE_LIVES: {
            const newLives = state.lives - 1;
            return {
                ...state,
                lives: newLives,
            };
        }
        case DECREASE_CELL_NUMBER: {
            let newState = {
                ...state,
                cellsToWin: state.cellsToWin - 1
            }
            return newState
        }
        case NEW_GAME: {
            const newGameNumber = state.gameNumber + 1;
            let [newCube, count] = createCubeArray(5)
            return {
                ...state,
                gameStatus: 0,
                lives: 3,
                cellsToWin: count,
                cubeArr: newCube,
                gameNumber: newGameNumber,
            };
        }
        case EXIT_GAME: {
            return {
                inPlay: false,
                gameNumber: 0,
                lives: 3,
                gameStatus: 0,
            };
        }
        case SET_WIN: {
            return {
                ...state,
                gameStatus: 2,
            };
        }
        case SET_LOSE: {
            return {
                ...state,
                gameStatus: 1,
            };
        }
        default:
            return state;
    }
}