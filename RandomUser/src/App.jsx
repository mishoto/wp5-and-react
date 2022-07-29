import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

import './index.css';

const App = () => (
  <>
    <h3>random user</h3>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));


