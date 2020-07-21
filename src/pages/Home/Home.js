import React from 'react';
import Card from '../../components/Card/Card';
import { connect } from 'react-redux';
import { array } from 'prop-types';


const Home = ({ films }) => {
  let filmsHtml = films.map(i => <Card
    key={i._id}
    id={i._id}
    title={i.title}
    release={i.releaseYear}
    categories={i.categories}
    description={i.description}
    director={i.director}
    duration={i.duration}
    gross={i.gross}
    smallPoster={i.smallPoster}
    stars={i.stars}
    topRating={i.topRating}
    />);

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

