import React from "react";

import { DocUpload } from "@/entities/doc";
import { EmptyUploadFile, Folder } from "@/shared/assets";
import { SMidSection } from "@/screens/DocsPage/ui/docsPage.styles";

import { SDocsList } from "./docsList.styles";

export const DocsList = () => {
  return (
    <div>
      <SDocsList>
        <DocUpload title={"Добавьте zip файл"} FileIcon={<Folder />} />
      </SDocsList>
      <SMidSection>или</SMidSection>{" "}
      <SDocsList>
        <DocUpload title={"Обоснование НМЦК"} FileIcon={<EmptyUploadFile />} />
        <DocUpload
          title={"Проект государственного контракта"}
          FileIcon={<EmptyUploadFile />}
        />
        <DocUpload
          title={"Требования к содержанию заявки"}
          FileIcon={<EmptyUploadFile />}
        />
        <DocUpload title={"Извещение"} FileIcon={<EmptyUploadFile />} />
        <DocUpload
          title={"Описание объекта закупки"}
          FileIcon={<EmptyUploadFile />}
        />
      </SDocsList>
    </div>
  );
};
