import React from 'react';
import { string, func, arrayOf, number } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clickOnFilm } from '../../redux/filmData/filmDataActions';
import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import { starsParse, categoryParse } from '../../utils/utils';

import Image from 'material-ui-image';

import './card.scss';

import {
  Container,
  Card as CardStyle,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

class Card extends React.Component {
  clickHandlerCategoryChoose = (e) => {
    let category = e.target.innerText;
    this.props.dispatch(chooseCategory(category));
  };

  clickHandlerGetFilmName = (e) => {
    const parent = e.target.parentNode;
    const parentName = parent.innerText;
    this.props.dispatch(clickOnFilm(parentName));
  };

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
      <Container maxWidth="xl" style={{ marginBottom: '20px' }}>
        <CardStyle>
          <CardActionArea
            style={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <div className="card_img-container">
              <Image
                src={smallPoster}
                disableSpinner
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Link
                  onClick={this.clickHandlerGetFilmName}
                  to={`/films/${title}`}
                >
                  {title}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <CardActions>
                {categoryParse(categories, this.clickHandlerCategoryChoose)}
              </CardActions>
            </CardContent>
          </CardActionArea>
        </CardStyle>
      </Container>
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
