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

  categoryFilms(category, films) {
    const arr = films.filter(i => {
      let arrToStr = i.categories.join();
      let num = arrToStr.indexOf(category);
      if(num >= 0) {
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

  }

  render() {
    let { films, category } = this.props;
    let categories = this.getCategories(films);

   let filmsPreview = this.categoryFilms(category , films);

    return (
      <div className="categories" >
        <div>
          <NavBar list={categories} />
        </div>
        <div>
          {filmsPreview}
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

