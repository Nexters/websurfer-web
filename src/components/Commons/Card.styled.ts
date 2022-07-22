import { css, useTheme } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { CardProps } from './Card.styled.type';

export const Wrapper = styled.div<CardProps>((props) => {
  const theme = useTheme();

  return [
    css`
      width: ${props.width};
      height: ${props.height ? props.height : ''};
      margin: ${props.margin};
      padding: ${props.padding ? props.padding : '22px'};
      background-color: ${theme.color.white};
      border-radius: ${props.borderRadius};
      box-shadow: 0px 0px 20px 0px #001c511a;
    `,
  ];
});

export const Title = styled.div(() => {
  const theme = useTheme();
  return [
    tw`
      flex justify-between
      `,
    css`
      color: ${theme.color['gray-07']};
      font-size: ${theme.fontSize.l};
      line-height: ${theme.lineHeight.xl};
      font-weight: ${theme.fontWeight.bold};
      margin-bottom: 24px;
    `,
  ];
});