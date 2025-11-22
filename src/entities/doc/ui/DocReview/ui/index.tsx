import React, { FC } from "react";

import { Button } from "@/shared/components";
import { DocDownload, DocInfo } from "@/shared/assets";

import { getDocIconByTitle } from "../lib/getDocIconByTitle";
import { SDocReview } from "./docReview.styles";

export interface DocReviewProps {
  isLoading: boolean;
  title: string;
  onClick: () => void;
  description?: string;
  format: string;
  infoUrl?: string;
  downloadUrl?: string;
  isActive?: boolean;
}

export const DocReview: FC<DocReviewProps> = ({
  isLoading,
  isActive,
  title,
  onClick,
  description,
  infoUrl,
  downloadUrl,
}) => {
  const icon = getDocIconByTitle(title);
  return (
    <SDocReview onClick={onClick} $isActive={isActive}>
      <div>{icon}</div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div>
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
