import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card/Card';


export const arrParse = (arr) => {
  return arr.map(i => <h4 key={uuidv4()}>{i}</h4>);
};


export const searchMovieByKeyword = (category, films) => {
  const arr = films.filter(i => {
    let arrToStr = i.categories.join();
    let num = arrToStr.indexOf(category);
    if (num >= 0) {
      return i;
    }
  });

  return arr.map(i => <Card
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
};
