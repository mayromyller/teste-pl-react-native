import styled, { css } from 'styled-components/native';

type SearchBarProps = {
  isSearchBar?: boolean;
};

export const Box = styled.View<SearchBarProps>`
  ${({ theme, isSearchBar }) => css`
    background-color: ${theme.colors.cardBackground};

    border-radius: 10px;
    border-width: 1px;
    border-color: ${theme.colors.borderMainSearchInput};

    height: 50px;
    padding: ${isSearchBar ? '8px' : '9px 15.5px'};

    flex-grow: 1;
    flex-shrink: 1;
    justify-content: center;
  `}
`;

export const SearchIconWrapper = styled.View`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
  `}
`;
