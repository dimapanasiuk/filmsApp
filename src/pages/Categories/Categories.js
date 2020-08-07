import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, string } from 'prop-types';

import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';
import { showFilms, scrollToTop } from '../../utils/utils';

import Pagination from '@material-ui/lab/Pagination';

import './categories.scss';

class Categories extends React.Component {
  state = {
    currentPage: 1,
    date: '',
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

  resetPagination = () => {
    this.setState({ currentPage: 1 });
  };

  render() {
    const { films, categoryChoose } = this.props;
    const { currentPage } = this.state;

    const categoryFilms = this.searchMovieByKeyword(categoryChoose, films);
    const pages = Math.floor(categoryFilms.length / 10 - 1);
    const content = showFilms(categoryFilms, currentPage - 1);

    scrollToTop();

    return (
      <div className="categories">
        <div className="categories-navbar">
          <div className="categories-navbar_wrapper">
            <NavBar
              list={this.getCategories(films)}
              resetPagination={this.resetPagination}
            />
          </div>
        </div>
        <div className="categories-content">
          {content}
          {(() => {
            if (pages > 1)
              return (
                <Pagination
                  className="pagination"
                  count={pages}
                  page={currentPage}
                  onChange={this.handleChangePage}
                  shape="rounded"
                />
              );
          })()}
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
