import styled from "styled-components";

export const SFilePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray.d9};
  border: 1px dashed ${({ theme }) => theme.colors.gray.g9};
  flex: 1;
  border-radius: 10px;
  justify-content: center;
`;

export const SPreviewIcon = styled.div`
  color: ${({ theme }) => theme.colors.gray.g9};
`;

export const SText = styled.div`
  text-align: center;
  ${({ theme }) => theme.font.p2}
  color: ${({ theme }) => theme.colors.gray.g80};
`;
