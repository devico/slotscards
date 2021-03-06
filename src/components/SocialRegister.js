import React, { Component } from 'react';
import googleblue from '../img/google-blue.svg';
import githubblue from '../img/github-blue.svg';
import facebookblue from '../img/facebook-blue.svg';
import '../App.css';

export default class SocialRegister extends Component {
  render() {
    return (
      <div>
        <div className='icons'>
          <a href="#">
            <img src={googleblue} class="googleBlue App-googleBlue" alt="googleblue" />
          </a>
          <a href="#">
            <img src={githubblue} class="githubBlue App-githubBlue" alt="githubblue" />
          </a>
          <a href="#">
            <img src={facebookblue} class="facebookBlue App-facebookBlue" alt="facebookblue" />
          </a>
        </div>
      </div>
    );
  }
}
