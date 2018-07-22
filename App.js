import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./src/pages/DashboardScreen";
import SettingsScreen from "./src/pages/SettingsScreen";
import StyleGuideModal from "./src/modals/StyleGuideModal";
import WelcomeModal from "./src/modals/WelcomeModal";

const MainStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Dashboard",
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: "gainsboro",
        textAlign: "center"
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Welcome: {
      screen: WelcomeModal
    },
    StyleGuide: {
      screen: StyleGuideModal
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
