import styled, { css } from "styled-components";

export const SDocReview = styled.div.attrs<{ $isActive?: boolean }>({})`
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  gap: 24px;
  padding: 12px 14px;
  border-radius: 10px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray.d2};
  cursor: pointer;
  transition: background-color 0.2s ease;
  overflow: hidden;
  box-sizing: content-box;

  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          border: 2px solid ${theme.colors.blue};
        `
      : css`
          margin: 1px;
        `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.f4};
  }
`;
