import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import FadeableView from '../../components/common/FadeableView';

import { Color, FontStyle, Padding } from '../../theme';

const ANIMATION_DURATION = 1500;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: Padding.MEDIUM * 2,
  },
  titleText: {
    ...FontStyle.TITLE_HUGE,
    color: Color.BLACK(80),
    textAlign: 'center',
  },
});

const Startup = ({ navigation }) => {
  const { t } = useTranslation();

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[styles.flex, styles.center]}>
      <FadeableView visible duration={ANIMATION_DURATION} style={styles.container}>
        <Text style={styles.titleText}>{t('welcome:title')}</Text>
      </FadeableView>
    </View>
  );
};

export default Startup;
