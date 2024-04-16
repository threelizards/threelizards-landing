export interface LayoutBaseProps {
  children: React.ReactNode;
}

export interface NextImageImport {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
}
