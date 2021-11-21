import {
  extendTheme, withDefaultColorScheme, withDefaultVariant, Theme,
} from '@chakra-ui/react';

import { config } from './foundations/config';
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { Input } from './components/Input';
import { Select } from './components/Select';
import { Checkbox } from './components/Checkbox';

export type ThemeProps = Partial<Theme>

export const theme: ThemeProps = extendTheme({
  config,
  fonts,
  colors,
  components: {
    Input,
    Select,
    Checkbox,
  },
},
withDefaultColorScheme({
  colorScheme: 'primary',
  components: ['Checkbox'],
}),
withDefaultVariant({
  variant: 'filled',
  components: ['Input', 'Select'],
}));
