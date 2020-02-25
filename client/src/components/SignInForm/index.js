import React, { Component } from "react";
import LoginModal from "react-login-modal-sm";
import "./style.css";

/* Cited React Login Modal: https://www.npmjs.com/package/react-login-modal-sm */
// npm i react-login-modal-sm

class SignInForm extends Component {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleLoginWithFacebook = () => {
    // Do something when 'Login with Facebook' is clicked
    console.log("Login with Facebook...");
  };

  handleSignupByEmail = (email, username, password) => {
    // Do something when 'Signup by email' is clicked
    console.log("Sign up by email...");
  };

  render() {
    const customUsernameRegex = /^[a-zA-Z0-9_]{5,}/;

    return (
      <div className="App">
        <LoginModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          onLoginFacebook={this.handleLoginWithFacebook}
          onSignupEmail={this.handleSignupByEmail}
          usernameRegex={customUsernameRegex}
        />

        <button className="login-btn btn btn-info" onClick={this.toggleModal}>
          Login
        </button>
      </div>
    );
  }
}

export default SignInForm;
