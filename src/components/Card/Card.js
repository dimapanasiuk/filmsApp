import React from 'react';
import { string, func, arrayOf, number } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clickOnFilm } from '../../redux/filmData/filmDataActions';
import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import { starsParse, categoryParse } from '../../utils/utils';

import './card.scss';


class Card extends React.Component {

  clickHandlerCategoryChoose = (e) => {
    let category = e.target.innerText;
    this.props.dispatch(chooseCategory(category));
  }

  clickHandlerGetFilmName = (e) => {
    const parent = e.target.parentNode;
    const parentName = parent.innerText;
    this.props.dispatch(clickOnFilm(parentName));
  }

  render() {
    const {
      id,
      title,
      release,
      categories,
      description,
      director,
      duration,
      gross,
      smallPoster,
      stars,
      topRating,
    } = this.props;
    return (
      <div id={id} className='main-card'>

        <Link onClick={this.clickHandlerGetFilmName} to={`/films/${title}`}>
          <h1 className='main-card_title'>{title}</h1>
        </Link>

        <div className='main-card_layout-content'>

          <div>
            <img alt={`${title} img`} src={smallPoster} />
          </div>

          <div className='main-card_layout-content-information'>

            <div className='main-card_duration'>
              <h4>Duration</h4>
              <p>{duration} m</p>
            </div>

            <div className='main-card_rating '>
              <h4>Rating </h4>
              <p>{topRating}</p>
            </div>

            <div className='main-card_director'>
              <h4>Director</h4>
              <p>{director}</p>
            </div>

            <div className='main-card_release'>
              <h4>Release</h4>
              <p>{release}</p>
            </div>

            <div className='main-card_gross'>
              <h4>Gross</h4>
              <p>{gross}</p>
            </div>

            <div className='main-card_description'>
              <h4>Description</h4>
              <p>{description}</p>
            </div>


            <div className='main-card_categories'>
              <h4>categories</h4>
              {categoryParse(categories, this.clickHandlerCategoryChoose)}
            </div>

            <div className='main-card_starts'>
              <h4>stars</h4>
              {starsParse(stars)}
            </div>

          </div>
        </div>
      </div>
    );
  }
}


Card.propTypes = {
  title: string,
  id: string,
  dispatch: func,
  release: number,
  categories: arrayOf(string),
  description: string,
  director: string,
  duration: number,
  gross: string,
  smallPoster: string,
  stars: arrayOf(string),
  topRating: number,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Card);
