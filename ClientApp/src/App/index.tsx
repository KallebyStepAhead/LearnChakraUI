import React from 'react';
import { Container } from '@chakra-ui/react';
import { Checkout } from '../Checkout';

export function App() {
  return (
    <Container maxW="container.xl" p={0}>
      <Checkout />
    </Container>
  );
}
