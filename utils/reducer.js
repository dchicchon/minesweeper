import {
  CHANGE_IN_PLAY,
  DECREASE_LIVES,
  NEW_GAME,
  SET_LOSE,
  SET_WIN,
  EXIT_GAME,
  DECREASE_CELL_NUMBER,
  SET_TIME
} from "./actions";

import { createCubeArray } from "./GameContext";



export default function reducer(state, action) {
  switch (action.type) {
    case SET_TIME: {
      return {
        ...state,
        time: action.payload
      }
    }
    case CHANGE_IN_PLAY: {
      let { inPlay } = state;
      // Exit Game
      if (inPlay) {
        let newState = {
          ...state,
          inPlay: false,
          time: 0,
        };
        return newState;
      }
      // Enter Game
      else {
        let [newCube, count] = createCubeArray(4);
        let newState = {
          ...state,
          gameStatus: 0,
          lives: 3,
          time: 0,
          inPlay: true,
          cellsToWin: count,
          cubeArr: newCube,
        };
        return newState;
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
        cellsToWin: state.cellsToWin - 1,
      };
      return newState;
    }
    case NEW_GAME: {
      const newGameNumber = state.gameNumber + 1;
      let [newCube, count] = createCubeArray(4);
      return {
        ...state,
        gameStatus: 0,
        lives: 3,
        cellsToWin: count,
        cubeArr: newCube,
        gameNumber: newGameNumber,
        time: 0
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
