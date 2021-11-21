import React from 'react';
import {
  AspectRatio,
  Button, Divider, Heading, HStack, Image, Text, VStack,
} from '@chakra-ui/react';

export function Cart() {
  const productImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F94%2F21%2F2a%2F94212a08376bb8731c373aa114953df4.png&f=1&nofb=1';
  const price = 65;
  const shippingPrice = 5;
  const taxes = price * 0.12;
  const total = price + shippingPrice + taxes;

  const toEuro = (value: number) => new Intl.NumberFormat('pt-PT', {
    currency: 'EUR',
    style: 'currency',
  }).format(value);

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      borderRadius={4}
      backgroundColor={['gray.50', 'gray.700']}
    >
      <VStack spacing={2} alignItems="flex-start">
        <Heading>Your Cart</Heading>
        <Text>
          If the price is too hard to your eyes
          {' '}
          <Button variant="link" colorScheme="black">
            Try the dark theme
          </Button>
        </Text>
      </VStack>

      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio
          w={24}
          ratio={1}
          borderRadius={4}
          backgroundColor="gray.500"
        >
          <Image src={productImg} alt="Product image" />
        </AspectRatio>

        <HStack justifyContent="space-between" w="full" alignItems="center">
          <VStack alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text color="gray.500">PNYBD123982VJAK</Text>
          </VStack>

          <Heading size="sm">{toEuro(price)}
          </Heading>
        </HStack>
      </HStack>

      <VStack w="full">
        <HStack alignItems="center" justifyContent="space-between" w="full">
          <Text color="gray.400">Subtotal</Text>
          <Heading size="sm">{toEuro(price)}</Heading>
        </HStack>

        <HStack alignItems="center" justifyContent="space-between" w="full">
          <Text color="gray.400">Shipping</Text>
          <Heading size="sm">{toEuro(shippingPrice)}</Heading>
        </HStack>

        <HStack alignItems="center" justifyContent="space-between" w="full">
          <Text color="gray.400">Taxes (Estimated)</Text>
          <Heading size="sm">{toEuro(taxes)}</Heading>
        </HStack>
      </VStack>

      <Divider />

      <HStack alignItems="center" justifyContent="space-between" w="full">
        <Text color="gray.400">Total</Text>
        <Heading size="lg">{toEuro(total)}</Heading>
      </HStack>

    </VStack>
  );
}
