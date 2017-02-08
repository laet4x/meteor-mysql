/**
 * The top level react component
 */
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Root from './Root';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

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
