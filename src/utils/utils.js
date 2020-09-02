import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Button, Avatar, Typography } from '@material-ui/core';

export let scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export let starsParse = (arr) => {
  return arr.map((i) => (
    <li key={uuidv4()}>
      <Avatar to={`/categories/${i}`} src="/" alt={i} size="50px" />
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

export let isCheckLoginInLocalStorage = () => {
  const store = localStorage;
  if (store.response !== undefined) {
    return true;
  }
  return false;
};

export let isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
