import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import Image from 'material-ui-image';
import { Typography } from '@material-ui/core';

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
  // const isData = localStorage.hasOwnProperty('loginData');
  let loginContent;

  // if (isData) {
  //   const content = JSON.parse(localStorage.loginData);

  //   loginContent = (
  //     <div className="login-content">
  //       <Image
  //         src={content.image}
  //         imageStyle={{ width: 'auto', height: 'auto' }}
  //         disableSpinner
  //       />
  //       <Typography variant="h6" gutterBottom>
  //         Hello {content.name} we can watch category
  //       </Typography>
  //       <GoogleLogout
  //         clientId="218192214311-q84kv5i8v4lt8o4p27aa5c7lbqj2lruv.apps.googleusercontent.com"
  //         buttonText="Logout"
  //         onLogoutSuccess={logout}
  //       ></GoogleLogout>
  //     </div>
  //   );
  // // } else {
  loginContent = (
    <div className="login-content">
      {/* <Typography variant="h6" gutterBottom>
          login to see more
        </Typography> */}
      <GoogleLogin
        clientId="218192214311-8j7mfaiej5hmcvtojt7n6u2q2tjhl675.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLogout
        clientId="218192214311-8j7mfaiej5hmcvtojt7n6u2q2tjhl675.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
  // }

  return <div className="login">{loginContent}</div>;
};

export default Login;
