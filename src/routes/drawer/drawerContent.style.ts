import styled, { css } from 'styled-components/native';

export const Box = styled.View`
  ${({ theme }) => css`
    padding: 12px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 30px;
  `}
`;

export const UserImage = styled.Image`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    border-radius: 24px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: 500;
    color: ${theme.colors.white};
  `}
`;

export const HelText = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.drawerContent};
  `}
`;
