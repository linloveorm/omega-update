import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    clientId="Hf1MTzXndZxKu0KPOWyBwG3WTc00RRaH"
    domain="cmkl-omega.auth0.com"
    redirectUri="https://omega-next.cmkl.ac.th/account"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
