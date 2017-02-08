/**
 * The top level react component
 */
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Root from '/client/components/Root';
import Home from '/client/components/Home';
import Header from '/client/components/Header';
import Footer from '/client/components/Footer';

import PostsContainer from './postsContainer';

export default class App extends Component {
   
    render() {
        return (
            <Router history={browserHistory}>
		   	 <Route path="/" component={Root}>
			   	  <IndexRoute component={Home}/>
			      <Route path="post" component={PostsContainer}/>
		    </Route>
		  </Router>
        )
    }
}
