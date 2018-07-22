import React, { PureComponent } from "react";
import {
  Text,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  View
} from "react-native";
import PropTypes from "prop-types";
import { Container } from "../components/Wrappers";
import { HeadingOne, HeadingTwo, HeadingThree } from "../components/Typography";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "../../node_modules/styled-components";

class StyleGuideModal extends PureComponent {
  static navigationOptions = {
    title: "Style Guide"
  };
  render() {
    return (
      <ScrollView>
        <Container>
          <HeadingOne>Heading One</HeadingOne>
          <HeadingTwo>Heading Two</HeadingTwo>
          <HeadingThree>Heading Three</HeadingThree>
          <HeadingTwo>Text</HeadingTwo>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
            enim, condimentum a lorem at, venenatis cursus ex. Curabitur ac
            maximus lacus, vel tempor tortor. Sed egestas nunc interdum ipsum
            dignissim accumsan. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </Text>
          <HeadingTwo>Forms</HeadingTwo>
          <FormInput placeholder="Email" />
          <HeadingTwo>Flat List</HeadingTwo>
          <HeadingTwo>Section List</HeadingTwo>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
            enim, condimentum a lorem at, venenatis cursus ex. Curabitur ac
            maximus lacus, vel tempor tortor. Sed egestas nunc interdum ipsum
            dignissim accumsan. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </Text>
          <HeadingTwo>Colors</HeadingTwo>
          <Text>Jimmy's Colors</Text>
          <View style={{ backgroundColor: "red", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "blue", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "green", width: 50, height: 50 }} />
          <View style={{ height: 60 }} />
        </Container>
      </ScrollView>
    );
  }
}

StyleGuideModal.propTypes = {};

export default StyleGuideModal;
