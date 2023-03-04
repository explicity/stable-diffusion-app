import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { FontStyle, Color, Padding } from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Padding.MEDIUM * 2,
  },
  titleText: {
    ...FontStyle.TITLE_HUGE,
    color: Color.BLACK(),
    backgroundColor: Color.TRANSPARENT,
    marginBottom: Padding.SMALL,
  },
});

const TopHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.titleText}
        allowFontScaling={false}
        numberOfLines={1}
        ellipsizeMode='tail'
      >
        {title}
      </Text>
    </View>
  );
};

export default TopHeader;
