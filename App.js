import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider, initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Navigator from './src/Navigator';
import Loader from './src/components/Loader';
import { persistor, store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
          <NavigationContainer>
            <Navigator />
            <Loader />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
