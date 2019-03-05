import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import setImageUrlReducer from './reducers/setImageUrlReducer';

const store = createStore(setImageUrlReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app-root')
);

/*eslint-disable */

if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
