import {
  extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant,
} from '@chakra-ui/react';

import { config } from './foundations/config';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';

export type ThemeProps = Partial<typeof base>

export const theme: ThemeProps = extendTheme({
  config,
  fonts,
  colors,
},
withDefaultColorScheme({
  colorScheme: 'primary',
  components: ['Checkbox'],
}),
withDefaultVariant({
  variant: 'filled',
  components: ['Input', 'Select'],
}));
