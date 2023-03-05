import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Configuration, OpenAIApi } from 'openai';
import 'react-native-url-polyfill/auto';

import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';

import './translations';

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigator />
    </PersistGate>
  </Provider>
);

export default App;
