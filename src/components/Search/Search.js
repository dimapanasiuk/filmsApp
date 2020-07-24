import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { func } from 'prop-types';

import { searchFilm } from '../../redux/searchData/searchDataActions';

import './search.scss';


class Search extends React.Component {

  clickHandlerSearch = (e) => {
    const searchData = e.target.previousElementSibling.value;
    this.props.dispatch(searchFilm(searchData));
  }

  render() {
    return (
      <form className="search">
        <input className="search-input" label="search" placeholder="search" />
        <Link className="search-button" onClick={this.clickHandlerSearch} to="/search">
          Search
        </Link>
      </form>
    );
  }
}


Search.propTypes = {
  dispatch: func
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Search);
