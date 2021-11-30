// This is a file that has a switch statement
// that will execute mutations on our
// context

import { DECREASE_LIVES, NEW_GAME, SET_LOSE, SET_WIN } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case DECREASE_LIVES:
      const newLives = state.lives - 1;
      return {
        ...state,
        lives: newLives,
      };
    case NEW_GAME:
      const newGameNumber = state.gameNumber + 1;
      return {
        ...state,
        gameStatus: 0,
        lives: 3,
        gameNumber: newGameNumber,
      };
    case EXIT_GAME:
      return {
        gameNumber: 0,
        gamesLost: 0,
        gamesWon: 0,
        lives: 3,
        gameStatus: 0,
      };
    case SET_WIN:
      const newWins = state.gamesWon + 1;
      return {
        ...state,
        gameStatus: 1,
        gamesWon: newWins,
      };
    case SET_LOSE:
      const newLosses = state.gamesLost + 1;
      return {
        ...state,
        gameStatus: 2,
        gamesLost: newLosses,
      };
    default:
      return state;
  }
}
