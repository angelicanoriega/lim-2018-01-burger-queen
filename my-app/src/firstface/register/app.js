import React, { Component } from 'react';


class RegisterBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  submitRegister(e) {
    this.props.showFirst();
  }
  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Register
        </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            < input type = "text"
            name = "email"
            className = "login-input"
            placeholder = "Email"
            onChange = {
              this
              .onEmailChange
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
            .submitRegister
            .bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}
  export default  RegisterBox;
