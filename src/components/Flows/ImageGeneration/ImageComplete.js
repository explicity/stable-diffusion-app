import React, { useCallback, useState, memo } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import SuperEllipseMask from 'react-native-super-ellipse-mask';
import * as Animatable from 'react-native-animatable';
import { useTranslation } from 'react-i18next';
import lowerFirst from 'lodash/lowerFirst';

import RichHeader from '../../common/RichHeader';
import RoundedButton from '../../common/buttons/RoundedButton';

import { SLIDER_BUTTON_WIDTH } from '../constants';
import { Flows } from '../../common/steps/constants';
import { LOGO_IMAGE_SIZE } from '../../../services/constants';
import { Padding, ShadowStyles } from '../../../theme';
import { isIOS } from '../../../services/envHelper';

const ANIMATION_DURATION = 500;

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
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: LOGO_IMAGE_SIZE,
    height: LOGO_IMAGE_SIZE,
  },
  footerContainer: {
    marginTop: Padding.MEDIUM * 4,
  },
  footerButtonContainer: {
    marginBottom: Padding.SMALL * 2,
    width: SLIDER_BUTTON_WIDTH,
  },
});

const ImageComplete = ({ active, imageUrl, onClose, onReset }) => {
  const { t } = useTranslation('flows');

  const [imageOpacity] = useState(new Animated.Value(0));
  const [footerOpacity] = useState(new Animated.Value(0));

  const onImageLoad = () =>
    Animated.sequence([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(footerOpacity, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();

  const renderHeader = useCallback(
    () =>
      active ? (
        <Animatable.View animation='fadeIn' useNativeDriver>
          <RichHeader
            title={t(`${lowerFirst(Flows.IMAGE_GENERATION)}.complete.title`)}
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
              style={styles.image}
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
            title={t(`${lowerFirst(Flows.IMAGE_GENERATION)}.complete.addNewLogo`)}
            containerStyle={styles.footerButtonContainer}
            onPress={onReset}
          />
          <RoundedButton
            title={t('close')}
            containerStyle={styles.footerButtonContainer}
            onPress={onClose}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default memo(ImageComplete);
