import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Button, Avatar, Typography } from '@material-ui/core';

export let starsParse = (arr) => {
  return arr.map((i) => (
    <li key={uuidv4()}>
      <Avatar to={`/categories/${i}`} src="/" alt={i} size='50px'/>
      <Typography variant="h6">{i}</Typography>
    </li>
  ));
};

export let categoryParse = (arr, onClickHandler) => {
  return arr.map((i) => (
    <Button
      key={uuidv4()}
      component={Link}
      to={`/categories/${i}`}
      onClick={onClickHandler}
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
