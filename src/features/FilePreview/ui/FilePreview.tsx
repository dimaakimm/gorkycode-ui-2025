import React from "react";

import { Preview } from "@/shared/assets";

import { SFilePreview, SPreviewIcon, SText } from "./filePreview.styles";

export const FilePreview = () => {
  return (
    <SFilePreview>
      <SPreviewIcon>
        <Preview />
      </SPreviewIcon>
      <SText>
        Для начала предпросмотра
        <br /> загрузите файлы
      </SText>
    </SFilePreview>
  );
};
