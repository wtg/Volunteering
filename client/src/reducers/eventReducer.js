import { FETCH_EVENT } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_EVENT:
      return action.events || false;
    default:
      return state;
  }
}
