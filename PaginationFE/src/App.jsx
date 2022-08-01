import React from 'react';
import ReactDOM from 'react-dom';
import FollowerList from './FollowerList';


import './index.css';


const App = () => (
  <>
  <FollowerList/>
  </>
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
