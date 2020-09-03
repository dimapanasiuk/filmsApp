import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func, array } from 'prop-types';

import { searchFilm } from '../../redux/searchData/searchDataActions';

import './search.scss';
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

class Search extends React.Component {
  state = {
    searchData: '',
  };

  clickHandlerSearch = () => {
    const { searchData } = this.state;
    this.props.dispatch(searchFilm(searchData));
  };

  changeHandler = (e) => {
    this.setState({ searchData: e.t });

    const autoComplete = e.target.innerText;
    const textField = e.target.value;

    if (autoComplete) {
      this.setState({ searchData: autoComplete });
      return;
    } else {
      this.setState({ searchData: textField });
    }
  };

  render() {
    let { films } = this.props;

    return (
      <form className="search">
        <Autocomplete
          id="custom-input-demo"
          onChange={this.changeHandler}
          options={films.map((option) => option.title)}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <TextField
                size="small"
                variant="outlined"
                style={{ width: 200 }}
                onChange={this.changeHandler}
                label="Search"
                type="text"
                {...params.inputProps}
              />
            </div>
          )}
        />
        <Button
          className="search-button"
          component={Link}
          to="/search"
          onClick={this.clickHandlerSearch}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </form>
    );
  }
}

Search.propTypes = {
  dispatch: func,
  films: array,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Search);
