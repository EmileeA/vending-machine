import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

// reaching into the Dom and looking for an ID called auth and setting it to a variable.
// continued.. so that the element will already be defined and you can use it in the check status function
const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNavbar = $('#navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // someone is logged in - we should NOT see auth component
      // stockDiv is the content
      stockDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      // auth div login button
      authDiv.addClass('hide');
    } else {
      // nobody logged in SHOW auth component
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
