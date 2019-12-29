import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './Auth0Connect';
import config from './Service/AppConfig';

ReactDOM.render(
  <Auth0Provider
    domain={config.auth0.domain}
    client_id={config.auth0.clientId}
    redirect_uri={window.location.origin}
    audience={config.auth0.audience}
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
