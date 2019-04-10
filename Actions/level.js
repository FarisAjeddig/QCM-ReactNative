import {UNLOCK_LEVEL} from './types';

export const unlockLevel = action => {
  return {
    type: UNLOCK_LEVEL,
    payload: action.payload
  }
}
