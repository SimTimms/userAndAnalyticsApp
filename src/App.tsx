//Third Party Imports
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client';
//Local Imports
import { theme } from 'theme';
import { apolloClient } from 'config';
import { Router } from 'Router';
import { axiosCheckConnection } from 'helpers';
import { Typography } from '@mui/material';

export const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    axiosCheckConnection().then((res) => setIsConnected(res));
  }, []);

  //Check if the API connection is working
  if (!isConnected) {
    return (
      <Typography>{`Not Connected - You are trying to connect to ${process.env.REACT_APP_CONNECTION}`}</Typography>
    );
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
};
