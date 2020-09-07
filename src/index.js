import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Favicon from 'react-favicon';
import fav from './fav.ico';

ReactDOM.render(
  <>
    <Favicon url={fav} />
    <App />
  </>,
  document.getElementById('root')
);
