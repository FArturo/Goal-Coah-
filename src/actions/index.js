import { SIGNED_IN, SET_GOALS, COMPLETE_GOALS } from '../constants';

export const logUser = (email) => {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export const setGoals  = (goals) => {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export const setComplete = (completeGoals) => {
  const action = {
    type: COMPLETE_GOALS,
    completeGoals
  }
  return action;
}
