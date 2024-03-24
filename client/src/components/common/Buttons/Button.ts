import { ReactNode } from 'react';

export type BtnStyle = 'default' | 'primary' | 'secondary' | 'ghost' | 'link';

export type BtnType = 'submit' | 'button' | 'reset';

export interface ButtonProps {
  btnStyle: BtnStyle;
  btnType: BtnType;
  label: string;
  prefix?: ReactNode;
  customStyle?: string;
}
export interface ButtonStyles {
  disabled?: boolean;
  btnColor?: string;
  textColor?: string;
}
