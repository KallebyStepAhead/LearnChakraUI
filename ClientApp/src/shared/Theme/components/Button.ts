import { theme as base } from '@chakra-ui/react';
import { mode, SystemStyleFunction } from '@chakra-ui/theme-tools';

export type ThemeButtonVariants = Partial<typeof base.components.Button.variants> & {
  primary: SystemStyleFunction,
}

export type ThemeButton = Partial<typeof base.components.Button> & {
  variants: ThemeButtonVariants
}

export const Button: ThemeButton = {
  variants: {
    ...base.components.Button.variants,
    primary: (props) => ({
      rounded: 'none',
      color: mode('white', 'gray.800')(props),
      backgroundColor: mode('primary.500', 'primary.200')(props),
      _focus: {
        ring: 2,
        ringColor: 'primary.500',
      },
      _hover: {
        backgroundColor: mode('primary.600', 'primary.300')(props),
      },
      _active: {
        backgroundColor: mode('primary.700', 'primary.400')(props),
      },
    }),
  },
};
