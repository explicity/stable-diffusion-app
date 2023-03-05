import React, { memo } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import SuperEllipseMask from 'react-native-super-ellipse-mask';

import { isIOS } from '../../services/envHelper';
import { Padding, ShadowStyles } from '../../theme';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const IMAGE_SIZE = SCREEN_WIDTH / 2 - 2.5 * Padding.SMALL;

const styles = StyleSheet.create({
  container: {
    ...ShadowStyles.SHADOW_4,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

const ImagesListingItem = ({ containerStyle, imageUrl }) => {
  const ViewComponent = isIOS ? SuperEllipseMask : View;

  if (!imageUrl) return null;

  return (
    <View style={[styles.container, containerStyle]}>
      <ViewComponent
        style={styles.imageContainer}
        {...(isIOS && { radius: styles.imageContainer.radius })}
      >
        <FastImage source={{ uri: imageUrl }} style={styles.image} />
      </ViewComponent>
    </View>
  );
};

export default memo(ImagesListingItem);
