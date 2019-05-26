import React from 'react';
import AppContainer from './screens/routes'
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './configs/theme'

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    )
  }
}


