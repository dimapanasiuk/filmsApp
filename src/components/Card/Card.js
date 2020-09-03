import React from 'react';
import { string, func, arrayOf, number } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clickOnFilm } from '../../redux/filmData/filmDataActions';
import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import { starsParse, categoryParse } from '../../utils/utils';

import Image from 'material-ui-image';
import {
  Container,
  Card as CardStyle,
  CardActions,
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';

import './card.scss';

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
          <div className="card_content">
            <div className="card_img-container">
              <Image src={smallPoster} disableSpinner />
            </div>
            <CardContent>
              <Typography variant="h3" style={{ marginBottom: '30px' }}>
                <Link
                  className="text-article"
                  onClick={this.clickHandlerGetFilmName}
                  to={`/films/${title}`}
                >
                  {title}
                </Link>
              </Typography>

              <div className="card_content-paper-layout">
                <Paper elevation={3}>
                  <Typography variant="h5" color="primary" align="center">
                    Release
                  </Typography>
                  <Typography variant="h6" align="center">
                    {release}
                  </Typography>
                </Paper>
                <Paper elevation={3}>
                  <Typography variant="h5" color="primary" align="center">
                    Director
                  </Typography>
                  <Typography variant="h6" align="center">
                    {director}
                  </Typography>
                </Paper>
                <Paper elevation={3}>
                  <Typography variant="h5" color="primary" align="center">
                    Duration
                  </Typography>
                  <Typography variant="h6" align="center">
                    {duration} M
                  </Typography>
                </Paper>
                <Paper elevation={3}>
                  <Typography variant="h5" color="primary" align="center">
                    Gross
                  </Typography>
                  <Typography variant="h6" align="center">
                    {gross || '---'}
                  </Typography>
                </Paper>
                <Paper elevation={3}>
                  <Typography variant="h5" color="primary" align="center">
                    Rating
                  </Typography>
                  <Typography variant="h6" align="center">
                    {topRating}
                  </Typography>
                </Paper>
              </div>
              <ul className="card_stars-layout">{starsParse(stars)}</ul>
              <Typography variant="body1">{description}</Typography>
              <CardActions>
                {categoryParse(categories, this.clickHandlerCategoryChoose)}
              </CardActions>
            </CardContent>
          </div>
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
