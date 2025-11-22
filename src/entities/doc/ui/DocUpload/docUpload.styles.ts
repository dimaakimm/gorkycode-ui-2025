import styled from "styled-components";

import { Upload } from "@/shared/components";

export const SDocUpload = styled(Upload)`
  &.ant-upload-wrapper .ant-upload-select {
    width: 100%;
  }
`;

export const SContent = styled.div`
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

export const STextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const STitle = styled.div`
  ${({ theme }) => theme.font.h3}
  color:${({ theme }) => theme.colors.black};
`;

export const SDescription = styled.div`
  ${({ theme }) => theme.font.p3}
  color:${({ theme }) => theme.colors.gray.d9};
`;

export const SLeftIcon = styled.div`
  color: ${({ theme }) => theme.colors.gray.d2};
`;

export const SRightIcon = styled.div`
  color: ${({ theme }) => theme.colors.gray.d2};
`;
