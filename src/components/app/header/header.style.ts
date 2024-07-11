import styled, { css } from 'styled-components/native';

export const Box = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.cardBackground};
    height: 72px;
    padding: 12px 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;
