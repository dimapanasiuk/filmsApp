import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, string } from 'prop-types';

import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import { showFilms } from '../../utils/utils';

import Pagination from '@material-ui/lab/Pagination';

import './categories.scss';

class Categories extends React.Component {
  state = {
    currentPage: 0,
  };

  handleChangePage = (e, value) => {
    this.setState({
      currentPage: value,
    });
  };

  getCategories(films) {
    let allCategories = films.map((item) => item.categories).flat();
    return allCategories.filter((item, i, arr) => arr.indexOf(item) === i);
  }

  searchMovieByKeyword = (categoryState, films) => {
    const arr = films.filter((i) => {
      let arrToStr = i.categories.join().toLowerCase();
      let num = arrToStr.indexOf(categoryState.toLowerCase());

      return num >= 0;
    });

    return arr.map((i) => (
      <Card
        key={i._id}
        id={i._id}
        title={i.title}
        release={i.releaseYear}
        categories={i.categories}
        description={i.description}
        director={i.director}
        duration={i.duration}
        gross={i.gross}
        smallPoster={i.smallPoster}
        stars={i.stars}
        topRating={i.topRating}
      />
    ));
  };

  render() {
    const { films, categoryChoose } = this.props;
    const { currentPage } = this.state;

    let filmsContent = showFilms(films, currentPage);

    let categories = this.getCategories(films);
    return (
      <div className="categories">
        <div className="categories-navbar">
          <div className="categories-navbar_wrapper">
            <NavBar list={categories} />
          </div>
        </div>
        <div className="categories-content">
          {this.searchMovieByKeyword(categoryChoose, filmsContent)}
          <Pagination
            count={films.length / 10 - 1}
            page={currentPage}
            onChange={this.handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  dispatch: func,
  films: arrayOf(object),
  allFilms: arrayOf(object),
  categoryChoose: string,
};

const mapStateToProps = (state) => {
  return {
    categoryChoose: state.categoryDataReducer.category,
  };
};

export default connect(mapStateToProps)(Categories);
