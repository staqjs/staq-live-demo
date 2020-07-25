import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { initStaq, withStaq } from 'staq'

initStaq({
  siteTitle: 'Staq Live Demo',
  landingPageHeader: 'SaaS apps are great',
  landingPageSubheader: 'You should totally subscribe',
  firebaseConfig: {
    apiKey: "AIzaSyA53q0l3Q68T6R19imxXl9SHOGxfHGhdOM",
    authDomain: "staq-live-demo.firebaseapp.com",
    databaseURL: "https://staq-live-demo.firebaseio.com",
    projectId: "staq-live-demo",
    storageBucket: "staq-live-demo.appspot.com",
    messagingSenderId: "316093476373",
    appId: "1:316093476373:web:44a44c5cc8c5a1f782681c",
    measurementId: "G-05585GF15F"
  }
})

ReactDOM.render(
  withStaq(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
