import { THEME_SWITCHER } from './themeSwitcherAction';

const initialState = {
  isLightTheme: true,
};

function themeSwitcherReducer(state = initialState, action) {
  switch (action.type) {
    case THEME_SWITCHER:
      return {
        isLightTheme: !state.isLightTheme,
      };
    default:
      return state;
  }
}

export default themeSwitcherReducer;
