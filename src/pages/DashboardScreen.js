import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { HeadingOne } from '../components/Typography';
import { Container, Flex, BaseView } from '../components/Wrappers';
import { ApplicationHeader } from '../components/ApplicationHeader';
import TodoList from '../TodoList';

class DashboardScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: null,
      headerTitle: (
        <ApplicationHeader
          title="Jimmy"
          navigation={navigation}/>
        ),
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex
        fullHeight>
        <HeadingOne>Todos</HeadingOne>
        <TodoList></TodoList>
      </Flex>
    )
  }
}

DashboardScreen.propTypes = {
  auth: PropTypes.bool
}

export default DashboardScreen