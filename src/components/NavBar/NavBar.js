import React from 'react';
import { arrayOf, string, func, object } from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

    // return (
    //   <aside>
    //     <nav >
    //       <ul>
    //         {this.htmlData(list)}
    //       </ul>
    //     </nav>
    //   </aside>
    // );
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
