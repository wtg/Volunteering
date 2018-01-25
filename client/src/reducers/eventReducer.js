import { FETCH_EVENTS } from '../actions/types';

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload || false;
    default:
      return state;
  }
}
