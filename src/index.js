import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {createBrowserHistory} from 'history'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './newComponent/reducer/reducer'
let history = createBrowserHistory()

const store = createStore(Reducer)

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>

      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
