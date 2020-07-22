import React from 'react';
import { connect } from 'react-redux';

import { func, arrayOf, object } from 'prop-types';

import './categories.scss';

import NavBar from '../../components/NavBar/NavBar';
import {searchMovieByKeyword} from '../../utils/utils';

class Categories extends React.Component {

  getCategories(films) {
    let allCategories = films.map(item => item.categories).flat();
    return allCategories.filter((item, i, arr) => arr.indexOf(item) === i);
  }


  state = { category: '' }

  handleClickCategory = (categoryValue) => {
      this.setState({category: categoryValue});
  }


  render() {
    let { films } = this.props;
    let { category } =this.state;

    let categories = this.getCategories(films);
    return (
      <div className="categories" >
        <div>
          <NavBar onSelectCategory={this.handleClickCategory} list={categories} />
        </div>
        <div>
          {searchMovieByKeyword(category, films)}
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
    count: state.count,
    films: state.filmsReducer.items
  };
};

export default connect(mapStateToProps)(Categories);

