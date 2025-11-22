"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/components";
import {
  ArrowLeft,
  DocDownload,
  DocInfo,
  Exit,
  GeneralError,
  RequiermentsError,
  UnaccurateError,
  WrittingError,
} from "@/shared/assets";
import { DocReview } from "@/entities/doc";
import { ErrorBlock } from "@/entities/error";
import { routes } from "@/shared/config";

import {
  SButtonsSection,
  SDocsContainer,
  SErrorBlocksContainer,
  SMainBlockSection,
  SMainContent,
  SPageHeader,
  SReviewPage,
  SSubtitle,
  STitle,
  STitleSection,
} from "./reviewPage.styles";

export const ReviewPage = () => {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.push(routes.DOCS_PAGE);
  };
  const handleExitButtonClick = () => {
    router.push("/docs");
  };

  return (
    <SReviewPage>
      <SPageHeader>
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
      </SPageHeader>

      <SMainContent>
        <SMainBlockSection>
          <STitleSection>
            <STitle>Обработка файлов</STitle>
            <SSubtitle>Подождите, пока ваши файлы в обработке</SSubtitle>
          </STitleSection>
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
        </SMainBlockSection>

        <SMainBlockSection>
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
              icon={<UnaccurateError />}
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
              icon={<WrittingError />}
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
              color={"#F4A076"}
              icon={<GeneralError />}
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
        </SMainBlockSection>
      </SMainContent>
    </SReviewPage>
  );
};
