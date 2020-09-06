import React from 'react';
import { objectOf, string, arrayOf, object, func } from 'prop-types';
import { connect } from 'react-redux';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import { starsParse, categoryParse } from '../../utils/utils';

import Typography from '@material-ui/core/Typography';

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
          <Typography variant="h1" component="h2" gutterBottom>
            <b>{filmName}</b>
          </Typography>

          <div>
            <Typography variant="h3" gutterBottom align="left">
              <b>Duration</b> {duration}
            </Typography>
            <Typography variant="h4" gutterBottom>
              <b>Rating</b> {rating}{' '}
            </Typography>
            <Typography variant="h5" gutterBottom>
              <b>Director</b> {director}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Release</b> {releaseYear}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Gross</b> {gross}{' '}
            </Typography>
            <div className="stars-content">
              <Typography variant="h4" gutterBottom>
                <b>Stars</b>
              </Typography>
              <ul className="stars-content_items">{starsParse(stars)}</ul>
            </div>
            <div className="category-content">
              <Typography variant="h5" gutterBottom>
                <b>Category</b>
              </Typography>
              {categoryParse(categories, this.clickHandlerCategoryChoose)}
            </div>
            <Typography variant="body1" gutterBottom className='category-content_description'>
              {description}
            </Typography>
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
