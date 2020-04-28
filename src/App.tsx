import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';

import './App.css';
import AboutContainer from './containers/AboutContainer';
import ContentContainer from './containers/ContentContainer';
import FooterContainer from './containers/FooterContainer';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Noto Sans JP"',
      'sans-serif',
    ].join(','),
  },
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme} >
      <React.Fragment>
        <AboutContainer />
        <ContentContainer />
        <FooterContainer />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
