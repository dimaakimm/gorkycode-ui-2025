import React, { FC, useState } from "react";
import type { UploadProps } from "antd";

import { Delete, Upload } from "@/shared/assets";
import { DOCFile, EmptyUploadFile, Exit, PdfFile } from "@/shared/assets";

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
  accept = ".pdf,.docx",
  ...props
}) => {
  const [displayTitle, setDisplayTitle] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [file, setFile] = useState(FileIcon);
  const [file2, setFile2] = useState(Upload);

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file?.name) {
      setDisplayTitle(info.file.name);
      setDescriptionState("Загружено");
    }

    const lowerName = info.file.name.toLowerCase();
    if (lowerName.endsWith(".pdf")) {
      setFile(PdfFile);
    } else if (lowerName.endsWith(".doc") || lowerName.endsWith(".docx")) {
      setFile(DOCFile);
    }

    setFile2(Delete);
    props.onChange?.(info);
  };

  return (
    <SDocUpload
      maxCount={maxCount}
      accept={accept}
      showUploadList={false}
      onChange={handleChange}
      {...props}
    >
      <SContent>
        <SLeftIcon>{file}</SLeftIcon>
        <STextSection>
          <STitle>{displayTitle}</STitle>
          <SDescription>{descriptionState}</SDescription>
        </STextSection>
        <SRightIcon>{file2}</SRightIcon>
      </SContent>
    </SDocUpload>
  );
};
