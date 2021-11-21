import React from 'react';
import { Flex } from '@chakra-ui/react';

import { Details } from './Details';
import { Cart } from './Cart';

export function Checkout() {
  return (
    <Flex h="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  );
}
