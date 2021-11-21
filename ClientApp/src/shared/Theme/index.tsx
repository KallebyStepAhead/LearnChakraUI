import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';
import './styles.css';

export const ThemeProvider: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
);
