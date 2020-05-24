import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// eslint-disable-next-line import/no-unresolved
import { enableScreens } from 'react-native-screens';
import AppContainer from './src/screens/routes';
import theme from './src/configs/theme';
import './src/configs/firebase';

enableScreens();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
