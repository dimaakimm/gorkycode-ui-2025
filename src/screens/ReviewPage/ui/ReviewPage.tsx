"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/components";
import {
  ArrowLeft,
  DocDownload,
  DocInfo,
  Exit,
  RequiermentsError,
} from "@/shared/assets";
import { DocReview } from "@/entities/doc";
import { ErrorBlock } from "@/entities/error";

import {
  SButtonsSection,
  SDocsContainer,
  SErrorBlocksContainer,
  SReviewPage,
  SSubtitle,
  STitle,
} from "./reviewPage.styles";

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
          <SDocsContainer>
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
            <DocReview
              isLoading={false}
              title={"Обоснование НМЦК.xlsx"}
              format={".xls"}
            />
            <SButtonsSection>
              <Button icon={<DocInfo />} color={"gray"}>
                Скачать справку
              </Button>
              <Button icon={<DocDownload />} color={"gray"}>
                Скачать анализ
              </Button>
            </SButtonsSection>
          </SDocsContainer>
        </div>

        <div>
          <STitle>Ошибки</STitle>
          <SErrorBlocksContainer>
            <ErrorBlock
              color={"#EC5653"}
              icon={<RequiermentsError />}
              title={"Несоответствие требованиям"}
              errors={[
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "http:www",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
              ]}
            />
            <ErrorBlock
              color={"#A753EC"}
              icon={<RequiermentsError />}
              title={"Неточные формулировки"}
              errors={[
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "http:www",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
              ]}
            />
            <ErrorBlock
              color={"#76A0F4"}
              icon={<RequiermentsError />}
              title={"Орфографические ошибки"}
              errors={[
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "http:www",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
              ]}
            />
            <ErrorBlock
              color={"#F4A076 "}
              icon={<RequiermentsError />}
              title={"Общие ошибки"}
              errors={[
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "http:www",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
              ]}
            />
          </SErrorBlocksContainer>
        </div>
      </div>
    </SReviewPage>
  );
};
