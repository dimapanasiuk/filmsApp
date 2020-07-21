import React from 'react';
import { string, func, arrayOf, number } from 'prop-types';

import { connect } from 'react-redux';
import { clickOnFilm } from '../../redux/filmData/filmDataActions';

import { Link } from 'react-router-dom';
import { arrParse } from '../../utils/utils';
import './card.scss';


class Card extends React.Component {
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
          <h2 className='main-card_title'>{title}</h2>
        </Link>
        <div className='main-card_layout-content'>
          <div>
            <img alt={`${title} img`} src={smallPoster} />
          </div>
          <div>
            <h1>Duration{duration}</h1>
            <h1>Rating {topRating}</h1>
            <h1>Director {director}</h1>
            <h1>Release{release}</h1>
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
