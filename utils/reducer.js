import { CHANGE_IN_PLAY, DECREASE_LIVES, NEW_GAME, SET_LOSE, SET_WIN, EXIT_GAME } from "./actions";


export default function reducer(state, action) {
    switch (action.type) {
        case CHANGE_IN_PLAY: {
            console.log("Change the game!")
            let newState = {
                ...state,
                inPlay: !state.inPlay
            }
            console.log(newState)
            return newState
        }
        case DECREASE_LIVES: {
            const newLives = state.lives - 1;
            return {
                ...state,
                lives: newLives,
            };
        }
        case NEW_GAME: {
            const newGameNumber = state.gameNumber + 1;
            console.log(newGameNumber)
            return {
                ...state,
                gameStatus: 0,
                lives: 3,
                gameNumber: newGameNumber,
            };
        }
        case EXIT_GAME: {
            return {
                inPlay: false,
                gameNumber: 0,
                gamesLost: 0,
                gamesWon: 0,
                lives: 3,
                gameStatus: 0,
            };
        }
        case SET_WIN: {
            const newWins = state.gamesWon + 1;
            return {
                ...state,
                gameStatus: 2,
                gamesWon: newWins,
            };
        }
        case SET_LOSE: {
            const newLosses = state.gamesLost + 1;
            return {
                ...state,
                gameStatus: 1,
                gamesLost: newLosses,
            };
        }
        default:
            return state;
    }
}