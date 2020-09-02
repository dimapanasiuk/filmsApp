import React from 'react';

import Login from '../../components/Login/Login';

import './prelogin.scss';

const PreLogin = () => {
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="prelogin-containter">
      <div className="prelogin-content">
        <Login />
      </div>
    </div>
  );
};

export default PreLogin;
