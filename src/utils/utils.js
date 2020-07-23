import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


export let starsParse = (arr) => {
  return arr.map(i => <p
    to={`/categories/${i}`}
    key={uuidv4()}>{i}</p>);
};

export let categoryParse = (arr, onClickHandler) => {
  return arr.map(i => <Link
    to={`/categories/${i}`}
    className='category-button'
    onClick={onClickHandler}
    key={uuidv4()}>{i}</Link>);
};
