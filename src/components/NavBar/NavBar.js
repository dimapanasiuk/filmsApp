import React from 'react';
import { arrayOf, string, func, object } from 'prop-types';
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
    let { list } = this.props;

    return (
      <aside>
        <nav >
          <ul>
            {this.htmlData(list)}
          </ul>
        </nav>
      </aside>
    );
  }
}


NavBar.propTypes = {
  list: arrayOf(string),
  dispatch: func,
  chooseCategory: object
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NavBar);

