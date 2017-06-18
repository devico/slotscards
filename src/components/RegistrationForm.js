import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SocialRegister from './SocialRegister';
import '../App.css';

export default class RegistrationForm extends React.Component {
    state = {
        agreeNotChecked: true,
        emailIsEmpty: true,
        nickIsEmpty: true,
        passwordIsEmpty: true
    };
    static propTypes = {
        email: PropTypes.string.isRequired,
        nick: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    };

    onBtnClickHandler = (e) => {
        e.preventDefault();
        let email = ReactDOM.findDOMNode(this.refs.email).value;
        let nick = ReactDOM.findDOMNode(this.refs.nick).value;
        alert(email + '\n' + nick);
    }

    onCheckAgreeClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({agreeNotChecked: !prevState.agreeNotChecked}));
    }

    onFieldChange = (fieldName, e) => {
        if  (e.target.value.trim().length > 0)  {
            this.setState({['' + fieldName]: false});
        } else  {
            this.setState({['' + fieldName]: true});
        }
    }
    render() {
        var agreeNotChecked = this.state.agreeNotChecked,
            emailIsEmpty = this.state.emailIsEmpty,
            nickIsEmpty = this.state.nickIsEmpty,
            passwordIsEmpty = this.state.passwordIsEmpty;
        return (
            <WrapperForm>
                <FormLabel>SIGN UP</FormLabel>
                <form onSubmit={this.onBtnClickHandler.bind(this)}>
                    <input
                        type='text'
                        className='input-email'
                        onChange={this.onFieldChange.bind(this, 'emailIsEmpty')}
                        placeholder='Email address'
                        ref='email'
                    />
                    <input
                        type='text'
                        className='input-nick'
                        onChange={this.onFieldChange.bind(this, 'nickIsEmpty')}
                        placeholder='Nick'
                        ref='nick'
                    />
                    <input
                        type='password'
                        className='input-password'
                        onChange={this.onFieldChange.bind(this, 'passwordIsEmpty')}
                        placeholder='Password (8 characters minimum)'
                        ref='password'
                    />
                    <label className='check-agree-label'>
                        <input
                            className='check-agree-input'
                            type='checkbox'
                            ref='checkagree'/>
                            I agree with <a href="#">Terms of use</a> and <a href="#">Privacy policy</a>
                    </label>
                    <button
                        className='signup_btn'
                        ref='reg_button'
                        disabled={agreeNotChecked || emailIsEmpty || nickIsEmpty || passwordIsEmpty}
                    >
                        Continue registration
                    </button>
                </form>
                <span className='or-sign-up-via'>or sign up via</span>
                <SocialRegister />
            </WrapperForm>
        );
    }
}

const WrapperForm = styled.div`
    padding-top: 60px;
`;

const FormLabel = styled.span`
    margin-left: 154px;
    margin-top: 60px;
    width: 82px;
    height: 27px;
    font-family: arial, verdana, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #e9f0fa;
`;
