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
  ...props
}) => {
  return (
    <SDocUpload {...props}>
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
