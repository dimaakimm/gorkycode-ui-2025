import styled from "styled-components";

export const SReviewPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
`;

export const STitle = styled.div`
  ${({ theme }) => theme.font.title}
`;

export const SSubtitle = styled.div`
  ${({ theme }) => theme.font.h2}
  color: ${({ theme }) => theme.colors.gray.g80};
`;
