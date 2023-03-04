import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const PULSE_ANIMATION = require('../../../theme/assets/animations/laguna-pulse.json');

const ANIMATION_OFFSET = 100;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  animationContainer: {
    width: SCREEN_WIDTH + ANIMATION_OFFSET,
    height: SCREEN_HEIGHT,
    left: -ANIMATION_OFFSET / 2,
    opacity: 0.3,
  },
});

const Uploading = () => {
  return (
    <View style={[styles.absolute, styles.animationContainer]}>
      <LottieView autoPlay loop source={PULSE_ANIMATION} />
    </View>
  );
};

export default Uploading;
