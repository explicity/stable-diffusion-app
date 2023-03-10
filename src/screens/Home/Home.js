import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TopHeader from '../../components/common/TopHeader';
import RoundedButton, {
  RoundedButtonSize,
} from '../../components/common/buttons/RoundedButton';
import ImagesListing from '../../components/Home/ImagesListing';

import { Color, Padding } from '../../theme';
import { Flows } from '../../components/common/steps/constants';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: Color.LIGHT_SAND,
  },
  contentContainer: {
    paddingTop: Padding.BIG * 1.5,
    paddingBottom: Padding.BIG * 2,
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
  const { t } = useTranslation('home');
  const images = useSelector((state) => state.images);

  const renderHeader = () => <TopHeader title={t('title')} />;

  return (
    <View style={[styles.flex, styles.container]}>
      <ImagesListing
        data={images}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={[styles.absolute, styles.center, styles.bottomContainer]}>
        <RoundedButton
          title={t('addNewImage')}
          onPress={() =>
            navigation.push('Flows', { id: Flows.IMAGE_GENERATION })
          }
          size={RoundedButtonSize.LARGE}
        />
      </View>
    </View>
  );
};

export default Home;
