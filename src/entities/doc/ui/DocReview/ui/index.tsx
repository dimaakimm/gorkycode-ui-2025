import React, { FC } from "react";

import { Button, Loader } from "@/shared/components";
import { DocDownload, DocInfo } from "@/shared/assets";

import { DocReviewProps } from "../model/docReview.types";
import { getDocIconByTitle } from "../lib/getDocIconByTitle";
import {
  SDocReview,
  STitle,
  SDescription,
  SMainInfo,
  SIcon,
} from "./docReview.styles";

export const DocReview: FC<DocReviewProps> = ({
  isLoading,
  isActive,
  title,
  onClick,
  infoUrl,
  downloadUrl,
}) => {
  const icon = getDocIconByTitle(title);
  const description = isLoading ? "Загрузка файла 50%" : "Обработанный файл";

  return (
    <SDocReview onClick={onClick} $isActive={isActive}>
      <SIcon $isLoading={isLoading}>{icon}</SIcon>
      <SMainInfo>
        <STitle>{title}</STitle>
        <SDescription>{description}</SDescription>
      </SMainInfo>
      <div>
        {isLoading && <Loader />}
        {infoUrl && (
          <Button>
            <DocInfo />
          </Button>
        )}
        {downloadUrl && (
          <Button>
            <DocDownload />
          </Button>
        )}
      </div>
    </SDocReview>
  );
};
