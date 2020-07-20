import React from 'react';
import { string } from 'prop-types';

const Card = ({ title }) => {
  return (<h2>{title}</h2>);
};

Card.propTypes = {
  title: string,
};

export default Card;
