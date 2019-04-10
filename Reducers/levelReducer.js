import { UNLOCK_LEVEL } from '../Actions/types';

const initialState = {
  level: 1
};

const levelReducer = (state = initialState, action) => {
  console.log("Dans le reducer");
  console.log(action.type);
  if (action.type === UNLOCK_LEVEL){
    console.log("ACTION TYPE === UNLOCK LEVEL");
  }
  switch(action.type) {
    case UNLOCK_LEVEL:
      // if (state.level < action.payload){
        console.log("REDUCER");
        console.log(state);
        console.log(action);
        return {level: 2}
      // } else {
      //   return state;
      // }
      break;
    default:
      return state;
  }
}

export default levelReducer;
