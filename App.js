import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './src/screens/routes';
import theme from './src/configs/theme';
import './src/configs/firebase';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
