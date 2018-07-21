import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../components/Wrappers';
import { HeadingTwo } from '../components/Typography';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  }

  render() {
    return (
      <Container>
        <HeadingTwo>Settings Page</HeadingTwo>
      </Container>
    );
  }
}

SettingsScreen.propTypes = {

};

export default SettingsScreen;