import React from 'react';
import { objectOf, string, arrayOf, object, func } from 'prop-types';
import { connect } from 'react-redux';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import { starsParse, categoryParse } from '../../utils/utils';

import './aboutFilm.scss';

class AboutFilm extends React.Component {
  clickHandlerCategoryChoose = (e) => {
    let category = e.target.innerText;
    this.props.dispatch(chooseCategory(category));
  };

  getFilmData = (arr, findItem) => {
    return arr.find((i) => i.title === findItem);
  };

  render() {
    let { filmName } = this.props.film;
    let { films } = this.props;

    let data = this.getFilmData(films, filmName);

    let {
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
      <div className="about">
        <div className="about_pic">
          <img src={bigPoster} alt={filmName} />
        </div>

        <div className="about_content">
          <h1>{filmName}</h1>
          <div>
            <h1>Duration{duration}</h1>
            <h1>Rating {rating}</h1>
            <h1>Director {director}</h1>
            <h1>Release{releaseYear}</h1>
            <h1>gross{gross}</h1>

            <h3>stars</h3>
            {starsParse(stars)}

            <h3>categories</h3>
            {categoryParse(categories, this.clickHandlerCategoryChoose)}

            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

AboutFilm.propTypes = {
  film: objectOf(string),
  films: arrayOf(object),
  dispatch: func,
};

const mapStateToProps = (state) => {
  return {
    film: state.filmDataReducer,
  };
};

export default connect(mapStateToProps)(AboutFilm);
