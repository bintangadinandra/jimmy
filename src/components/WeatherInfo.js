import React, { PureComponent } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { Flex } from "./Wrappers";

class WeatherInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: ""
    };
  }

  componentWillMount() {
    Geolocation.getCurrentPosition.then(result => console.log(result));
  }

  render() {
    return (
      <Flex fullWidth debug>
        <Icon name="sun" size={40} />
        <Text>Weather Info Here</Text>
      </Flex>
    );
  }
}

WeatherInfo.propTypes = {};

export default WeatherInfo;
