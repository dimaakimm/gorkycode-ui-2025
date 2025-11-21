"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "antd";

import { Button, useNotify } from "@/shared/components";
import { ArrowLeft } from "@/shared/assets";
import { FileView } from "@/features/FileView";
import { DocsList } from "@/widgets/DocsList";
import { FilePreview } from "@/features/FilePreview";
import { useCreateDocsForm } from "@/entities/doc";

import {
  SContent,
  SDocsPage,
  SMainContent,
  SPageTitle,
  SPreviewSection,
  SSection,
  SSubtitle,
  SUploadSection,
} from "./docsPage.styles";

const DocsPage = () => {
  const router = useRouter();
  const notify = useNotify();
  const { activeUrl, errors } = useCreateDocsForm();

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
        <SPageTitle>Загрузка файлов</SPageTitle>
        <SMainContent>
          <SSection>
            <SSubtitle>Подгрузите ваши файлы в систему на обработку </SSubtitle>
            <SUploadSection>
              <DocsList />
            </SUploadSection>
          </SSection>

          <SSection>
            <SSubtitle>Предпросмотр файла</SSubtitle>
            <SPreviewSection>
              {!activeUrl && <FileView url={"wddwdw"} />}
              {activeUrl && <FilePreview />}
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
                <Button color={"blue"} disabled={isSendDisabled}>
                  Отправить файлы на обработку
                </Button>
              </Tooltip>
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
            </SPreviewSection>
          </SSection>
        </SMainContent>
      </SContent>
    </SDocsPage>
  );
};

export default DocsPage;
