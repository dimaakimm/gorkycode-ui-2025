import React from "react";
import Upload, { RcFile, UploadChangeParam } from "antd/es/upload";
import { UploadFile } from "antd";

import { DocUpload } from "@/entities/doc";
import { Folder } from "@/shared/assets";
import { useNotify } from "@/shared/components";

import { ALLOWED_EXTENSIONS, MAX_SIZE_MB } from "../lib/constants";

export const ZipUpload = () => {
  const notify = useNotify();

  const beforeUpload = (file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !ALLOWED_EXTENSIONS.includes(extension)) {
      notify({
        type: "error",
        message: "Ошибка загрузки",
        description: `Недопустимый формат файла: ${extension}. 
Разрешены: ZIP, RAR, 7Z.`,
      });
      return Upload.LIST_IGNORE;
    }

    const isTooBig = file.size / 1024 / 1024 > MAX_SIZE_MB;
    if (isTooBig) {
      notify({
        type: "error",
        message: "Файл слишком большой",
        description: `Максимальный размер: ${MAX_SIZE_MB} МБ`,
      });
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleUpload = async (info: UploadChangeParam<UploadFile>) => {
    const file = info.file.originFileObj as RcFile | undefined;

    if (!file) {
      notify({
        type: "error",
        message: "Ошибка",
        description: "Файл не найден или повреждён",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error();

      notify({
        type: "success",
        message: "Успех",
        description: `Файл ${file.name} успешно отправлен`,
      });
    } catch {
      notify({
        type: "error",
        message: "Ошибка",
        description: `Не удалось отправить файл ${file.name}`,
      });
    }
  };

  return (
    <DocUpload
      beforeUpload={beforeUpload}
      onChange={handleUpload}
      accept=".zip,.rar,.7z"
      title={"Добавьте zip файл"}
      FileIcon={<Folder />}
    />
  );
};
