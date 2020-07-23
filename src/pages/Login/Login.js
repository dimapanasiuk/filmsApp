import React from 'react';

import Registration from '../../components/Registration/Registration';
import SignOut from '../../components/SignOut/SignOut';


class Login extends React.Component {
  isRegistration = () => {
    // let login = localStorage.getItem('Login');
    let password = localStorage.getItem('password');
    return password ? true : false;
  }

  render() {
    let content = () => {
      return this.isRegistration() ? <SignOut /> : <Registration />;
    };

    return (
      <>
        {content()}
      </>
    );
  }
}


export default Login;
