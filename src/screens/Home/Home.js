import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TopHeader from '../../components/common/TopHeader';
import RoundedButton from '../../components/common/buttons/RoundedButton';

import { useTheme, useAIPrompt } from '../../hooks';
// import { changeTheme } from '../../store/theme';

const Home = ({ navigation }) => {
  const { t } = useTranslation('example');
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();

  // const onChangeTheme = ({ theme, darkMode }) => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };

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
