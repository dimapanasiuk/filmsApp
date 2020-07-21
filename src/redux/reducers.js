import { combineReducers } from 'redux';
import reducer from './counter/reducer';
import filmsReducer from './getFilmsData/filmsReducer';
import filmDataReducer from './filmData/filmDataReducer';

export default combineReducers({
  filmsReducer,
  filmDataReducer,
  reducer,
});
