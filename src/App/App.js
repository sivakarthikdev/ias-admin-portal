import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LoginComponent from '../Login/LoginComponent'

export class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <AppBar position="static" className="header-section">
          <Toolbar>
            IAS Admin Login
          </Toolbar>
        </AppBar>
        <div className="body-section">
          <LoginComponent />
        </div>
        <div className="footer-section">
          <p>@Copyright IAS 2022</p>
        </div>
      </React.Fragment>
    )
  }
}

export default App

