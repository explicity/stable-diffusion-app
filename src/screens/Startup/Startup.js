import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { setDefaultTheme } from '../../store/theme';

const Startup = ({ navigation }) => {
  const { t } = useTranslation();

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );

    await setDefaultTheme({ theme: 'default', darkMode: null });

    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator size={'large'} />
      <Text>{t('welcome:title')}</Text>
    </View>
  );
};

export default Startup;
