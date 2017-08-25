import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { signIn } from '../actions/users';
import SocialRegister from './SocialRegister';
import '../App.css';

export default class LoginForm extends Component {
  state = {
    emailIsEmpty: true,
    passwordIsEmpty: true
  };
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  };

  onBtnClickHandler = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    signIn(email, password);
  }

  onCheckAgreeClick = (e) => {
    e.preventDefault();
    this.setState({ agreeNotChecked: !this.state.agreeNotChecked });
  }

  onFieldChange = (fieldName, e) => {
    if  (e.target.value.trim().length > 0)  {
      this.setState({ [fieldName]: false });
    } else  {
      this.setState({ [fieldName]: true });
    }
  }
  render() {
    const {
      emailIsEmpty,
      passwordIsEmpty
    } = this.state;

    return (
      <WrapperForm>
        <FormLabel>SIGN IN</FormLabel>
        <form onSubmit={this.onBtnClickHandler.bind(this)}>
          <input
            type='text'
            className='input-email'
            onChange={this.onFieldChange.bind(this, 'emailIsEmpty')}
            placeholder='Email address'
            ref='email'
          />
          <input
            type='password'
            className='input-password'
            onChange={this.onFieldChange.bind(this, 'passwordIsEmpty')}
            placeholder='Password (8 characters minimum)'
            ref='password'
          />
          <button
            className='signup_btn'
            ref='reg_button'
            disabled={emailIsEmpty || passwordIsEmpty}
          >
            Sign in
          </button>
        </form>
        <span className='or-sign-up-via'>or sign up via</span>
        <SocialRegister />
        <span className='dont-have-an-account'>
          Don’t have an account?
          <Link to="/users/signup" style={{ textDecoration: 'none', color: '#0099ff' }}>Sign up</Link>
        </span>

      </WrapperForm>
    );
  }
}

const WrapperForm = styled.div`
    padding-top: 113px;
`;

const FormLabel = styled.span`
    margin-left: 54px;
    width: 77px;
    height: 27px;
    font-family: arial, verdana, sans-serif;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    color: #e9f0fa;
`;
