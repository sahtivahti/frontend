import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './Auth0Connect';
import { config } from './Service/Config';

const auth0Config = {
  domain: 'sahtivahti.eu.auth0.com',
  clientId: 'ASuV7V1Uw16A5wQiebQBJgxiz4vnph13',
  audience: 'https://api.sahtivahti.fi',
  redirectUri: config.baseurl
};

ReactDOM.render(
  <Auth0Provider
    domain={auth0Config.domain}
    client_id={auth0Config.clientId}
    redirect_uri={auth0Config.redirectUri}
    audience={auth0Config.audience}
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
