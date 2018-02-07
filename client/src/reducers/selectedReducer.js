import { SELECTED_EVENT } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SELECTED_EVENT:
      return action.selected || false;
    default:
      return state;
  }
}
