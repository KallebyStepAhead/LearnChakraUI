import React from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Details } from './Details';
import { Cart } from './Cart';

export function Checkout() {
  const hValue = useBreakpointValue({ base: 'auto', md: '100vh' });
  const pValue = useBreakpointValue({ base: 0, md: 20 });

  return (
    <Flex h={hValue} py={pValue} direction={{ base: 'column-reverse', md: 'row' }}>
      <Details />
      <Cart />
    </Flex>
  );
}
