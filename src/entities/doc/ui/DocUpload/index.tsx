import React, { FC } from "react";

import { Upload } from "@/shared/assets";

import {
  SDocUpload,
  STextSection,
  STitle,
  SDescription,
  SContent,
  SLeftIcon,
  SRightIcon,
} from "./docUpload.styles";
import { DocUploadProps } from "../../model/docUpload.types";

export const DocUpload: FC<DocUploadProps> = ({
  FileIcon,
  description = "Выберите файл для загрузки",
  title,
  maxCount = 1,
  accept = ".zip,.rar,.7z",
  ...props
}) => {
  return (
    <SDocUpload maxCount={maxCount} showUploadList={false} {...props}>
      <SContent>
        <SLeftIcon>{FileIcon}</SLeftIcon>
        <STextSection>
          <STitle>{title}</STitle>
          <SDescription>{description}</SDescription>
        </STextSection>
        <SRightIcon>
          <Upload />
        </SRightIcon>
      </SContent>
    </SDocUpload>
  );
};
