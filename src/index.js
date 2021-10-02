// Styles
import './css/index.css';

// Dependecies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// App
import App from './js/App';

// Reducers
import rootReducer from './js/reducers';

// 
import reportWebVitals from './reportWebVitals';



const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
