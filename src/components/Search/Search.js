import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { func, object } from 'prop-types';

import { searchFilm } from '../../redux/searchData/searchDataActions';

import './search.scss';
import {TextField, Button} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';


class Search extends React.Component {

  clickHandlerSearch = (e) => {
    const searchData = e.target.previousElementSibling.value;
    this.props.dispatch(searchFilm(searchData));
  }

  render() {
    let {films} = this.props;

    return (
      <form className="search">
    <Autocomplete
        style={{ width: 300 }}
        id="free-solo-demo"
        freeSolo
        onChange = {(e) => console.log(e.target.innerText) }
        options={films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="search"  margin="normal" variant="outlined" />
        )}
      />
        <Button className="search-button" component={Link} to="/search" onClick={() => console.log('test')} variant="contained" color="primary" >Search</Button>


        {/* <input className="search-input" label="search" placeholder="search" /> */}
{/*
        <Link className="search-button" onClick={this.clickHandlerSearch} to="/search">
          Search
        </Link> */}
      </form>
    );
  }
}


Search.propTypes = {
  dispatch: func,
  films: object
};

const mapStateToProps = (state) => {
  return {
    films: state.filmsReducer.items
  };
};

export default connect(mapStateToProps)(Search);
