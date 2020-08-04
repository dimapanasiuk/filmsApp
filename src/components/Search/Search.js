import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func, object } from 'prop-types';

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
    let { films, foo } = this.props;

    return (
      <form className="search">
        <Autocomplete
          style={{ width: 300 }}
          id="free-solo-demo"
          freeSolo
          onChange={this.changeHandler}
          options={films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              className="test"
              {...params}
              label="search"
              onChange={this.changeHandler}
              margin="normal"
              variant="outlined"
            />
          )}
        />
        <Button
          className="search-button"
          component={Link}
          to="/search"
          onClick={() => {
            this.clickHandlerSearch(), foo();
          }}
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
  films: object,
  foo: func,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Search);
