import React from 'react';
import { arrayOf, string, func, object } from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';

class NavBar extends React.Component {
  clickHandlerCategoryChoose = (e, foo) => {
    let category = e.target.innerText;
    this.props.dispatch(chooseCategory(category));
    foo();
  };

  htmlData = (arr, foo) => {
    return arr.map((i) => {
      return (
        <Button
          className="navbar-button"
          variant="contained"
          color="primary"
          key={uuid4()}
          onClick={(e) => this.clickHandlerCategoryChoose(e, foo)}
          to={`/categories/${i}`}
          component={Link}
        >
          {i}
        </Button>
      );
    });
  };

  render() {
    let { list, resetPagination } = this.props;

    return (
      <div className="categories-content">
        {this.htmlData(list, resetPagination)}
      </div>
    );
  }
}

NavBar.propTypes = {
  list: arrayOf(string),
  dispatch: func,
  chooseCategory: object,
  resetPagination: func,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NavBar);
