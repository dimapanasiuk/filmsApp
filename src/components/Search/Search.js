import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { func, array } from 'prop-types';

import { searchFilm } from '../../redux/searchData/searchDataActions';

import './search.scss';
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const Search = ({ films, searchFilm }) => {
  const history = useHistory();

  const [searchData, setSearchData] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const filmName = e.target.elements.name.value;
    searchFilm(filmName);
    history.push('/search');
  };

  const clickHandlerSearch = () => {
    searchFilm(searchData);
  };

  const changeHandler = (e) => {
    setSearchData(e.t);

    const autoComplete = e.target.innerText;
    const textField = e.target.value;

    if (autoComplete) {
      setSearchData(autoComplete);
      return;
    } else {
      setSearchData(textField);
    }
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <Autocomplete
        id="custom-input-demo"
        onChange={changeHandler}
        options={films.map((option) => option.title)}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <TextField
              name="name"
              size="small"
              variant="outlined"
              style={{ width: 200 }}
              onChange={changeHandler}
              label="Search"
              type="text"
              {...params.inputProps}
            />
          </div>
        )}
      />
      <Button
        type="submit"
        className="search-button"
        component={Link}
        to="/search"
        onClick={clickHandlerSearch}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </form>
  );
};

Search.propTypes = {
  searchFilm: func,
  films: array,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  searchFilm: searchFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
