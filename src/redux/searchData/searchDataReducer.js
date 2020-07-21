const initialState = {
  searchFilm: ''
};

function searchDataReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEARCHFILM':
      return {
        searchFilm : action.data
      };
    default:
      return state;
  }
}

export default searchDataReducer;
