import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, {createContext, useMemo} from 'react';
import createPersistedState from 'use-persisted-state';
import {commonConfig, paletteConfig} from './default';
const useMode = createPersistedState('mode');

export const ThemeContext = createContext({toggleColorMode: () => {}});

const ThemeProvider = ({children}) => {
  const [mode, setMode] = useMode('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [setMode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...paletteConfig[mode],
        },
        ...commonConfig,
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
