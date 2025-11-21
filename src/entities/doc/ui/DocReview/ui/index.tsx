import React, { FC } from "react";

import { Button } from "@/shared/components";
import { DocDownload, DocInfo } from "@/shared/assets";

import { SDocReview } from "./docReview.styles";

export const DocReview: FC<{
  isLoading: boolean;
  title: string;
  description?: string;
  format: string;
  infoUrl?: string;
  dowloadUrl?: string;
}> = () => {
  return (
    <SDocReview>
      <div>icon</div>
      <div>
        <div>title</div>
        <div>sub</div>
      </div>
      <div>
        <div>
          <Button>
            <DocInfo />
          </Button>
        </div>
        <div>
          <Button>
            <DocDownload />
          </Button>
        </div>
      </div>
    </SDocReview>
  );
};
