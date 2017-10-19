import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import shapesApp from './reducers';
import Board from './containers/Board';
import './index.css';

const store = createStore(shapesApp);

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root')
);
