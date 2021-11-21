import { theme as base } from '@chakra-ui/react';

export type ThemeInput = Partial<typeof base.components.Input>

export const Input: ThemeInput = {
  variants: {
    ...base.components.Input.variants,
    filled: () => ({
      field: {
        _focus: {
          borderColor: 'primary.500',
        },
      },
    }),
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};
