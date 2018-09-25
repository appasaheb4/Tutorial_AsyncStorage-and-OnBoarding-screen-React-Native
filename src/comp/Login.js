import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  Dimensions,
  PixelRatio
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Title,
  Thumbnail,
  Left,
  Button,
  Right
} from "native-base";
import Swiper from "react-native-swiper";

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>Login</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  }
});
