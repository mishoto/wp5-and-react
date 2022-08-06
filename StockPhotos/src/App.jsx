import React from 'react';
import ReactDOM from 'react-dom';
import PhotosList from './components/PhotosList';
import PhotosListTest from './components/PhotosListTest';


import './index.css';

const App = () => (
  <>
    <div>
      <PhotosListTest />
    </div>
  </>
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
