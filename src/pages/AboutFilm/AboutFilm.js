import React from 'react';
import { objectOf, string, arrayOf, object } from 'prop-types';

import { connect } from 'react-redux';

import { arrParse } from '../../utils/utils';


import './aboutFilm.scss';

const getFilmData = (arr, findItem) => {
  return arr.find(i => i.title === findItem);
};

const AboutFilm = ({ film, films }) => {

  const { filmName } = film;

  const data = getFilmData(films, filmName);

  const {
    bigPoster,
    releaseYear,
    categories,
    stars,
    description,
    director,
    duration,
    gross,
    rating,
  } = data;

  return (
    <div className='about'>
      <div>
        <img src={bigPoster} alt={filmName} />
      </div>
      <div>
        <h1>{filmName}</h1>
        <div>
          <h1>Duration{duration}</h1>
          <h1>Rating {rating}</h1>
          <h1>Director {director}</h1>
          <h1>Release{releaseYear}</h1>
          <h1>gross{gross}</h1>

          <h3>stars</h3>
          {arrParse(stars)}

          <h3>categories</h3>
          {arrParse(categories)}

          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};


AboutFilm.propTypes = {
  film: objectOf(string),
  films: arrayOf(object),
};

const mapStateToProps = (state) => {
  return {
    film: state.filmDataReducer,
    films: state.filmsReducer.items
  };
};

export default connect(mapStateToProps)(AboutFilm);
