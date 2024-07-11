import styled, { css } from 'styled-components/native';

export const Box = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.inputBackground};
    border-radius: 8px;

    height: 45px;
    padding: 12px;

    flex-grow: 1;
    flex-shrink: 1;
    justify-content: center;
  `}
`;
