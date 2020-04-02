import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './Auth0Connect';

const config = {
  domain: 'sahtivahti.eu.auth0.com',
  clientId: 'ASuV7V1Uw16A5wQiebQBJgxiz4vnph13',
  audience: 'https://api.sahtivahti.fi',
  redirectUri: window.location.origin.indexOf('localhost') >= 0 
    ? window.location.origin : 'https://sahtivahti.github.io/app'
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={config.redirectUri}
    audience={config.audience}
    logout
  >
    <App />
  </Auth0Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
