import styled from "styled-components";

export const SDocsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

export const SMainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 5px;
  flex: 1;
`;

export const SUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SMidSection = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.h2}
  color: ${({ theme }) => theme.colors.gray.g80};
`;

export const SPreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const SPageTitle = styled.div`
  ${({ theme }) => theme.font.title}
`;

export const SSubtitle = styled.div`
  ${({ theme }) => theme.font.h2}
  color: ${({ theme }) => theme.colors.gray.g80};
`;
