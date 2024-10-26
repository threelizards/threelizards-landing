import { LayoutBaseProps } from '@/types/utils';

export interface IColorPalette {
  DEFAULT: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IColorPaletteSet {
  primary: IColorPalette;
  secondary: IColorPalette;
  secondary2: IColorPalette;
  gray: IColorPalette;
}

export type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> &
  LayoutBaseProps;

export interface ThemeProviderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
