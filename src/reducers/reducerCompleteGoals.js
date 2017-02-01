import { COMPLETE_GOALS } from '../constants';

export default (state =[], action) => {
  switch(action.type){
    case COMPLETE_GOALS:
      const { completeGoals } = action;
      return completeGoals;
    default:
      return state;
  }
}
