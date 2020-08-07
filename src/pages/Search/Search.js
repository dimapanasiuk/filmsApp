import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';

import Card from '../../components/Card/Card';
import { showFilms } from '../../utils/utils';

import Pagination from '@material-ui/lab/Pagination';

import './search.scss';

class Search extends React.Component {
  state = {
    currentPage: 1,
  };

  handleChangePage = (e, value) => {
    this.setState({
      currentPage: value,
    });
  };

  searchMovieByKeyword(searchWord, films) {
    const arr = films.filter((i) => {
      let num = i.title.toUpperCase().indexOf(searchWord.toUpperCase());
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
  }

  render() {
    const { films, searchData } = this.props;
    const { currentPage } = this.state;

    const content = this.searchMovieByKeyword(searchData, films);
    const pages = Math.floor(content.length / 10 - 1);
    const currentContent = showFilms(content, currentPage - 1);

    return (
      <div className="search-wrapper">
        {currentContent}
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
    );
  }
}

Search.propTypes = {
  films: arrayOf(object),
  searchData: string,
};

const mapStateToProps = (state) => {
  return {
    searchData: state.searchDataReducer.searchFilm,
  };
};

export default connect(mapStateToProps)(Search);
