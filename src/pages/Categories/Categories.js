import React from 'react';
import { connect } from 'react-redux';

import { func, arrayOf, object, string } from 'prop-types';

import './categories.scss';

import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';

class Categories extends React.Component {
  getCategories(films) {
    let allCategories = films.map(item => item.categories).flat();
    return allCategories.filter((item, i, arr) => arr.indexOf(item) === i);
  }

  searchMovieByKeyword = (categoryState, films) => {
    const arr = films.filter(i => {
      let arrToStr = i.categories.join();
      let num = arrToStr.indexOf(categoryState);
      return num >= 0;
    });

    return arr.map(i => <Card
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
    />);
  };


  render() {
    let { films, categoryChoose } = this.props;

    let categories = this.getCategories(films);
    return (
      <div className="categories" >
        <div className="categories-navbar" >
          <div className="categories-navbar_wrapper">
          <h2>Categories</h2>
          <NavBar list={categories} />
          </div>
        </div>
        <div className="categories-content">
          {this.searchMovieByKeyword(categoryChoose, films)}
        </div>
      </div>
    );
  }
}


Categories.propTypes = {
  dispatch: func,
  films: arrayOf(object),
  categoryChoose: string
};

const mapStateToProps = (state) => {
  return {
    films: state.filmsReducer.items,
    categoryChoose: state.categoryDataReducer.category
  };
};

export default connect(mapStateToProps)(Categories);

