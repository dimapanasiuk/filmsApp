// import {
//   FETCH_FILMS_BEGIN,
//   FETCH_FILMS_SUCCESS,
//   FETCH_FILMS_FAILURE
// } from './filmsActions';

// const initialState = {
//   items: [],
//   loading: false,
//   error: null
// };

// export default function filmsReducer(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_FILMS_BEGIN:
//       return {
//         ...state,
//         loading: true,
//         error: null
//       };

//     case FETCH_FILMS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         items: action.payload.products
//       };

//     case FETCH_FILMS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//         items: []
//       };

//     default:
//       return state;
//   }
// }
