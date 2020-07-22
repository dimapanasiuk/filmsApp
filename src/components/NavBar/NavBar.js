import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';


class NavBar extends React.Component {

  clickHandlerCategoryChoose = (e) => {
    let category = e.target.innerText;
    this.props.dispatch(chooseCategory(category));
  }

  htmlData = (arr) => arr.map(i => {
    return <li
      className='category-item'
      key={uuid4()}>
      <Link
        onClick={this.clickHandlerCategoryChoose}
        to={`/categories/${i}`}>{i}</Link>
    </li>;

  });

  render() {
    let { list, category } = this.props;
    return (
      <ul>
        {this.htmlData(list, category)}
      </ul>
    );
  }
}


NavBar.propTypes = {
  list: arrayOf(string),
  category: string,
  dispatch: func
};

const mapStateToProps = (state) => {
  return {
    category: state.categoryDataReducer.category
  };
};

export default connect(mapStateToProps)(NavBar);

