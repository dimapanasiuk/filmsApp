import React from 'react';

class SignOut extends React.Component {

  clickHandlerResetLocalStorage = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
  }

  render() {
    let login = localStorage.getItem('login');
    let password = localStorage.getItem('password');

    return (
      <>
        <h1>login {login}</h1>
        <h1>password {password}</h1>
        <button onClick={this.clickHandlerResetLocalStorage}>SignOut</button>
      </>
    );
  }
}

export default SignOut;
