import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { func } from 'prop-types';

import { searchFilm } from '../../redux/searchData/searchDataActions';

class Search extends React.Component {

  clickHandlerSearch = (e) => {
    const searchData = e.target.previousElementSibling.value;
    this.props.dispatch(searchFilm(searchData));
  }

  render() {
    return (
      <form>
        <input label="search" placeholder="search" />
        <Link onClick={this.clickHandlerSearch} to="/search">
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
