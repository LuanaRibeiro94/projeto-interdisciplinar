import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './src/screens/routes';
import theme from './src/configs/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
