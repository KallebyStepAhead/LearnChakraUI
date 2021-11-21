import { theme as base } from '@chakra-ui/react';
import { ThemeProps } from '../theme';

export type ThemeFonts = Partial<ThemeProps['fonts']>

export const fonts: ThemeFonts = {
  heading: `Montserrat, ${base.fonts.heading}`,
  body: `inter, ${base.fonts.body}`,
};
