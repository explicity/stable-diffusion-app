import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TopHeader from '../../components/common/TopHeader';
import RoundedButton from '../../components/common/buttons/RoundedButton';

const Home = ({ navigation }) => {
  const { t } = useTranslation('example');
  // const dispatch = useDispatch();


  return (
    <View style={{ flex: 1 }}>
      <TopHeader title='Welcome!' />

      <RoundedButton
        title='Generate new image!'
        onPress={() => navigation.push('Flows')}
      />
    </View>
  );
};

export default Home;
