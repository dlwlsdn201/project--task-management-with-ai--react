import { ButtonStyles } from '@components/common/Buttons/Button';

/* eslint-disable import/prefer-default-export */
export const translateToStyleClassnames = ({
  disabled,
  btnColor,
  textColor,
}: ButtonStyles): string => {
  // 버튼 스타일
  // 버튼 비활성화 여부
  const isDisabledValue: string = `${disabled ? 'disabled' : 'enable'}`;
  // 버튼 색상
  const btnBgColorValue: string = btnColor ? `bg-[${btnColor}]` : 'bg-[none]';
  // 텍스트 색상
  const textColorValue: string = textColor
    ? `text-[${textColor}]`
    : 'text-[none]';

  return `btn ${isDisabledValue} ${btnBgColorValue} ${textColorValue}`;
};
