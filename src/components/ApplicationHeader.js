import React from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Flex, Col, Container } from "./Wrappers";
import { HeadingThree, NakedButton } from "./Typography";

const styles = {
  iconStyle: {
    padding: 5,
    backgroundColor: "white"
  }
};

export const ApplicationHeader = props => {
  const { navigation, title, isLogo } = props;
  return (
    <Container>
      <Flex direction="x" fullWidth>
        <Icon.Button
          name="sign-out"
          size={20}
          color="#2a2a2a"
          style={styles.iconStyle}
          onPress={() => navigation.navigate("Welcome")}
        />
        <Col>
          {isLogo ? (
            <HeadingThree
              style={{
                textAlign: "center",
                fontFamily: "NunitoSans-ExtraLight",
                fontSize: 24
              }}
            >
              {title || "Something"}
            </HeadingThree>
          ) : (
            <HeadingThree style={{ textAlign: "center" }}>
              {title || "Something"}
            </HeadingThree>
          )}
        </Col>
        <Icon.Button
          name="gear"
          size={20}
          color="#2a2a2a"
          style={styles.iconStyle}
          onPress={() => navigation.navigate("Settings")}
        />
      </Flex>
    </Container>
  );
};
