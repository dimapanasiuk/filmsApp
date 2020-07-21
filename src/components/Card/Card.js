import React from 'react';
import { string } from 'prop-types';

import { Link } from 'react-router-dom';
import './card.scss';


const Card = ({ title }) => {
  return (
    <div className='main-card'>
      <Link to={`/films/${title}`}>
        <h2 className='main-card_title'>{title}</h2>
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: string,
};

export default Card;
