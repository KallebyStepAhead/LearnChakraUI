import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem, Heading, Input, Select, SimpleGrid, Text, useBreakpointValue, VStack,
} from '@chakra-ui/react';

export function Details() {
  const colSpanValue = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
    >
      <VStack spacing={2} alignItems="flex-start">
        <Heading>Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>

      <SimpleGrid columns={2} spacing={2} w="full">
        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Kalleby" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Santos" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Rua Zé da pintaguinha N 10, Vale dos Contentes 01234-50" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Lisboa" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpanValue}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="pt">Portugal</option>
              <option value="br">Brazil</option>
              <option value="usa">United States of America</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>

        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Place order
          </Button>
        </GridItem>

      </SimpleGrid>
    </VStack>
  );
}
