import { combineReducers } from 'redux';
import filmsReducer from './getFilmsData/filmsReducer';
import filmDataReducer from './filmData/filmDataReducer';
import categoryDataReducer from './categoryData/categoryDataReducer';
import searchDataReducer from './searchData/searchDataReducer';
import themeSwitcherReducer from './themeSwitcher/themeSwitcherReducer';
import loginDataReducer from './loginData/loginDataReducer';

export default combineReducers({
  filmsReducer,
  filmDataReducer,
  categoryDataReducer,
  searchDataReducer,
  loginDataReducer,
  themeSwitcherReducer,
});
