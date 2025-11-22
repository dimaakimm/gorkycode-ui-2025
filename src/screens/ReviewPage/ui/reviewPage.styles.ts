import styled from "styled-components";

export const SReviewPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
`;

export const SPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const STitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const STitle = styled.div`
  ${({ theme }) => theme.font.title}
`;

export const SSubtitle = styled.div`
  ${({ theme }) => theme.font.h2}
  color: ${({ theme }) => theme.colors.gray.g80};
`;

export const SDocsContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  column-gap: 16px;
  row-gap: 10px;
`;

export const SMainBlockSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SErrorBlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const SButtonsSection = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;

  button {
    width: 100%;
  }
`;

export const SMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
