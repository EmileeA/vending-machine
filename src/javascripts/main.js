import firebase from 'firebase';

import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/MyNavbar/myNavbar';
import machine from './components/Machine/machine';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  // firebase keys that you're loading in. This is the method to initialize firebase

  firebase.initializeApp(apiKeys.firebaseKeys);
  // console.log('hi', apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  machine.buildTheMachine();
};

init();
