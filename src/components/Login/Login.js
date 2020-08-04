import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import './login.scss';

const responseGoogle = (response) => {
  let { givenName, familyName, email, imageUrl } = response.profileObj;

  let loginData = {
    name: givenName,
    secondName: familyName,
    email: email,
    image: imageUrl,
  };

  localStorage.setItem('loginData', JSON.stringify(loginData));
};

const logout = () => {
  localStorage.clear();
};

let Login = () => {
  const isData = localStorage.hasOwnProperty.call(Login, 'loginData');
  let loginContent;

  if (isData) {
    const content = JSON.parse(localStorage.loginData);

    loginContent = (
      <div>
        <h1>{content.name}</h1>
        <img src={content.image} alt="avatar" />
        <GoogleLogout
          clientId="218192214311-q84kv5i8v4lt8o4p27aa5c7lbqj2lruv.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    );
  } else {
    loginContent = (
      <GoogleLogin
        clientId="218192214311-q84kv5i8v4lt8o4p27aa5c7lbqj2lruv.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    );
  }

  return (
    <div className="login">
      <h1>Content</h1>
      {loginContent}
    </div>
  );
};

export default Login;
