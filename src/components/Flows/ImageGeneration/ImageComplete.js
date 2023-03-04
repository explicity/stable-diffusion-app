import React, { useCallback, useState } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import SuperEllipseMask from 'react-native-super-ellipse-mask';
import * as Animatable from 'react-native-animatable';

import RichHeader from '../../common/RichHeader';
import RoundedButton, {
  ButtonColors,
} from '../../common/buttons/RoundedButton';

import { Padding, ShadowStyles } from '../../../theme';
import { isIOS } from '../../../services/envHelper';
import { SLIDER_BUTTON_WIDTH } from '../constants';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  richHeaderContainer: {
    paddingBottom: Padding.MEDIUM * 3 - Padding.TINY,
  },
  shadows: {
    ...ShadowStyles.SHADOW_12,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  footerContainer: {
    marginTop: Padding.MEDIUM * 4,
  },
  footerButtonContainer: {
    marginBottom: Padding.SMALL * 2,
  },
});

const ImageComplete = ({ active, imageUrl, onClose, onReset }) => {
  const [imageOpacity] = useState(new Animated.Value(0));
  const [footerOpacity] = useState(new Animated.Value(0));

  const onImageLoad = () =>
    Animated.sequence([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(footerOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

  const renderHeader = useCallback(
    () =>
      active ? (
        <Animatable.View animation='fadeIn' useNativeDriver>
          <RichHeader
            title='A new website logo was generated!'
            doneAnimation
            containerStyle={styles.richHeaderContainer}
            screen
          />
        </Animatable.View>
      ) : null,
    [active]
  );

  const ViewComponent = isIOS ? SuperEllipseMask : View;

  return (
    <View style={styles.flex}>
      {renderHeader()}
      <View style={styles.center}>
        <Animated.View style={[styles.shadows, { opacity: imageOpacity }]}>
          <ViewComponent
            style={styles.imageContainer}
            {...(isIOS && { borderRadius: styles.imageContainer.borderRadius })}
          >
            <FastImage
              source={{ uri: imageUrl }}
              style={{ width: 300, height: 300 }}
              onLoad={onImageLoad}
            />
          </ViewComponent>
        </Animated.View>

        <Animated.View
          style={[
            styles.footerContainer,
            styles.center,
            { opacity: footerOpacity },
          ]}
        >
          <RoundedButton
            title='Add new logo'
            containerStyle={styles.footerButtonContainer}
            onPress={onReset}
          />
          <RoundedButton
            title='Close'
            containerStyle={styles.footerButtonContainer}
            onPress={onClose}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default ImageComplete;
