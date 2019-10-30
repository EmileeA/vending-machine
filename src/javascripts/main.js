import firebase from 'firebase';

import apiKeys from '.helpers/apiKeys.json';

imoprt '../styles/main.scss';

const init = () => {
  firebase.intializeApp(firebaseKeys);
  console.log('hi', apiKeys.firebaseKeys);
};

init();
