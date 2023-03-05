import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
});

const Step = ({ item }) => <View style={styles.container}>{item}</View>;

Step.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  active: PropTypes.bool.isRequired,
  item: PropTypes.node.isRequired,
};

const areEqual = (prevProps, nextProps) =>
  prevProps.active === nextProps.active;

export default memo(Step, areEqual);
