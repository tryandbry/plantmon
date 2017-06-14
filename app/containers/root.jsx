import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../components/Navbar';

export default ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

