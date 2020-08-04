import React from 'react';
import { arrayOf, string, func, object } from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';


class NavBar extends React.Component {
  clickHandlerCategoryChoose = (e) => {
    let category = e.target.innerText;
    this.props.dispatch(chooseCategory(category));
  };

  htmlData = (arr) =>
    arr.map((i) => {
      return (
        <Button
          variant="contained"
          color="primary"
          key={uuid4()}
          onClick={this.clickHandlerCategoryChoose}
          to={`/categories/${i}`}
          component={Link}
        >
          {i}
        </Button>
      );
    });

  render() {
    let { list } = this.props;

    return (
      <div className="categories-content">
        {/* <h1>Categories</h1> */}
        {this.htmlData(list)}
      </div>
    );
  }
}


NavBar.propTypes = {
  list: arrayOf(string),
  dispatch: func,
  chooseCategory: object,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NavBar);
