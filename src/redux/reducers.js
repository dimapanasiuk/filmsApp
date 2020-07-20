import { combineReducers } from 'redux';
import reducer from './counter/reducer';
import filmsReducer from './getFilmsData/filmsReducer';

export default combineReducers({
  filmsReducer,
  reducer,
});
