import React , { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import Footer from './Footer';

class Root extends Component {
    render() {
        return (
        	 <MuiThemeProvider>
			  <div>
			       <Header/>
			        {this.props.children}
			      <Footer/>
			  </div>
			 </MuiThemeProvider> 
        )
    }
}

export default Root;
