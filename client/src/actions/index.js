import axios from 'axios';
import { FETCH_EVENT } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/get/all');
  dispatch({ type: FETCH_EVENT, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/post/event', token);
  dispatch({ type: FETCH_EVENT, payload: res.data });
};
