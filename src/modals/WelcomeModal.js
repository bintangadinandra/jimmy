import React, { PureComponent } from "react";
import {
  Button,
  View,
  KeyboardAvoidingView,
  BackHandler,
  Text
} from "react-native";
import { HeadingOne, FormInput } from "../components/Typography";
import { Container, Flex, Col } from "../components/Wrappers";

class WelcomeModal extends PureComponent {
  static navigationOptions = {
    headerStyle: {
      display: "none"
    }
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    return true;
  };

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView enabled>
        <Flex justifyContent="space-around" fullHeight>
          <Col size="2">
            <Text
              style={{
                fontSize: 55,
                fontFamily: "NunitoSans-ExtraLight"
              }}
            >
              Jimmy
            </Text>
          </Col>
          <Col size="3" direction="y" fullWidth>
            <View style={{ width: "100%", padding: 20 }}>
              <FormInput placeholder="Email" />
              <FormInput placeholder="Password" secureTextEntry />
              <Button
                title="Login"
                onPress={() => navigation.navigate("Dashboard")}
              />
            </View>
          </Col>
        </Flex>
      </KeyboardAvoidingView>
    );
  }
}

export default WelcomeModal;
