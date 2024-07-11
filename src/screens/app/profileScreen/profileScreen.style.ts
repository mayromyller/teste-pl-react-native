import styled, { css } from 'styled-components/native';

export const Box = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;

export const UserImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 48px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: 500;
    color: ${theme.colors.text};
  `}
`;

export const HelText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #888c97;
`;

export const EditButton = styled.Pressable`
  ${({ theme }) => css`
    color: ${theme.colors.drawerActiveTintColor};
    background-color: ${theme.colors.cardBackground};
    border-radius: 100px;
    padding: 8px 10px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-direction: row;
  `}
`;
