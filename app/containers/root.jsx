import React from 'react'
import {connect} from 'react-redux'

import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

const root = ({ user, children }) =>
  <div>
    <nav>
      {user ? <WhoAmI/> : <Login/>}
    </nav>
    {children}
  </div>
)

const mapState = ({ auth }) => ({ user: auth });
export default connect(mapState)(root);
