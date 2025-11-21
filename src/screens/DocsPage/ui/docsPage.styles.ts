import styled from "styled-components";

export const SDocsPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
`;

export const STitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  flex: 1;
`;

export const SZipSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const SDocsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const SButtonSection = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;

  button {
    width: 100%;
  }
`;

export const SMidSection = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.h2}
  color: ${({ theme }) => theme.colors.gray.g80};
`;

export const SDocsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const SPageTitle = styled.div`
  ${({ theme }) => theme.font.title}
`;

export const SSubtitle = styled.div`
  ${({ theme }) => theme.font.h2}
  color: ${({ theme }) => theme.colors.gray.g80};
`;
