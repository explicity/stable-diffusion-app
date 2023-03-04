import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TopHeader from '../../components/common/TopHeader';
import RoundedButton, {
  RoundedButtonSizes,
} from '../../components/common/buttons/RoundedButton';

import { Color, Padding } from '../../theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: Color.LIGHT_SAND,
    paddingVertical: Padding.BIG,
  },
  center: {
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  bottomContainer: {
    bottom: Padding.BIG,
  },
});

const Home = ({ navigation }) => {
  const { t } = useTranslation('example');
  // const dispatch = useDispatch();

  return (
    <View style={[styles.flex, styles.container]}>
      <TopHeader title='Welcome!' />

      <View style={[styles.absolute, styles.center, styles.bottomContainer]}>
        <RoundedButton
          title='Generate new image!'
          onPress={() => navigation.push('Flows')}
          size={RoundedButtonSizes.LARGE}
        />
      </View>
    </View>
  );
};

export default Home;
