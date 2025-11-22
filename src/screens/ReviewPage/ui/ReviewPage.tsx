"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { string } from "yup";

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
import { DocReview, DocType } from "@/entities/doc";
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
  const [activeDoc, setActiveDoc] = useState<DocType>("IMCP");
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.push(routes.DOCS_PAGE);
  };
  const handleExitButtonClick = () => {
    router.push("/docs");
  };

  const getAnalyze = async () => {
    const fileUrl = "";
    downloadFile(fileUrl);
  };

  const getItog = () => {
    const fileUrl = "";
    downloadFile(fileUrl);
  };

  const downloadFile = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
    });
    const blob = await response.blob();

    // пытаемся достать имя файла из Content-Disposition
    const contentDisposition = response.headers.get("Content-Disposition");
    let filename = "document";

    if (contentDisposition) {
      // ищем filename*=utf-8''имя_файла
      const utf8Match = /filename\*=utf-8''([^;]+)/i.exec(contentDisposition);
      const asciiMatch = /filename="?([^";]+)"?/i.exec(contentDisposition);

      if (utf8Match && utf8Match[1]) {
        filename = decodeURIComponent(utf8Match[1]);
      } else if (asciiMatch && asciiMatch[1]) {
        filename = asciiMatch[1];
      }
    }

    // создаём временную ссылку и кликаем по ней
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(blobUrl);
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
              onClick={() => setActiveDoc("IMCP")}
              isLoading={false}
              title={"Обоснование НМЦК.doc"}
              format={".xls"}
              isActive={activeDoc === "IMCP"}
            />
            <DocReview
              onClick={() => setActiveDoc("BidContentRequirements")}
              isLoading={false}
              title={"Требования к содержанию заявки.doc"}
              format={".xls"}
              isActive={activeDoc === "BidContentRequirements"}
            />
            <DocReview
              onClick={() => setActiveDoc("DraftGovernmentContract")}
              isLoading={false}
              title={"Проект государственного контракта.doc"}
              format={".xls"}
              isActive={activeDoc === "DraftGovernmentContract"}
            />
            <DocReview
              onClick={() => setActiveDoc("Notice")}
              isLoading={false}
              title={"Извещение.doc"}
              format={".xls"}
              isActive={activeDoc === "Notice"}
            />
            <DocReview
              onClick={() => setActiveDoc("DescriptionOfProcurementItem")}
              isLoading={false}
              title={"Описание объекта закупки.doc"}
              format={".xls"}
              isActive={activeDoc === "DescriptionOfProcurementItem"}
            />
            <SButtonsSection>
              <Button icon={<DocInfo />} onClick={getItog} color={"gray"}>
                Отчет об ошибках
              </Button>
              <Button
                icon={<DocDownload />}
                onClick={getAnalyze}
                color={"gray"}
              >
                Просмотр ошибок
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
              title={"Несоответствие законодательным актам"}
              errors={[
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  // eslint-disable-next-line max-len
                  link: "https://www.consultant.ru/cons/cgi/online.cgi?req=doc&base=LAW&n=494990&dst=100001#vlx3E3Ve8eSekpmq",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  // eslint-disable-next-line max-len
                  link: "https://www.consultant.ru/cons/cgi/online.cgi?req=doc&base=LAW&n=494990&dst=100001#vlx3E3Ve8eSekpmq",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "https://www.consultant.ru/cons/cgi/online.cgi?req=doc&base=LAW&n=494990&dst=100001#vlx3E3Ve8eSekpmq",
                },
              ]}
            />
            <ErrorBlock
              color={"#A753EC"}
              icon={<UnaccurateError />}
              title={"Ошибки на основе решений регуляторов"}
              errors={[
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "https://zakupki.gov.ru/epz/complaint/card/complaint-information.html?complaintNumber=202500151003002760",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "https://zakupki.gov.ru/epz/complaint/card/complaint-information.html?complaintNumber=202500151003002760",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "https://zakupki.gov.ru/epz/complaint/card/complaint-information.html?complaintNumber=202500151003002760",
                },
              ]}
            />
            <ErrorBlock
              color={"#76A0F4"}
              icon={<WrittingError />}
              title={"Орфографические ошибки"}
              errors={[
                {
                  // title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
                {
                  // title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
                {
                  // title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                },
              ]}
            />
            <ErrorBlock
              color={"#F4A076"}
              icon={<GeneralError />}
              title={"Согласованность комплекта документов"}
              errors={[
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "https://zakupki.gov.ru/epz/complaint/card/complaint-information.html?complaintNumber=202500151003002760",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "https://zakupki.gov.ru/epz/complaint/card/complaint-information.html?complaintNumber=202500151003002760",
                },
                {
                  title: "ФЗ 44 ч.3",
                  description: "Не указан способ определения поставщика",
                  link: "https://zakupki.gov.ru/epz/complaint/card/complaint-information.html?complaintNumber=202500151003002760",
                },
              ]}
            />
          </SErrorBlocksContainer>
        </SMainBlockSection>
      </SMainContent>
    </SReviewPage>
  );
};
