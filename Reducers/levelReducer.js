import { UNLOCK_LEVEL } from '../Actions/types';

const initialState = {
  level: 1,
  levelQc: 1
};

const level = (state = initialState, action) => {
  switch(action.type) {
    case UNLOCK_LEVEL:
        console.log(action.value);
        if (state.level < action.value.level || state.levelQc < action.value.levelQc ){
          return {level: action.value.level, levelQc: action.value.levelQc}
        } else {
          return state
        }
      break;
    default:
      return state;
  }
}

export default level;
