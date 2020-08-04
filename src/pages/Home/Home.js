import React from 'react';
import Card from '../../components/Card/Card';
import { array } from 'prop-types';

import './home.scss';

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

  return (
    <div className='home-wrapper'>
      {filmsHtml}
    </div>
  );
};

Home.propTypes = {
  films: array
};

export default Home;

