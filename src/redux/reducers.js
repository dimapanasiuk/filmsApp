import { combineReducers } from 'redux';
import reducer from './counter/reducer';
import filmsReducer from './getFilmsData/filmsReducer';
import filmDataReducer from './filmData/filmDataReducer';
import categoryDataReducer from '../redux/categoryData/categoryDataReducer';

export default combineReducers({
  filmsReducer,
  filmDataReducer,
  categoryDataReducer,
  reducer,
});
