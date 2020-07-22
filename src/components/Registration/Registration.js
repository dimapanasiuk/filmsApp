import React from 'react';

import './registration.scss';

class Registration extends React.Component {
  state = {
    login: '',
    passwordFirst: '',
    passwordSecond: ''
  }


  onChangeHandlerLogin = (e) => {
    this.setState({ login: e.target.value });
  }

  onChangeHandlerPassword = (e) => {
    const el = e.target;
    let pasAttribute = el.getAttribute('password');

    if (pasAttribute === 'first-pass') {
      this.setState({ passwordFirst: el.value });
    } else if (pasAttribute === "second-pass") {
      this.setState({ passwordSecond: el.value });
    }
  }

  clickHandlerSubmit = () => {
    let { login, passwordFirst, passwordSecond } = this.state;

    if (passwordFirst !== passwordSecond) {
      alert('passwords mismatch');
    } else {
      localStorage.setItem('password', passwordFirst);
      localStorage.setItem('login', login);
    }
  }


  render() {
    console.log('login', this.state);
    return (
      <form className='login-form'>
        <input onChange={this.onChangeHandlerLogin} type='text' placeholder='your login' required />
        <input onChange={this.onChangeHandlerPassword} password='first-pass' type='password' placeholder='your password' required />
        <input onChange={this.onChangeHandlerPassword} password='second-pass' type='password' placeholder='your password' required />
        <input type='button' value='submit' onClick={this.clickHandlerSubmit} />
      </form>
    );
  }
}

export default Registration;
