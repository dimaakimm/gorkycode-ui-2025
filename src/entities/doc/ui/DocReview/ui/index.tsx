import React, { FC } from "react";

import { Button } from "@/shared/components";
import { DocDownload, DocInfo } from "@/shared/assets";

import { SDocReview } from "../../../model/docReview.styles";

export interface DocReviewProps {
  isLoading: boolean;
  title: string;
  description?: string;
  format: string;
  infoUrl?: string;
  downloadUrl?: string;
}

export const DocReview: FC<DocReviewProps> = ({
  isLoading,
  title,
  description,
  format,
  infoUrl,
  downloadUrl,
}) => {
  return (
    <SDocReview>
      <div>icon</div>
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
