"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/components";
import { ArrowLeft, DocDownload, DocInfo, Exit } from "@/shared/assets";
import { DocReview } from "@/entities/doc";

import { SReviewPage, SSubtitle, STitle } from "./reviewPage.styles";

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
      <div>
        <div>
          <div>
            <STitle>Обработка файлов</STitle>
            <SSubtitle>Подождите, пока ваши файлы в обработке</SSubtitle>
          </div>
          <div>
            <DocReview
              isLoading={false}
              title={"Обоснование НМЦК.xlsx"}
              format={".xls"}
            />
            <DocReview
              isLoading={false}
              title={"Обоснование НМЦК.xlsx"}
              format={".xls"}
            />
            <DocReview
              isLoading={false}
              title={"Обоснование НМЦК.xlsx"}
              format={".xls"}
            />
            <DocReview
              isLoading={false}
              title={"Обоснование НМЦК.xlsx"}
              format={".xls"}
            />
            <div>
              <Button icon={<DocInfo />} color={"gray"}>
                Скачать справку
              </Button>
              <Button icon={<DocDownload />} color={"gray"}>
                Скачать анализ
              </Button>
            </div>
          </div>
        </div>

        <div>
          <STitle>Ошибки</STitle>
          <div>
            <div>
              <div>Несоответствие требованиям</div>
            </div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
          </div>
        </div>
      </div>
    </SReviewPage>
  );
};
