import React from 'react';
import Card from '../../components/Card/Card';
import { connect } from 'react-redux';
import { array } from 'prop-types';


const Home = ({ films }) => {
  console.log('props', films);
  let filmsHtml = films.map(i => <Card key={i._id} title={i.title} />);

  return filmsHtml;
};

Home.propTypes = {
  films: array
};

const mapStateToProps = (state) => {
  return {
    films: state.filmsReducer.items,
    loading: state.filmsReducer.loading,
    error: state.filmsReducer.error,
  };
};

export default connect(mapStateToProps)(Home);

