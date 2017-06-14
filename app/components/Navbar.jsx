import React from 'react';
import {connect} from 'react-redux';

import Login from '../components/Login';
import WhoAmI from '../components/WhoAmI';

const Navbar = ({ user })=>(
  <div>
    <nav>
      {user ? <WhoAmI/> : <Login />}
    </nav>
  </div>
)

const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(Navbar);
