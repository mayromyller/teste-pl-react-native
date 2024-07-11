import styled, { css } from 'styled-components/native';

type SizeTextProps = {
  size?: 'medium' | 'large';
};

export const Text = styled.Text<SizeTextProps>`
  ${({ theme, size }) => css`
    font-size: ${size === 'medium' ? '18px' : '24px'};
    color: ${theme.colors.text};
    font-weight: ${size === 'medium' ? '600' : '700'};
  `}
`;

export const BeforeText = styled.View`
  ${({ theme }) => css`
    width: 4px;
    height: 20px;
    background-color: ${theme.colors.neutral};
    border-radius: 4px;
  `}
`;

export const HStack = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
