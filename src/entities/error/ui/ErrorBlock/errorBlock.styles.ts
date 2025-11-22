import styled from "styled-components";

export const SErrorBlock = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

export const STitle = styled.div`
  padding: 20px;
  ${({ theme }) => theme.font.h2}
  color: ${({ theme }) => theme.colors.black};
  font-weight: 590;
`;

export const SErrorsSection = styled.div`
  padding: 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex: 1;
`;

export const SError = styled.div`
  padding: 6px;
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const SErrorTitleSection = styled.div`
  gap: 2px;
  display: flex;
`;
