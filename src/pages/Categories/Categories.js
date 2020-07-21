import React from 'react';
import { connect } from 'react-redux';

import { func, arrayOf, object, string } from 'prop-types';

import './categories.scss';

import NavBar from '../../components/NavBar/NavBar';
import {searchMovieByKeyword} from '../../utils/utils';

class Categories extends React.Component {
  getCategories(films) {
    let allCategories = films.map(item => item.categories).flat();
    return allCategories.filter((item, i, arr) => arr.indexOf(item) === i);
  }

  render() {
    let { films, category } = this.props;
    let categories = this.getCategories(films);

    return (
      <div className="categories" >
        <div>
          <NavBar list={categories} />
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
  category: string
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    films: state.filmsReducer.items,
    category: state.categoryDataReducer.category
  };
};

export default connect(mapStateToProps)(Categories);

