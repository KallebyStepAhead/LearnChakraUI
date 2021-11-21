import { theme as base } from '@chakra-ui/react';

export type ThemeCheckbox = Partial<typeof base.components.Checkbox>

export const Checkbox: ThemeCheckbox = {
  baseStyle: () => ({
    control: {
      borderRadius: 'none',
      _focus: {
        ring: 2,
        ringColor: 'primary.500',
      },
    },
  }),
};
