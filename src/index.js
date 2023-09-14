


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import { Provider } from 'react-redux';
import {store} from './Redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );


// index.js
// import React from 'react';
// // import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import { Provider } from 'react-redux';
// import {store} from './Redux/store/store'; // Import your Redux store

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
