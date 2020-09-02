import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import Image from 'material-ui-image';
import { Typography } from '@material-ui/core';

import './login.scss';

let Login = () => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const store = localStorage;
    if (store.response !== undefined) {
      setUserData(JSON.parse(store.response));
    }
  }, []);

  const responseGoogle = (response) => {
    setUserData(response);
    localStorage.setItem('response', JSON.stringify(response));
  };

  const logout = () => {
    setUserData('');
    localStorage.clear();
  };

  let loginContent = (data) => {
    let cssLogIn;
    let cssLogOut;
    cssLogIn = data ? 'none' : 'block';
    cssLogOut = data ? 'block' : 'none';

    let name = '';
    let imgUrl = '';

    if (userData.profileObj !== undefined) {
      name = userData.profileObj.name;
      imgUrl = userData.profileObj.imageUrl;
    }

    return (
      <>
        <div style={{ display: cssLogIn, textAlign: 'center' }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ maxWidth: '300px', marginBottom: '40px' }}
          >
            Please login to make the {<b>category</b>} section active
          </Typography>
          <GoogleLogin
            clientId="218192214311-8j7mfaiej5hmcvtojt7n6u2q2tjhl675.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div style={{ display: cssLogOut, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom style={{ maxWidth: '300px' }}>
            Hello
          </Typography>
          <Typography variant="h5" gutterBottom style={{ maxWidth: '300px' }}>
            {name}
          </Typography>
          <Image
            src={imgUrl}
            imageStyle={{
              width: 'auto',
              height: '100%',
              paddingBottom: '40px',
            }}
            disableSpinner
          />
          <div style={{ marginTop: '40px' }}>
            <GoogleLogout
              clientId="218192214311-8j7mfaiej5hmcvtojt7n6u2q2tjhl675.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
            ></GoogleLogout>
          </div>
        </div>
      </>
    );
  };

  return <div className="login">{loginContent(userData)}</div>;
};

export default Login;
