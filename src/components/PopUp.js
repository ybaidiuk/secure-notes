import React, {Component} from 'react';
import {Modal, Platform, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import RoundButton from '../components/RoundButton';
import PropTypes from 'prop-types';
import colors from '../Colors';

export default class PopUp extends Component<Props> {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}
      >
        <TouchableWithoutFeedback onPress={this.props.onRequestClose}>
          <View>
            <View style={s.fillDarkBackGround}/>
            <View style={s.absoluteFill}>
              <View style={this.props.rightTopCorner ? s.rightTopCorner : s.center}>
                {this.props.children}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const s = StyleSheet.create({
  fillDarkBackGround: {
    opacity: 0.8,
    backgroundColor: colors.black,
    height: '100%'
  },
  absoluteFill: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  center: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightTopCorner: {
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: Platform.select({
      ios: 25,
      android: 10
    })
  }
});
