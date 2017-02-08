import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Home from 'material-ui/svg-icons/action/home';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const styles = {
  title: {
    cursor: 'pointer',
  }
};

const iconStyles = {
  marginRight: 24,
};

export default class Header extends Component {
  render() {
    return (
      <div>
             <AppBar
              title={<span style={styles.title}>ReactJS + Meteor</span>}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              iconElementRight={<div>
                                  <FlatButton
                                    href="/"
                                    backgroundColor="#2196F3"
                                    labelPosition="before"
                                    label="GitHub Link"
                                    icon={<Home />}
                                  />
                                 <FlatButton
                                    href="/about"
                                    label="Label before"
                                    backgroundColor="#2196F3"
                                    labelPosition="before"
                                    icon={<ActionAndroid />}
                                  />
                                </div>
                                } 
            />
      </div>
    );
  }

};