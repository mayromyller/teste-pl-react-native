import styled, { css } from 'styled-components/native';

type OptionsProps = {
  isActive?: boolean;
};

export const Box = styled.View`
  ${({ theme }) => css`
    background-color: rgba(242, 242, 242, 0.1);
    border-radius: 40px;
    height: 40px;
    flex-direction: row;
    gap: 4px;
    padding: 4px;
    align-items: center;
  `}
`;

export const Option = styled.Pressable<OptionsProps>`
  ${({ theme, isActive }) => css`
    background-color: ${isActive ? theme.colors.cardBackground : 'transparent'};
    border-radius: 32px;
    flex-direction: row;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `}
`;

export const Text = styled.Text<OptionsProps>`
  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.text : theme.colors.white};
    font-weight: 600;
  `}
`;
