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
  PixelRatio,
  AsyncStorage
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

export default class OnBording extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login = async () => {
    try {
      await AsyncStorage.setItem("@onBoardingPageLoad:key", "login");
      this.props.navigation.navigate("Login");
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Body>
          <View style={styles.viewTitle}>
            <Text style={styles.titleName}>Demo Application</Text>
          </View>
          <View style={styles.viewSlider}>
            <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
              <View style={styles.slide1}>
                <Image
                  style={styles.sliderIcon}
                  source={require("../assets/images/1.jpeg")}
                />
              </View>
              <View style={styles.slide2}>
                <Image
                  style={styles.sliderIcon}
                  source={require("../assets/images/2.jpeg")}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  style={styles.sliderIcon}
                  source={require("../assets/images/3.jpeg")}
                />
              </View>
            </Swiper>
          </View>
          <Button style={styles.btnSkip} onPress={this.login}>
            <Text
              style={{
                color: "#ffffff",
                marginLeft: Dimensions.get("screen").width / 2 - 70,
                fontWeight: "bold",
                fontSize: 18
              }}
            >
              Skip
            </Text>
          </Button>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  viewTitle: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  titleName: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold"
  },
  viewSlider: {
    flex: 6,
    top: -10
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  viewContinueBtn: {
    flex: 2
  },
  btnSkip: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#000000",
    width: Dimensions.get("screen").width - 50,
    height: 45,
    padding: 30,
    marginLeft: 25,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 10
  }
});
