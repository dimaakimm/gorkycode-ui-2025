import React, { FC, useEffect, useState } from "react";
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
  docType,
  downloaded,
  enableFetch = true,
  ...props
}) => {
  const [displayTitle, setDisplayTitle] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const [file, setFile] = useState(FileIcon);
  const [file2, setFile2] = useState(Upload);

  const handleChange: UploadProps["onChange"] = async (info) => {
    if (info.file?.name) {
      setDescriptionState(title);
      setDisplayTitle(info.file.name);
    }

    const lowerName = info.file.name.toLowerCase();
    if (lowerName.endsWith(".pdf")) {
      setFile(PdfFile);
    } else if (lowerName.endsWith(".doc") || lowerName.endsWith(".docx")) {
      setFile(DOCFile);
    }

    const sessionId = localStorage.getItem("user_uuid");
    const rawFile = info.file.originFileObj as File;

    const formData = new FormData();
    formData.append("file", rawFile);
    // @ts-ignore
    formData.append("session_id", sessionId);
    formData.append("doc_type", docType || "");

    if (enableFetch) {
      await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });
    }

    setFile2(Delete);
    props.onChange?.(info);
  };

  useEffect(() => {
    if (downloaded) {
      setDescriptionState(displayTitle + " Загружено");

      const titleLower = title.toLowerCase();
      if (titleLower.endsWith(".pdf")) {
        setFile(PdfFile);
      } else if (titleLower.endsWith(".doc") || titleLower.endsWith(".docx")) {
        setFile(DOCFile);
      }
      setFile2(Delete);
    }
  }, [downloaded]);

  return (
    <SDocUpload
      maxCount={maxCount}
      accept={accept}
      showUploadList={false}
      onChange={handleChange}
      {...props}
    >
      <SContent>
        <SLeftIcon $isLoaded={descriptionState === "Загружено"}>
          {file}
        </SLeftIcon>
        <STextSection>
          <STitle>{displayTitle}</STitle>
          <SDescription>{descriptionState}</SDescription>
        </STextSection>
        <SRightIcon>{file2}</SRightIcon>
      </SContent>
    </SDocUpload>
  );
};
