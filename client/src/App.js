import React from 'react';
import { connect } from 'react-redux';
import { SideBar } from './components'
import { LogIn } from './pages';

/* NOTE: The 'username' prop in the Login component below is
   only for development, and should be deleted for production
   along with the its usage in Login.js (change 'props.username'
   back to an empty string in the state initializer)
   
   It is necessary to auto login the user when the app is 
   started with 'npm run noauth'. */

const App = (props) => 
  <div>
    <SideBar /> 
  </div>

const mapStateToProps = (state) => {
  return {loggedIn: state.loginReducer.loggedIn};
}

export default connect(mapStateToProps, {})(App);
