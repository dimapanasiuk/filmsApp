import React from 'react';
import { connect } from 'react-redux';

import { func, arrayOf, object } from 'prop-types';

import './categories.scss';

import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/Card/Card';

class Categories extends React.Component {
  state = { category: '' }

  getCategories(films) {
    let allCategories = films.map(item => item.categories).flat();
    return allCategories.filter((item, i, arr) => arr.indexOf(item) === i);
  }

  handleClickCategory = (categoryValue) => {
    this.setState({ category: categoryValue });
  }

  searchMovieByKeyword = (category, films) => {
    const arr = films.filter(i => {
      let arrToStr = i.categories.join();
      let num = arrToStr.indexOf(category);
      if (num >= 0) {
        return i;
      }
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
    let { films } = this.props;
    let { category } = this.state;

    let categories = this.getCategories(films);
    return (
      <div className="categories" >
        <div className="categories-navbar" >
          <h2>Categories</h2>
          <NavBar onSelectCategory={this.handleClickCategory} list={categories} />
        </div>
        <div className="categories-content">
          {this.searchMovieByKeyword(category, films)}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  dispatch: func,
  films: arrayOf(object),
};

const mapStateToProps = (state) => {
  return {
    films: state.filmsReducer.items
  };
};

export default connect(mapStateToProps)(Categories);

