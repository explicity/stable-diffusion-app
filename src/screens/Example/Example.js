import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useTheme, useAIPrompt } from '../../hooks';
// import { changeTheme } from '../../store/theme';

const Example = () => {
  const { t } = useTranslation('example');
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();

  const { generateImage } = useAIPrompt();

  useEffect(() => {
    generateImage('something funny');
    console.log('DFJGDS;OGJDSIF')
  }, [])

  // const onChangeTheme = ({ theme, darkMode }) => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };

  return <View />;
};

export default Example;
