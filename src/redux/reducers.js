import { combineReducers } from 'redux';
import reducer from './counter/reducer';
import filmsReducer from './getFilmsData/filmsReducer';
import filmDataReducer from './filmData/filmDataReducer';
import categoryDataReducer from './categoryData/categoryDataReducer';
import searchDataReducer from './searchData/searchDataReducer';

export default combineReducers({
  filmsReducer,
  filmDataReducer,
  categoryDataReducer,
  searchDataReducer,
  reducer,
});
