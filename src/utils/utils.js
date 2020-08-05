import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export let starsParse = (arr) => {
  return arr.map((i) => (
    <span to={`/categories/${i}`} key={uuidv4()}>
      {i}
    </span>
  ));
};

export let categoryParse = (arr, onClickHandler) => {
  return arr.map((i) => (
    <Button
      key={uuidv4()}
      component={Link}
      to={`/categories/${i}`}
      onClick={onClickHandler}
      size="small"
      color="primary"
    >
      {i}
    </Button>
  ));
};

export let showFilms = (arr, page) => {
  let currentPage = page * 10;
  return arr.slice(currentPage, currentPage + 10);
};
