import React from "react";

import { SReviewPage } from "@/screens/ReviewPage/ui/reviewPage.styles";
import { Button } from "@/shared/components";
import { ArrowLeft } from "@/shared/assets";

export const ReviewPage = () => {
  return (
    <SReviewPage>
      <div>
        <Button
          onClick={handleBackButtonClick}
          color="white"
          icon={<ArrowLeft />}
        >
          Вернуться
        </Button>
      </div>
    </SReviewPage>
  );
};
