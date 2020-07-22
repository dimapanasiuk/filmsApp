const initialState = {
  category: ''
};

function categoryDataReducer(state = initialState, action) {
  switch(action.type) {
    case 'CHOOSECATEGORY':
      return {
        category: action.data
      };
    default:
      return state;
  }
}

export default categoryDataReducer;
