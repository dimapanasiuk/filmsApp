const initialState = {
  filmName: 'no data'
};

function filmDataReducer(state = initialState, action) {
  console.log('filmDataReducer', state, action);

  switch(action.type) {
    case 'CLICKONFILM':
      return {
        filmName : action.data
      };
    default:
      return state;
  }
}

export default filmDataReducer;
