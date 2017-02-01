import { combineReducers } from 'redux';
import user from './reducerUser';
import goals from './reducerGoals';
import completeGoals from './reducerCompleteGoals';

export default combineReducers({
  user,
  goals,
  completeGoals
});
