import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './Auth0Connect';
import Auth0Config from './Model/Auth0Config';

if (!('auth0Config' in window)) {
  console.error('Can\'t find auth0Config!');
}

const config: Auth0Config = (window as any).auth0Config;

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
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
