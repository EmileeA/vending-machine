import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import monkeyBut from './googlebutton.png';
import utilities from '../../helpers/utilities';

const signMeIn = () => {
  // this is creating a new instance of a google auth provider.
  // the "new" keyword is a constructor that will build out an object that will pass into my sign in.
  // when you create a constructor the job of the constructor is to create an object.
  const provider = new firebase.auth.GoogleAuthProvider();
  // method in auth to use signinwithpopup
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button id="google-auth" class="btn btn-danger">
    <img src=${monkeyBut} />
  </button>`;

  // 'auth' is a parameter and a string
  utilities.printToDom('auth', domString);
  // on the click run the signMeIn function. This is a callback
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
