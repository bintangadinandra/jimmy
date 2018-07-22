import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { HeadingOne } from "../components/Typography";
import { Container, Flex, BaseView } from "../components/Wrappers";
import { ApplicationHeader } from "../components/ApplicationHeader";
import TodoList from "../containers/TodoList";
import WeatherInfo from "../components/WeatherInfo";

class DashboardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      headerTitle: (
        <ApplicationHeader title="Jimmy" isLogo navigation={navigation} />
      )
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex fullHeight>
        <WeatherInfo />
        <HeadingOne>Todos</HeadingOne>
        <TodoList />
      </Flex>
    );
  }
}

DashboardScreen.propTypes = {
  auth: PropTypes.bool
};

export default DashboardScreen;
