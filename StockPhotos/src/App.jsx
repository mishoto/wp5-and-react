import React from 'react';
import ReactDOM from 'react-dom';
import PhotosList from './components/PhotosList';


import './index.css';

const App = () => (
  <>
    <div>
      <PhotosList />
    </div>
  </>
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
