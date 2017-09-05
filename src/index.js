import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { List } from 'immutable';
import './style.scss';
import reducers from './reducers';
import App from './containers/App';
import { SHOW_TYPE_ALL, lightTheme } from './common/Constants';
import changeTextSaga from './sagas/changeText';

const initialState = {
  /*
    Each Object = {
      text: ,
      type: , [ACTIVE, COMPLETED]
    }
  */
  items: List(),
  themeName: lightTheme,
  showType: SHOW_TYPE_ALL,
  text: '',

};

const saga = createSagaMiddleware();
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(saga),
);
saga.run(changeTextSaga);

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
