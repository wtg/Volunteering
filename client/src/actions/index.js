import axios from 'axios';
import { FETCH_EVENT, SELECTED_EVENT } from './types';

export const fetchEvents = () => async dispatch => {
  const res = await axios.get('/api/get/all_active');
  dispatch({ type: FETCH_EVENT, events: res.data });
};

export const selectEvent = id => async dispatch => {
  const res = await axios.get('/api/get/select', {
    params: {
      id: id
    }
  });
  dispatch({ type: SELECTED_EVENT, selected: res.data });
};
