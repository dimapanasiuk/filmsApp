import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

  state = {
    category: ''
  }

  handleChooseCategory = (e) => {
    const categoryValue = e.target.innerText;
    this.setState({category: categoryValue});
    this.props.onSelectCategory(categoryValue);
  }

  htmlData = (arr, linkTo) => {
    return arr.map(i => <li
      className='category-item'
      key={uuid4()}
      onClick={this.handleChooseCategory}
    >
      <Link to={linkTo}>{i}</Link>

    </li>);
  };

  render() {
    let {category} = this.state;
    let { list } = this.props;
    return (
      <ul>
        {this.htmlData(list, `/categories/${category}`)}
      </ul>
    );
  }
}


NavBar.propTypes = {
  list: arrayOf(string),
  category: string,
  onSelectCategory: func
};

export default NavBar;
