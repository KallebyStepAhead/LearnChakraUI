import React from 'react';
import { VStack } from '@chakra-ui/react';

export function Cart() {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      backgroundColor={['gray.50', 'gray.700']}
    />
  );
}
