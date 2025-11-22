"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "antd";

import { Button, useNotify } from "@/shared/components";
import { ArrowLeft, EmptyUploadFile, Exit } from "@/shared/assets";
import { DocUpload, useCreateDocsForm } from "@/entities/doc";
import { ZipUpload } from "@/features/ZipUpload";

import {
  SButtonSection,
  SContent,
  SDocsList,
  SDocsPage,
  SDocsSection,
  SMainContent,
  SMidSection,
  SPageTitle,
  SSubtitle,
  STitleSection,
  SZipSection,
} from "./docsPage.styles";

const DocsPage = () => {
  const router = useRouter();
  const notify = useNotify();
  const { activeUrl, isReady, isEmpty, errors } = useCreateDocsForm();
  const [nmck, setNmck] = useState("Обоснование НМЦК");
  const [contract, setContract] = useState("Проект государственного контракта");
  const [application, setApplication] = useState(
    "Требования к содержанию заявки",
  );
  const [notification, setNotification] = useState("Извещение");
  const [purchase, setPurchase] = useState("Описание объекта закупки");
  const [zipDownloaded, setZipDownloaded] = useState(false);

  const handleBackButtonClick = () => {
    router.push("/");
  };
  const isSendDisabled = !!errors.length;

  return (
    <SDocsPage>
      <div>
        <Button
          onClick={handleBackButtonClick}
          color="white"
          icon={<ArrowLeft />}
        >
          Вернуться
        </Button>
      </div>

      <SContent>
        <STitleSection>
          <SPageTitle>Загрузка файлов</SPageTitle>
          <SSubtitle>Подгрузите ваши файлы в систему на обработку </SSubtitle>
        </STitleSection>
        <SMainContent>
          <SDocsSection>
            <SZipSection>
              <ZipUpload setDownloaded={setZipDownloaded} />
            </SZipSection>

            <SMidSection>или</SMidSection>

            <SDocsList>
              <DocUpload
                title={nmck}
                FileIcon={<EmptyUploadFile />}
                docType={"IMCP"}
                downloaded={zipDownloaded}
              />
              <DocUpload
                title={contract}
                FileIcon={<EmptyUploadFile />}
                docType={"DraftGovernmentContract"}
                downloaded={zipDownloaded}
              />
              <DocUpload
                title={application}
                FileIcon={<EmptyUploadFile />}
                docType={"BidContentRequirements"}
                downloaded={zipDownloaded}
              />
              <DocUpload
                title={notification}
                FileIcon={<EmptyUploadFile />}
                docType={"Notice"}
                downloaded={zipDownloaded}
              />
              <DocUpload
                title={purchase}
                FileIcon={<EmptyUploadFile />}
                docType={"DescriptionOfProcurementItem"}
                downloaded={zipDownloaded}
              />
            </SDocsList>
          </SDocsSection>

          <SButtonSection>
            {!isEmpty && (
              <Button
                color="white"
                onClick={() =>
                  notify({
                    message: "Нажата кнопка",
                    type: "error",
                    description: "Будет добавлен соответствующий функционал",
                  })
                }
              >
                Очистить список
              </Button>
            )}

            <Tooltip
              title={
                <ul>
                  {errors.map((err, index) => (
                    <li style={{ marginBottom: 6 }} key={index}>
                      {err}
                    </li>
                  ))}
                </ul>
              }
            >
              <Button color={"blue"} disabled={!isReady}>
                Отправить файлы на обработку
              </Button>
            </Tooltip>
          </SButtonSection>
        </SMainContent>
      </SContent>
    </SDocsPage>
  );
};

export default DocsPage;
