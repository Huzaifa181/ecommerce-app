import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();