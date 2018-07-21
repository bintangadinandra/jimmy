import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

class NavigationHeader extends Component {
  render() {
    return (
      <View>
        <Text>Navigation Title Component</Text>
      </View>
    );
  }
}

NavigationHeader.propTypes = {

};

export default NavigationHeader;