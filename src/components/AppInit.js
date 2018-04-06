import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from "react-native";
import colors from "../utils/Colors";
import {Platform, StyleSheet} from "react-native";
import {readJson} from "../utils/DbUtils";
import {authData} from "../utils/Const";
import {sha256, sha256x2} from "../utils/CryptoUtils";
import {verifyUserData} from "../utils/UserDataUtils";


const busyIndicatorSize = Platform.select({
  ios: 'large',
  android: 50
});
export default class AppInit extends Component<Props> {
  constructor(props) {
    super(props);
    this.loadUserData()
  }

  async loadUserData() {
    console.log("loadUserData");
    const data = await readJson(authData);
    console.log(data);
    const dataIsValid = verifyUserData(data);
    this.props.navigation.navigate(dataIsValid ? 'Auth' : 'Login');
  }


  render() {
    return (
      <View style={s.container}>
        <StatusBar barStyle={"light-content"}/>
        <ActivityIndicator size={busyIndicatorSize} color={colors.lightBlue}/>
      </View>
    );
  }


}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.barkBlue,
  }
});