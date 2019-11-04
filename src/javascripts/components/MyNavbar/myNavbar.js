import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
// auth div is my login button
const authDiv = $('#auth');
// $('') ... is a jquery reference to elements on the dom
const logoutButton = $('#navbar-button-logout');
// this is my content on the page
const stockDiv = $('#stock');

const logoutEvent = () => {
  logoutButton.click((e) => {
    // there's an event listener and we're going to stop whatever it's stop behavior is. the default behavior of a button click is to refresh the page.
    // continued.. When we don't want it to refresh the page we use preventdefault so we have control over what gets shown and what doesn't get shown.
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        // remove the hide class on it so it SHOWS
        authDiv.removeClass('hide');
        logoutButton.addClass('hide');
        // this is content on the page that I DON'T want to see when I'm logged out
        stockDiv.addClass('hide');
      }).catch((iceCream) => console.error('you\'re still logged in', iceCream));
  });
};

export default { logoutEvent };
