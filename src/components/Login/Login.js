import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import {
  clickOnLogin,
  clickOnLogOut,
} from '../../redux/loginData/loginDataAction';
import Image from 'material-ui-image';
import { Typography } from '@material-ui/core';

import './login.scss';

import { isCheckLoginInLocalStorage } from '../../utils/utils';

let Login = ({ clickOnLogOut, clickOnLogin }) => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const store = localStorage;
    if (isCheckLoginInLocalStorage()) {
      setUserData(JSON.parse(store.response));
    }
  }, []);

  const responseGoogle = (response) => {
    setUserData(response);
    clickOnLogin(response);
    localStorage.setItem('response', JSON.stringify(response));
  };

  const logout = () => {
    setUserData('');
    clickOnLogOut('');
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
        <div className="login-content" style={{ display: cssLogIn }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ maxWidth: '500px', marginBottom: '40px' }}
          >
            Please login to make the section active please log in via
            {<b> google account</b>} to see the films app
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

Login.propTypes = {
  clickOnLogin: func,
  clickOnLogOut: func,
};

const mapDispatchToProps = {
  clickOnLogin,
  clickOnLogOut,
};

const mapStateToProps = (state) => ({ loginData: state.loginDataReducer });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
