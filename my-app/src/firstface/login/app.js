import React, { Component } from 'react';


class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {username:'',password:''};
    }
    onUsernameChange(e) {
      this.setState({
        username: e.target.value
      });
    }
    onPasswordChange(e) {
      this.setState({
        password: e.target.value
      });
    }
    submitLogin(e) {
      this.props.showFirst();
    }
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                onChange = {
                  this
                  .onUsernameChange
                  .bind(this)
                }/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                onChange = {
                  this
                  .onPasswordChange
                  .bind(this)
                }/>
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>
          </div>
        </div>
      );
    }
  
  }
  export default LoginBox;
