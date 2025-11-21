import styled from "styled-components";

export const SDocReview = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  gap: 24px;
  padding: 12px 14px;
  border-radius: 10px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray.d2};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.f4};
  }
`;
