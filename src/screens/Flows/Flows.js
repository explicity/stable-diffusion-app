import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import ImageGenerationContainer from '../../components/Flows/ImageGeneration/ImageGenerationContainer';

import { Flows } from '../../components/common/steps/constants';
import {
  RichIconSize,
  RichHeaderSize,
} from '../../components/common/RichHeader';
import { Padding, ShadowStyles, TOP_BAR_HEIGHT } from '../../theme';

const FlowComponents = {
  [Flows.IMAGE_GENERATION]: ImageGenerationContainer,
};

const CLOSE_BUTTON_OFFSET = 100;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: TOP_BAR_HEIGHT + (Padding.MEDIUM + Padding.TINY),
    right: Padding.MEDIUM * 2,
    zIndex: 10,
  },
  shadows: {
    ...ShadowStyles.SHADOW_12,
  },
  icon: {
    width: RichIconSize[RichHeaderSize.SMALL],
    height: RichIconSize[RichHeaderSize.SMALL],
  },
});

const FlowScreen = ({ route, navigation }) => {
  const [scrollY] = useState(new Animated.Value(0));

  const { id, ...props } = route.params;

  const goBack = () => navigation.goBack();

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  const shadowStyles = {
    shadowOpacity: scrollY.interpolate({
      inputRange: [0, CLOSE_BUTTON_OFFSET],
      outputRange: [0, 0.3],
      extrapolate: 'clamp',
    }),
  };

  const renderContent = () => {
    const ContentComponent = FlowComponents[id];

    return (
      <ContentComponent
        id={id}
        navigation={navigation}
        onScroll={onScroll}
        {...props}
      />
    );
  };

  return (
    <View style={styles.flex}>
      <TouchableOpacity
        onPress={goBack}
        style={[styles.buttonContainer, styles.shadows, shadowStyles]}
      >
        {/* <Image source={AppButtons.CLOSE.medium.white} style={styles.icon} /> */}
      </TouchableOpacity>
      {renderContent()}
    </View>
  );
};

FlowScreen.navigationOptions = ({ route }) => ({ gestureEnabled: false });

FlowScreen.propTypes = {
  // navigation: PropTypes.shape(navigationShape).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOf(Object.values(Flows)).isRequired,
    }),
  }).isRequired,
};

export default FlowScreen;
