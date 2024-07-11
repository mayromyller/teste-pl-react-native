import styled, { css } from 'styled-components/native';

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 15px;
    font-weight: 600;
  `}
`;
