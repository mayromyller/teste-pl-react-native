import styled, { css } from 'styled-components/native';

export const Box = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.cardBackground};
    border-radius: 8px;
    padding: 16px;
  `}
`;
