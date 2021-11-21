import { ThemeProps } from '../theme';

export type ColorScheme = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type ThemeColors = Partial<ThemeProps['colors']> & {
  [key: string]: ColorScheme
}

export const colors: ThemeColors = {
  primary: {
    50: '#F5FEE5',
    100: '#E1FBB2',
    200: '#CDF781',
    300: '#B8EE56',
    400: '#A2E032',
    500: '#8AC919',
    600: '#71AB09',
    700: '#578602',
    800: '#3C5E00',
    900: '#203300',
  },
};
