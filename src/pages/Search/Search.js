import React from 'react';

import { connect } from 'react-redux';

import { arrayOf, object, string } from 'prop-types';

import Card from '../../components/Card/Card';

class Search extends React.Component {

  searchMovieByKeyword(searchWord, films) {
    const arr = films.filter(i => {
      let num = i.title.toUpperCase().indexOf(searchWord.toUpperCase());
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
  }

  render() {
    const { films, searchData } = this.props;

    return (
      <>
        {this.searchMovieByKeyword(searchData, films)}
      </>
    );
  }
}

Search.propTypes = {
  films: arrayOf(object),
  searchData: string
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    films: state.filmsReducer.items,
    searchData: state.searchDataReducer.searchFilm
  };
};

export default connect(mapStateToProps)(Search);


