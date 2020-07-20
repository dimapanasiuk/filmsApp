import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../../redux/counter/actions';
import { func } from 'prop-types';


class Categories extends React.Component {
  increment = () => {
    this.props.dispatch(increment());
  }

  decrement = () => {
    this.props.dispatch(decrement());

  }

  render() {
    return (
      <>
        <h1>Categories</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>

      </>
    );
  }
}

Categories.propTypes = {
  dispatch: func,
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};


export default connect(mapStateToProps)(Categories);

