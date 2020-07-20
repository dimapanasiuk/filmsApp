export const FETCH_FILMS_BEGIN = "FETCH_FILMS_BEGIN";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";

export const fetchFilmsBegin = () => ({
  type: FETCH_FILMS_BEGIN,
});

export const fetchFilmsSuccess = (products) => ({
  type: FETCH_FILMS_SUCCESS,
  payload: { products },
});

export const fetchFilmsFailure = (error) => ({
  type: FETCH_FILMS_FAILURE,
  payload: { error },
});

export function fetchFilms() {
  return (dispatch) => {
    dispatch(fetchFilmsBegin());
    return fetch("https://filmsapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchFilmsSuccess(json.message));
        return json.message;
      })
      .catch((error) => dispatch(fetchFilmsFailure(error)));
  };
}
