import React from "react";
import { useRouter } from "next/navigation";

import { SReviewPage } from "@/screens/ReviewPage/ui/reviewPage.styles";
import { Button } from "@/shared/components";
import { ArrowLeft, Exit } from "@/shared/assets";

export const ReviewPage = () => {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.push("/");
  };
  const handleExitButtonClick = () => {
    router.push("/");
  };

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

        <Button onClick={handleExitButtonClick} color="blue" icon={<Exit />}>
          Завершить проверку
        </Button>
      </div>
    </SReviewPage>
  );
};
