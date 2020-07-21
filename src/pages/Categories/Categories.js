import React from 'react';
import { connect } from 'react-redux';

import { func, arrayOf, object } from 'prop-types';

import './categories.scss';

import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';


class Categories extends React.Component {
  getCategories() {
    let { films } = this.props;
    let allCategories = films.map(item => item.categories).flat();
    return allCategories.filter((item, i, arr) => arr.indexOf(item) === i);
  }

  render() {
    let categories = this.getCategories();
    return (
      <div className="categories" >
        <div>
          <NavBar list={categories} />
        </div>
        <div>
          <Home films={this.films} />
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

