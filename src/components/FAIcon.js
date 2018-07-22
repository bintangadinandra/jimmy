import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";

const FaIcon = ({ size, name, color, style, debug }) => (
  <View style={style}>
    <Icon size={size} name={name} color={color} />
  </View>
);

export default FaIcon;
